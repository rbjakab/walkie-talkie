'use client';
import React, { ReactNode } from 'react';
import { Modal } from '../../components/Modal';

interface SelectedContextProviderProps {
    children: ReactNode;
}

type WalkieTalkies = 'wt-1' | 'wt-2';

interface SelectedContextValue {
    selected: WalkieTalkies;
    setSelected: (selected: WalkieTalkies) => void;
}

export const SelectedContext = React.createContext<SelectedContextValue>({
    selected: 'wt-1',
    setSelected: () => {},
});

export const useSelectedContext = () => React.useContext(SelectedContext);

export const SelectedContextProvider = ({ children }: SelectedContextProviderProps) => {
    const [selected, setSelected] = React.useState<WalkieTalkies>('wt-1');

    return (
        <SelectedContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectedContext.Provider>
    );
};
