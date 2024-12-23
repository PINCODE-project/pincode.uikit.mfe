import io from "socket.io-client";

const getConnect = (link: string) => {
    return io(link, {
        autoConnect: false,
        'reconnection': true,
        'reconnectionDelay': 500,
        'reconnectionAttempts': 10,
        extraHeaders: {
            "ngrok-skip-browser-warning": "true"
        }
    });
}
export default getConnect;