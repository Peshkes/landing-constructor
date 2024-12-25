import React, { ReactNode, useCallback, useRef, useEffect, useState } from "react";
import style from "./sideContentMenu.module.css";

type Props = {
    isOpen: boolean;
    side: "left" | "right";
    minWidth: number;
    maxWidth: number;
    defaultWidth: number;
    children?: ReactNode;
};

const SideContentMenu = ({ isOpen, side, minWidth, maxWidth, defaultWidth, children }: Props) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [currentWidth, setCurrentWidth] = useState(defaultWidth);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = menuRef.current?.clientWidth || 0;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const deltaX = side === "left" ? moveEvent.clientX - startX : startX - moveEvent.clientX;
            const newWidth = Math.min(Math.max(startWidth + deltaX, minWidth), maxWidth);
            menuRef.current!.style.width = `${newWidth}px`;
        };

        const handleMouseUp = () => {
            const newWidth = menuRef.current?.clientWidth || 0;
            setCurrentWidth(newWidth);

            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }, [side, minWidth, maxWidth]);

    useEffect(() => {
        if (!isOpen) {
            menuRef.current!.style.width = `0`;
        } else {
            menuRef.current!.style.width = `${currentWidth}px`;
        }
    }, [isOpen]);

    return (
        <div
            ref={menuRef}
            style={{ width: currentWidth }}
            className={`${style.body} ${side === "left" ? style.left : style.right}`}
        >
            {children}
            <div
                className={`${style.resizeHandle} ${side === "left" ? style.resizeHandleLeft : style.resizeHandleRight}`}
                onMouseDown={handleMouseDown}
            />
        </div>
    );
};

export default SideContentMenu;
