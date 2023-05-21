'use client';
import { useAuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import logOut from '@/firebase/auth/logOut';

const Navbar = () => {
    const { user } = useAuthContext();

    return (
        <nav className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Link href='/' className='text-white font-bold'>
                                Walkie-Talkie
                            </Link>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ml-4 flex items-center space-x-4'>
                            {user === null ? (
                                <>
                                    <Link
                                        href='/login'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href='/register'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <button
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        onClick={() => logOut()}
                                    >
                                        Sign Out
                                    </button>
                                    {/* <Link
                                        href='/admin'
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        Admin
                                    </Link> */}
                                    <p className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        {user.email}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
