import {ReactNode, useCallback, useState} from 'react';
import Modal from "./Modal.tsx";

export type MessageType = 'success' | 'error' | 'info';

type UseModalReturnType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    setMessage: (message: string, type: MessageType) => void;  // Теперь передаем и тип сообщения
    Modal: ({ children }: { children?: ReactNode }) => ReactNode;
};

const useModal = (): UseModalReturnType => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<string>('');  // Сообщение
    const [messageType, setMessageType] = useState<MessageType>('info'); // Тип сообщения

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const setMessageHandler = useCallback((newMessage: string, type: MessageType) => {
        setMessage(newMessage);
        setMessageType(type);
    }, []);

    const ModalComponent = ({ children }: { children?: ReactNode }) => (
        <Modal isOpen={isOpen} onClose={closeModal} type={messageType}>
            <div>
                {children || <p>{message}</p>}
            </div>
        </Modal>
    );

    return { isOpen, openModal, closeModal, setMessage: setMessageHandler, Modal: ModalComponent };
};

export default useModal;
