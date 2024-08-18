import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="z-10 max-w-5xl mx-auto w-full items-center justify-between font-mono text-sm flex">
            <nav className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-900 h-16 backdrop-blur-2xl">
                <Link className='text-base font-semibold' href="/">Mh TODO</Link>
            </nav>
        </div>
    );
};

export default Navbar;