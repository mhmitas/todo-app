import Clock from '@/components/my-ui/Clock';
import Reminder from '@/components/my-ui/reminder';
import React from 'react';

const Page = () => {
    return (
        <div className='my-container'>
            <Clock />
            <Reminder />
        </div>
    );
};

export default Page;