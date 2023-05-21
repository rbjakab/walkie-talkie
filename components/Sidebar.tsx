'use client';
import { useAuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import signOut from '@/firebase/auth/signout';

const Sidebar = () => {
    const { user } = useAuthContext();

    if (user === null) {
        return null;
    }

    const dummyListOfWalkieTalkies = [
        { id: 1, title: 'Walkie Talkie 1', url: '/walkie-talkie-1' },
        { id: 2, title: 'Walkie Talkie 2', url: '/walkie-talkie-2' },
        { id: 3, title: 'Walkie Talkie 3', url: '/walkie-talkie-3' },
    ];

    const createWalkieTalkie = () => {
        // Code to handle creating a new walkie talkie
        console.log('Create Walkie Talkie');
    };

    return (
        <div className='bg-gray-200 h-screen'>
            <div className='max-w-xs py-4 px-8'>
                <div className='space-y-4 flex flex-col items-center'>
                    {dummyListOfWalkieTalkies.map((walkieTalkie) => (
                        <Link key={walkieTalkie.id} href={walkieTalkie.url} legacyBehavior>
                            <a className='text-gray-700 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium'>
                                {walkieTalkie.title}
                            </a>
                        </Link>
                    ))}

                    <button
                        type='submit'
                        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'
                        onClick={createWalkieTalkie}
                    >
                        Add Walkie Talkie
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
