import {ReactNode, useCallback, useState} from 'react';
import Modal from "./Modal.tsx";

export type MessageType = 'success' | 'error' | 'info' | 'default';

type UseModalReturnType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    setMessage: (message: string, type: MessageType) => void;
    openMessage: (message: string, type: MessageType) => void;
    Modal: ({ children }: { children?: ReactNode }) => ReactNode;
};

const useModal = (): UseModalReturnType => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<MessageType>('default');

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const setMessageHandler = useCallback((newMessage: string, type: MessageType) => {
        setMessage(newMessage);
        setMessageType(type);
    }, []);

    const openMessage = useCallback((message: string, messageType: MessageType) => {
        setMessageHandler(message, messageType);
        setIsOpen(true)
    }, [setMessageHandler]);

    const ModalComponent = ({ children }: { children?: ReactNode }) => (
        <Modal isOpen={isOpen} onClose={closeModal} type={messageType}>
            <div>
                {children || <p>{message}</p>}
            </div>
        </Modal>
    );

    return { isOpen, openModal, closeModal, openMessage, setMessage: setMessageHandler, Modal: ModalComponent };
};

export default useModal;
