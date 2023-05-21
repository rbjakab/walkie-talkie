'use client';
import React, { ReactNode } from 'react';
import { Modal } from '../../components/Modal';

interface ErrorContextProviderProps {
    children: ReactNode;
}

interface ErrorContextValue {
    error: null | string;
    setError: (error: string | null) => void;
}

export const ErrorContext = React.createContext<ErrorContextValue>({
    error: null,
    setError: () => {},
});

export const useErrorContext = () => React.useContext(ErrorContext);

export const ErrorContextProvider = ({ children }: ErrorContextProviderProps) => {
    const [error, setError] = React.useState<null | string>(null);

    const closeModal = () => {
        setError(null);
    };

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            <Modal isOpen={!!error} onClose={closeModal}>
                {error}
            </Modal>
            {children}
        </ErrorContext.Provider>
    );
};
