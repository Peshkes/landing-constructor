import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateClock = () => {
            setTime(new Date());
            const now = new Date();
            const delay = 1000 - (now.getMilliseconds()); // Вычисляем время до следующей секунды
            setTimeout(updateClock, delay);
        };

        // Первое обновление сразу
        const timeout = setTimeout(updateClock, 0);

        // Очищаем таймер при размонтировании
        return () => clearTimeout(timeout);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString();
    };

    return (
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {formatTime(time)}
        </div>
    );
};

export default Timer;
