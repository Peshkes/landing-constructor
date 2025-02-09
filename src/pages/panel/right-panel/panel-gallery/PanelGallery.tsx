import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import styles from "./panelGallery.module.css";
import {throttle} from "../../../../shared/functions.ts";

type Props = {
    children: ReactNode
    onScroll: (element: HTMLDivElement) => void
}

const PanelGallery = ({children, onScroll}: Props) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState<number | undefined>(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const throttledOnScroll = useCallback(throttle((element: HTMLDivElement) => {
        onScroll(element);
    }, 1000), [onScroll]);

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
        if (!container) return;

        const scrollHandler = () => throttledOnScroll(container);
        container.addEventListener("scroll", scrollHandler);

        return () => {
            container.removeEventListener("scroll", scrollHandler);
        };
    }, [throttledOnScroll]);

    return (
        <div ref={divRef} style={{gridTemplateColumns: `repeat(${rows}, 1fr)`}} className={styles.gallery}>
            { rows && children }
        </div>
    )
}
export default PanelGallery
