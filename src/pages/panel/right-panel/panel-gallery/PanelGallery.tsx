import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./panelGallery.module.css";

const PanelGallery = ({children}: { children: ReactNode }) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState<number | undefined>(undefined);

    function calculateRows() {
        if (divRef.current) {
            const width = divRef.current.clientWidth;
            return width < 900 ? 1 : Math.floor((width - 900) / 500) + 2;
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => setRows(calculateRows()));
        if (divRef.current) resizeObserver.observe(divRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={divRef} style={{gridTemplateColumns: `repeat(${rows}, 1fr)`}} className={styles.gallery}>
            { rows && children }
        </div>
    )
}
export default PanelGallery
