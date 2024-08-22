import Clock from '@/components/my-ui/Clock';
import Reminder from '@/components/my-ui/reminder';
import React from 'react';

const Page = () => {
    return (
        <div className='my-container mb-10'>
            <Clock />
            <Reminder />
        </div>
    );
};

export default Page;