import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import {MessageType} from "./useModal.tsx";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    type: MessageType;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, type, children }: ModalProps) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent + " " + styles[type]} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
};

export default Modal;
