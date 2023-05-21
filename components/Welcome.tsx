import React from 'react';

function Welcome() {
    return (
        <div className='text-center py-10'>
            <h1 className='text-4xl font-bold text-green-500 mb-4'>Welcome!</h1>
            <p className='text-lg mb-4'>
                You can communicate with your friend via walkie-talkie! Only you and your friend can
                see the messages.
            </p>
            <p className='text-lg'>Please, login or register to start chatting.</p>
        </div>
    );
}

export default Welcome;
