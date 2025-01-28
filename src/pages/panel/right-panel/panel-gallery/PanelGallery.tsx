import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./panelGallery.module.css";
import {throttle} from "../../../../shared/functions.ts";

type Props = {
    children: ReactNode
    onScroll: (element: HTMLDivElement) => void
}

const PanelGallery = ({children, onScroll}: Props) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState<number | undefined>(undefined);

    const throttledOnScroll = throttle(onScroll, 1000);

    function calculateRows() {
        if (divRef.current) {
            const width = divRef.current.clientWidth;
            return width < 900 ? 1 : Math.floor((width - 900) / 500) + 2;
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => setRows(calculateRows()));
        if (divRef.current) resizeObserver.observe(divRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const container = divRef.current;
        if (container) container.addEventListener("scroll", () => throttledOnScroll(container));

        return () => {
            if (container) container.removeEventListener("scroll", () => throttledOnScroll(container));
        };
    }, [throttledOnScroll]);

    return (
        <div ref={divRef} style={{gridTemplateColumns: `repeat(${rows}, 1fr)`}} className={styles.gallery}>
            { rows && children }
        </div>
    )
}
export default PanelGallery
