import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface WalkieTalkieProps {
    handleTransmittingChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalkieTalkie = ({ handleTransmittingChange }: WalkieTalkieProps): JSX.Element => {
    const [isTransmitting, setIsTransmitting] = useState<boolean>(false);
    const [periods, setPeriods] = useState<string>('');

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        intervalId = setInterval(() => {
            setPeriods((prevPeriods) => {
                if (prevPeriods === '...') {
                    return '.';
                } else if (prevPeriods === '..') {
                    return '...';
                } else {
                    return '..';
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleClick = (): void => {
        setIsTransmitting(!isTransmitting);
        handleTransmittingChange(!isTransmitting);
    };

    return (
        <div className='flex flex-col items-center'>
            <Image src={'/walkie_talkie.svg'} width={400} height={400} alt='Walkie Talkie' />
            <button
                className={`mt-4 px-4 py-2 rounded-md text-white w-40 ${
                    isTransmitting ? 'bg-orange-500' : 'bg-blue-500'
                }`}
                onClick={handleClick}
            >
                {isTransmitting ? `Transmitting${periods}` : `Receiving${periods}`}
            </button>
        </div>
    );
};

export default WalkieTalkie;
