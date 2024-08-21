import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="z-10 max-w-5xl mx-auto w-full items-center justify-between font-mono text-sm flex">
            <nav className="fixed left-0 top-0 flex w-full items-center border-b border-gray-900 h-16 backdrop-blur-2xl justify-between px-3">
                <div className="flex items-center">
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-lg btn-sm btn-square"><AiOutlineMenu /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-lg border border-base-300 z-[1] w-52 p-2 shadow-md">
                            <li><Link href="/reminder">Reminder</Link></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <Link className='font-semibold btn btn-ghost btn-sm text-xl' href="/">Mh TODO</Link>
                </div>
                <div></div>
            </nav>
        </div>
    );
};

export default Navbar;