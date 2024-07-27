import Link from 'next/link';
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";


function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <nav className='bg-white shadow-sm px-4 py-2.5 border-b border-b-[#7E7C7C
]'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Link href={'/'}>
                                <FaChevronLeft />
                            </Link>

                        </div>
                        <div className='mx-auto'>
                            <h1 className='text-2xl font-bold'>Photo Wall Art</h1>
                        </div>

                    </div>
                </nav>
            </div>
            <main className='h-screen bg-white flex justify-center items-center overflow-hidden'>

                {children}
            </main>
        </>
    )
}

export default layout
