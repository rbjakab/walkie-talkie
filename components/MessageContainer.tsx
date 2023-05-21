import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useErrorContext } from '@/context/ErrorContext';
import { db } from '@/firebase/config';
import { query, orderBy, collection, getDocs, addDoc } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Timestamp } from 'firebase/firestore';
import Loading from './Loading';

interface Message {
    text: string;
    owner: string;
    createdAt: Timestamp;
}

interface MessageContainerProps {
    owner: string;
    isTransmitting: boolean;
}

const MessageContainer: React.FC<MessageContainerProps> = ({ owner, isTransmitting }) => {
    const messagesRef = collection(db, 'messages');
    const messagesQuery = query(messagesRef, orderBy('createdAt'));
    const [messages, loading, error] = useCollectionData(messagesQuery);

    const [inputValue, setInputValue] = useState('');
    const { setError } = useErrorContext();

    const sendMessage = async (text: string) => {
        if (!text) {
            setError("You can't send an empty message, please try again.");
            return;
        }

        const newMessage: Message = {
            text,
            owner,
            createdAt: Timestamp.now(),
        };

        try {
            await addDoc(messagesRef, newMessage);
        } catch (err) {
            console.error('Error adding document: ', err);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage(inputValue);
        setInputValue('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='p-4'>
            <h2 className='text-2xl mb-4 flex flex-col items-center'>Messages</h2>

            <div className='space-y-2'>
                {messages &&
                    messages.map((message) => (
                        <div
                            key={message.createdAt.seconds + message.owner}
                            className={`p-2 rounded-md ${
                                message.owner === owner
                                    ? 'bg-blue-200 text-right'
                                    : 'bg-gray-200 text-left'
                            }`}
                        >
                            {message.text}
                        </div>
                    ))}
            </div>

            <form onSubmit={handleSubmit} className='mt-4'>
                <input
                    type='text'
                    name='message'
                    placeholder='Enter a message'
                    className={`p-2 border border-gray-300 rounded-md ${
                        !isTransmitting ? 'disabled' : ''
                    }`}
                    value={inputValue}
                    onChange={handleChange}
                    disabled={!isTransmitting}
                />
                <button
                    type='submit'
                    className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded-md ${
                        !isTransmitting ? 'disabled' : ''
                    }`}
                    disabled={!isTransmitting}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default MessageContainer;
