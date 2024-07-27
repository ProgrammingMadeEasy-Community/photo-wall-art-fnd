import Hamburger from '@/components/landing/Hamburger';
import Link from 'next/link';
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";


function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative h-screen overflow-hidden">
            <header className="flex justify-between items-center lg:px-0 px-3">
                <div className="lg:pl-[65px] lg:order-1 order-2">
                    <Hamburger />
                </div>
                <div className="lg:order-2 order-1">
                    <p className="lg:text-5xl text-xl py-6 text-center font-bold ">Photo Wall</p>
                </div>
                <div className="lg:block hidden order-3"></div>
            </header>

            {children}


        </main>
    )
}

export default layout
