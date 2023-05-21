'use client';
import { useAuthContext } from '@/context/AuthContext';
import Welcome from '../../components/Welcome';
import WalkieTalkie from '../../components/WalkieTalkie';
import MessageContainer from '../../components/MessageContainer';

export default function Home() {
    const { user } = useAuthContext();

    if (user == null) {
        return <Welcome />;
    }

    return (
        <div className='flex justify-center'>
            <WalkieTalkie />
            <MessageContainer owner='wt-1' />
        </div>
    );
}
