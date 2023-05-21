'use client';
import { useAuthContext } from '@/context/AuthContext';

import { useEffect, useState } from 'react';
import Welcome from '../../../components/Welcome';
import WalkieTalkie from '../../../components/WalkieTalkie';
import MessageContainer from '../../../components/MessageContainer';
import { useSelectedContext } from '@/context/SelectedWalkieTalkie';

export default function Home() {
    const { user } = useAuthContext();
    const { setSelected } = useSelectedContext();
    const [isTransmitting, setIsTransmitting] = useState<boolean>(false);

    if (user == null) {
        return <Welcome />;
    }

    useEffect(() => {
        setSelected('wt-2');
    }, [setSelected]);

    return (
        <div className='flex justify-center'>
            <WalkieTalkie handleTransmittingChange={setIsTransmitting} />
            <MessageContainer owner='wt-2' isTransmitting={isTransmitting} />
        </div>
    );
}
