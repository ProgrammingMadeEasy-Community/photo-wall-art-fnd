import React from 'react'
import { Image1, Image2, Image3 } from '@/public/new';
import Image from 'next/image';

function AuthCard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='w-[1200px] h-[700px] bg-white rounded-[20px] overflow-hidden flex  justify-between mx-3 lg:mx-0 shadow-lg relative'>

            <Image src={Image2} alt="" className='absolute right-3 hidden lg:block' />
            <Image src={Image1} alt="" className='absolute left-0 bottom-0' />


            <div className='lg:w-1/2 w-full h-full'>
                {children}
            </div>

            <div className='lg:w-1/2 w-full h-full lg:flex hidden justify-center items-center'>



                <div className='flex items-center justify-center flex-col'>
                    <Image src={Image3} alt="" />
                    <h3 className='text-2xl text-center'>Experience remarkable and awe-inspiring outcomes with the unparalleled capabilities of our robust yet intuitively designed photo application.</h3>
                </div>

            </div>

        </div>
    )
}

export default AuthCard