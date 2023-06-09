import './globals.css';

import { ContextWrapper } from '@/context/ContextWrapper';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export const metadata = {
    title: 'Walkie Talkie App',
    description: 'Created by Richard Jakab',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head></head>
            <body>
                <ContextWrapper>
                    <header>
                        <Navbar />
                    </header>

                    <div className='flex'>
                        <Sidebar />
                        <main className='flex-grow'>{children}</main>
                    </div>
                </ContextWrapper>
            </body>
        </html>
    );
}
