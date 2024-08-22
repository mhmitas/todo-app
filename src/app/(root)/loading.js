import React from 'react';

const Loading = () => {
    return (
        <div className='absolute inset-0 flex justify-center items-center'>
            <span className='loading loading-spinner'></span>
        </div>
    );
};

export default Loading;