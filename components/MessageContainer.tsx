import React, { useState, FormEvent, ChangeEvent } from 'react';

interface Message {
    id: number;
    text: string;
    owner: string;
}

interface MessageContainerProps {
    owner: string;
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

const MessageContainer: React.FC<MessageContainerProps> = ({ owner }) => {
    const [messages, setMessages] = useState<Message[]>(dummyMessages);
    const [inputValue, setInputValue] = useState('');

    const addMessage = (text: string) => {
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
            <h2 className='text-2xl mb-4'>Message Container</h2>

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
                    className='p-2 border border-gray-300 rounded-md'
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type='submit' className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md'>
                    Add Message
                </button>
            </form>
        </div>
    );
};

export default MessageContainer;
