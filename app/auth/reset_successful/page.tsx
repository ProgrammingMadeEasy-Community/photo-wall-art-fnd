import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='w-[1200px] h-[700px] bg-white rounded-[20px] overflow-hidden  flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <Image
                    src={'/images/Like.png'}
                    alt='like'
                    width={220}
                    height={240}
                />
                <p className='text-2xl font-medium pt-[100px] text-center'>Password Reset Successful</p>
            </div>
        </div>
    )
}

export default page
