import { useCallback, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SignRecognitionProps {
    word: string;
    recognitionText: string[];
    onSuccess?: () => void;
    className?: string;
}

function SignRecognitionBlock({ word, recognitionText, onSuccess, className }: SignRecognitionProps) {
    const [recognizedSigns, setRecognizedSigns] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDevice, setSelectedDevice] = useState<string>("default");
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const socketRef = useRef<Socket>(null);
    const streamRef = useRef<MediaStream>(null);
    const intervalRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        socketRef.current = io("wss://pincode-dev.ru");

        socketRef.current.on("connect", () => {
            console.log("Connected to recognition server");
        });

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const onReceiveText = useCallback((data: string) => {
        try {
            const results: string[] = Object.values(JSON.parse(data));
            const newSign = results[0]?.toLowerCase();

            console.log(results, newSign, recognizedSigns);

            if (newSign && recognizedSigns[recognizedSigns.length - 1] !== newSign) {
                setRecognizedSigns((prev) => [...prev, newSign].slice(-6));
            }
        } catch (error) {
            console.error("Error parsing recognition data:", error);
        }
    }, [recognizedSigns]);

    useEffect(() => {
        socketRef.current?.on("send_not_normalize_text", onReceiveText);
        return () => {
            socketRef.current?.off("send_not_normalize_text", onReceiveText);
        };
    }, [onReceiveText]);

    useEffect(() => {
        async function getDevices() {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = devices.filter((device) => device.kind === "videoinput");
                setDevices(videoDevices);

                const savedDevice = localStorage.getItem("preferredCamera");
                const defaultDevice = savedDevice || videoDevices[0]?.deviceId;
                if (defaultDevice) {
                    setSelectedDevice(defaultDevice);
                }
            } catch (error) {
                console.error("Error getting devices:", error);
            }
        }

        getDevices();
    }, []);

    useEffect(() => {
        async function startWebcam() {
            if (!selectedDevice || !videoRef.current || !canvasRef.current) return;

            try {
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach((track) => track.stop());
                }

                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { deviceId: selectedDevice },
                });

                videoRef.current.srcObject = stream;
                streamRef.current = stream;
                setIsLoading(false);

                localStorage.setItem("preferredCamera", selectedDevice);

                startFrameSending();
            } catch (error) {
                console.error("Error accessing webcam:", error);
                setIsLoading(false);
            }
        }

        startWebcam();

        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [selectedDevice]);

    useEffect(() => {
        if (recognizedSigns.includes(word.toLowerCase())) {
            onSuccess?.();
        }
    }, [recognizedSigns, word, onSuccess]);

    const startFrameSending = useCallback(() => {
        if (!videoRef.current || !canvasRef.current || !socketRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            const video = videoRef.current;
            if (!video) return;

            canvas.width = 224;
            canvas.height = 224;

            // const aspectRatio = video.videoWidth / video.videoHeight;
            const newHeight = 224;
            const newWidth = 224;

            context.drawImage(video, 0, (224 - newHeight) / 2, newWidth, newHeight);

            const frame = canvas.toDataURL("image/jpeg");
            socketRef.current?.emit("data", frame);
        }, 30);
    }, []);

    return (
        <Card className={cn(className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">{word}</h2>
                    <p className="text-sm text-muted-foreground">Покажите жест в камеру</p>
                </div>
                <div className="flex items-center gap-2">
                    <Select value={selectedDevice || "default"} onValueChange={setSelectedDevice}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Выберите камеру" />
                        </SelectTrigger>
                        <SelectContent>
                            {devices.map((device, index) => (
                                <SelectItem key={device.deviceId} value={device.deviceId || `camera-${index}`}>
                                    {device.label || `Camera ${index + 1}`}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="relative rounded-lg overflow-hidden bg-muted">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                    )}
                    <video ref={videoRef} autoPlay playsInline muted className="w-full h-full" />
                    <canvas ref={canvasRef} className="hidden" />
                </div>

                <div className="space-y-2">
                    <h3 className="font-medium">Распознанные жесты</h3>
                    <div className="flex flex-wrap gap-2">
                        {recognizedSigns.map((sign, index) => (
                            <span
                                key={index}
                                className={cn(
                                    "px-2.5 py-1 rounded-full text-sm font-medium slide-in-from-bottom animate-in",
                                     recognitionText.some(text => text.toLowerCase() === sign.toLowerCase())
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
                                )}
                            >
                                {sign}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export { SignRecognitionBlock };
