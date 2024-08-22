"use client"
import React, { useState, useEffect, useRef } from "react";

const NotificationApp = () => {
    const [intervalTime, setIntervalTime] = useState(5); // Default is 5 seconds
    const [isRunning, setIsRunning] = useState(false);
    const notificationRef = useRef()
    const minutes = [...Array(60).keys()]

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                notificationRef.current.play()
            }, intervalTime * 60000);
        }

        return () => clearInterval(interval);
    }, [isRunning, intervalTime]);

    return (
        <div className="bg-base-200 border border-base-300 p-6 rounded-lg mt-8 w-full">
            <h1 className="text-lg font-bold mb-4">Reminder</h1>
            {isRunning && <p className="mb-1">Will be repeat after: {intervalTime} minute</p>}
            <div className="flex mb-4">
                <div className="flex gap-4">
                    <div>
                        <button className="btn btn-neutral" onClick={() => setIsRunning(!isRunning)}>
                            {isRunning ? "Stop" : "Start"} Reminder
                        </button>
                    </div>
                    <div>
                        Select repeat time:
                        <select onChange={(e) => {
                            setIntervalTime(e.target.value)
                        }}
                            value={intervalTime}
                            className="select bg-base-200 text-base"
                        >
                            <option value={.5}>0.5 min</option>
                            {minutes.map(minute => <option key={minute} value={minute + 1}>{minute + 1} min</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <audio ref={notificationRef} controls src="/notification1.mp3"></audio>
        </div>
    );
};

export default NotificationApp;
