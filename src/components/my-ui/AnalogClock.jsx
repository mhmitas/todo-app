import React from 'react';

const AnalogClock = ({ hour, minute, second }) => {
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className='flex justify-center mb-4 overflow-auto'>
            <div className='size-max rounded-full p-2 bg-gradient-to-b from-amber-900 via-gray-500 to-gray-600'>
                <div className="relative flex items-center justify-center bg-white rounded-full size-64">
                    {/* Clock Center */}
                    <div className="absolute size-5 bg-gray-800 rounded-full z-40"></div>

                    {/* Hour Hand */}
                    <div className="absolute flex w-3 h-28 top-4 origin-bottom z-10 rounded-full" style={{ transform: `rotate(${((hour * 30) + ((minute / 60) * 30))}deg)` }}>
                        <div className='flex-1 w-full mt-10 bg-gray-600 rounded-full'></div>
                    </div>
                    {/* Minute Hand */}
                    <div className="absolute flex w-2 h-28 top-4 origin-bottom z-20 rounded-full" style={{ transform: `rotate(${minute * 6}deg)` }}>
                        <div className='flex-1 w-full mt-5 bg-blue-600 rounded-full'></div>
                    </div>
                    {/* Second Hand */}
                    <div className="absolute flex w-1 h-28 top-4 origin-bottom z-30 rounded-full" style={{ transform: `rotate(${second * 6}deg)` }}>
                        <div className='flex-1 w-full mt-2 bg-red-600 rounded-full'></div>
                    </div>

                    {/* hours */}
                    <>
                        {hours.map(hour => <div
                            key={hour}
                            className='absolute top-0 text-green-500 h-32 origin-bottom -z-0'
                            style={{ transform: `rotate(${hour * 30}deg)` }}
                        >
                            <p className='pt-1' style={{ transform: `rotate(${-30 * hour}deg)` }}>{hour}</p>
                        </div>)}
                    </>
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;
