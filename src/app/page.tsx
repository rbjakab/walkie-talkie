'use client';
import { useAuthContext } from '@/context/AuthContext';
import Welcome from '../../components/Welcome';
import WalkieTalkie from '../../components/WalkieTalkie';
import MessageContainer from '../../components/MessageContainer';
import { useState } from 'react';

export default function Home() {
    const { user } = useAuthContext();
    const [isTransmitting, setIsTransmitting] = useState<boolean>(false);

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
