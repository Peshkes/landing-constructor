import { useState } from "react";
import { NeuroApi } from "./NeuroApi.ts";
import {ChatStatus} from "./types.ts";

const useNeuroChat = () => {
    const [response, setResponse] = useState("");
    const [status, setStatus] = useState<ChatStatus>("idle");

    const handleChunk = (chunk: any) => {
        try {
            const objects = chunk.split("\n")
                .map((line: string) => line.trim())
                .filter((line: string) => line.startsWith("data: "));

            for (const obj of objects) {
                const jsonString = obj.slice(6);
                if (jsonString === "[DONE]") {
                    setStatus("finished");
                    return;
                }
                const parsed = JSON.parse(jsonString);

                if (parsed.object !== "chat.completion.chunk") continue;

                const content = parsed.choices?.[0]?.delta?.content;
                if (content) setResponse((prev) => prev + content);
            }
        } catch (e) {
            console.error("Ошибка обработки чата:", e);
            setStatus("error");
        }
    };

    const sendRequest = async (message: string) => {
        setResponse("");
        setStatus("thinking");
        try {
            await NeuroApi.getAiResponseStream(message, handleChunk, () => {
                if (status !== "error" && response.length !== 0) setStatus("finished");
            });
        } catch (error) {
            console.error("Ошибка запроса к боту:", error);
            setStatus("error");
        }
    };

    return {
        response,
        status,
        sendRequest,
    };
};

export default useNeuroChat;
