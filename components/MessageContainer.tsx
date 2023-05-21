import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useErrorContext } from '@/context/ErrorContext';
interface Message {
    id: number;
    text: string;
    owner: string;
}

interface MessageContainerProps {
    owner: string;
    isTransmitting: boolean;
}

const dummyMessages: Message[] = [
    {
        id: 1,
        text: 'Hello',
        owner: 'wt-1',
    },
    {
        id: 2,
        text: 'Hi',
        owner: 'wt-2',
    },
    {
        id: 3,
        text: 'How are you?',
        owner: 'wt-1',
    },
];

const MessageContainer: React.FC<MessageContainerProps> = ({ owner, isTransmitting }) => {
    const [messages, setMessages] = useState<Message[]>(dummyMessages);
    const [inputValue, setInputValue] = useState('');
    const { setError } = useErrorContext();

    const addMessage = (text: string) => {
        if (!text) {
            setError("You can't send an empty message, please try again.");
            return;
        }

        const newMessage: Message = {
            id: Date.now(),
            text,
            owner,
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMessage(inputValue);
        setInputValue('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='p-4'>
            <h2 className='text-2xl mb-4 flex flex-col items-center'>Messages</h2>

            <div className='space-y-2'>
                {messages.map((message) => (
                    <div
                        key={message.id}
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
