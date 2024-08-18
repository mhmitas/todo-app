import Navbar from '@/components/navigations/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <section className='max-w-screen-2xl mx-auto flex-1 mt-16 w-full'>
                {children}
            </section>
        </div>
    );
};

export default layout;