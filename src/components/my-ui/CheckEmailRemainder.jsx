import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CheckEmailRemainder = () => {
    return (
        <Link href="https://mail.google.com/mail/?tab=rm&ogbl">
            <div className="text-3xl font-black flex items-center justify-center gap-2 bg-base-200 hover:bg-opacity-75 duration-300 border border-base-300 p-4 rounded-lg">
                <Image src={"/assets/gamil.png"} height={40} width={40} alt="Gmail-logo" />
                <span>Check Mail</span>
            </div>
        </Link>
    );
};

export default CheckEmailRemainder;