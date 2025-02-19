import React, {useState} from 'react';
import {RequestService} from "../../shared/RequestService.ts";

const Test = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResponse('');

        try {
            const csrf = RequestService.getGlobalHeader('x-csrf-token');
            console.log(csrf)
            const res = await fetch(import.meta.env.VITE_API_URL! + "/neuro/single-message", {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'x-csrf-token': csrf},
                body: JSON.stringify({message}),
            });

            const reader = res.body?.getReader();
            const decoder = new TextDecoder();

            if (reader) {
                while (true) {
                    const {done, value} = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    setResponse((prev) => prev + chunk);
                }
            }
        } catch (err) {
            setResponse('Error: ' + (err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                />
                <button disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
            {response && <div style={{color: "white"}}><b>Answer:</b> {response}</div>}
        </div>
    );
};

export default Test;
