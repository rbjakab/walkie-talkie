'use client';
import { useAuthContext } from '@/context/AuthContext';
import Welcome from '../../components/Welcome';
import WalkieTalkie from '../../components/WalkieTalkie';
import MessageContainer from '../../components/MessageContainer';
import { useEffect, useState } from 'react';
import { useSelectedContext } from '@/context/SelectedWalkieTalkie';

export default function Home() {
    const { user } = useAuthContext();
    const { setSelected } = useSelectedContext();
    const [isTransmitting, setIsTransmitting] = useState<boolean>(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setSelected('wt-1');
    }, []);

    if (user == null) {
        return <Welcome />;
    }

    return (
        <div className='flex justify-center'>
            <WalkieTalkie handleTransmittingChange={setIsTransmitting} />
            <MessageContainer owner='wt-1' isTransmitting={isTransmitting} />
        </div>
    );
}
