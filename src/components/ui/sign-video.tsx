import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FastForward, Fullscreen, Rewind } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
    source: string;
    ratio: number;
    className?: string;
    extraButtons?: ReactNode;
};

const SignVideo: FC<Props> = ({ source, className, ratio, extraButtons }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [speed, setSpeed] = useState(1);

    // Обновление видео при изменении source
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // Перезагрузка видео
            videoRef.current.playbackRate = speed;
        }
    }, [source]);

    const speedUp = () => {
        if (videoRef.current) {
            if (speed < 0.25) {
                setSpeed(0.25);
                videoRef.current.playbackRate = 0.25;
            } else {
                const newSpeed = Math.min(speed + 0.25, 2);
                setSpeed(newSpeed);
                videoRef.current.playbackRate = newSpeed;
            }
        }
    };

    const slowDown = () => {
        if (videoRef.current) {
            const newSpeed = Math.max(speed - 0.25, 0.1);
            setSpeed(newSpeed);
            videoRef.current.playbackRate = newSpeed;
        }
    };

    const fullscreen = async () => {
        if (videoRef.current) {
            await videoRef.current.requestFullscreen({ navigationUI: "show" });
        }
    };

    return (
        <div className={cn(className)}>
            <div className="relative">
                <div
                    className="overflow-hidden rounded-xl"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <AspectRatio ratio={ratio}>
                        <video ref={videoRef} className="w-full" controls={false} muted autoPlay loop>
                            <source src={source} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </AspectRatio>
                </div>

                <div className="mt-4 flex justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={slowDown}
                            disabled={speed <= 0.1}
                            title="Замедлить"
                        >
                            <Rewind className="h-4 w-4" />
                        </Button>
                        <span className="min-w-[60px] text-center">{`${speed.toFixed(2)}x`}</span>
                        <Button variant="outline" size="icon" onClick={speedUp} disabled={speed >= 2} title="Ускорить">
                            <FastForward className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex items-end gap-2">
                        {extraButtons}
                        <Button variant="outline" size="icon" onClick={fullscreen} title="Полный экран">
                            <Fullscreen className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignVideo;
