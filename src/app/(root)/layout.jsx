import Navbar from '@/components/navigations/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <section className='max-w-screen-2xl mx-auto flex-1'>
                {children}
            </section>
        </div>
    );
};

export default layout;