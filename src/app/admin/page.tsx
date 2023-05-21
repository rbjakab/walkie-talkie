'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

function Page() {
    const { user } = useAuthContext();
    const router = useRouter();

    // React.useEffect(() => {
    //     if (user == null) {
    //         // router.push('/');
    //         // return <p>No no no.</p>;
    //     }
    // }, [user, router]);

    if (user == null) {
        return <p>No no no.</p>;
    }

    return <h1>Only logged in users can view this page</h1>;
}

export default Page;
