'use client'
import React, { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';
import AnalogClock from './AnalogClock';

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] })

const Clock = () => {
    const [now, setNow] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hour = new Date(now).getHours()
    const minute = new Date(now).getMinutes()
    const second = new Date(now).getSeconds()
    // console.log(hour.length);

    return (
        <div>
            <div className={`flex items-center justify-center gap-2 text-4xl font-semibold bg-base-200 border-base-300 border w-max mx-auto py-3 px-5 mb-4 rounded-lg ${roboto.className}`}>
                <p>{hour.toString().padStart(2, '0')}</p>
                <span>:</span>
                <p>{minute.toString().padStart(2, '0')}</p>
                <span>:</span>
                <p>{second.toString().padStart(2, '0')}</p>
            </div>
            <AnalogClock hour={hour} minute={minute} second={second} />
        </div>
    );
};

export default Clock;