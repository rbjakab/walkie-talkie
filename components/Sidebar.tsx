'use client';
import { useAuthContext } from '@/context/AuthContext';
import { useSelectedContext } from '@/context/SelectedWalkieTalkie';
import Link from 'next/link';

const Sidebar = () => {
    const { user } = useAuthContext();
    const { selected } = useSelectedContext();

    if (user === null) {
        return null;
    }

    console.log(selected);

    const listOfWalkieTalkies = [
        { id: 'wt-1', title: 'Walkie Talkie 1', url: '/' },
        { id: 'wt-2', title: 'Walkie Talkie 2', url: '/wt2' },
    ];

    return (
        <div className='bg-gray-200 h-screen'>
            <div className='max-w-xs py-4 px-8'>
                <div className='space-y-4 flex flex-col items-center'>
                    {listOfWalkieTalkies.map((walkieTalkie) => (
                        <Link key={walkieTalkie.id} href={walkieTalkie.url} legacyBehavior>
                            <a
                                className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium ${
                                    selected === walkieTalkie.id
                                        ? 'bg-gray-300 text-gray-800'
                                        : 'hover:bg-gray-300 hover:text-gray-800'
                                }`}
                            >
                                {walkieTalkie.title}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
