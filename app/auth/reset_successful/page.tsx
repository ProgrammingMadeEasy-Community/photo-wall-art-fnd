import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='lg:w-[1200px] w-full h-[700px] bg-white rounded-[20px] overflow-hidden  flex justify-center items-center mx-3 lg:mx-0'>
            <div className='flex flex-col items-center'>
                <Image
                    src={'/images/Like.png'}
                    alt='like'
                    width={220}
                    height={240}
                />
                <p className='lg:text-2xl text-lg font-medium lg:pt-[100px] pt-[50px] text-center'>Password Reset Successful</p>
            </div>
        </div>
    )
}

export default page
