import React from 'react'
import ImageUpload from '@/public/image.svg'
import Image from 'next/image'

function page() {
    return (
        <div className='flex flex-col w-full items-center justify-center overflow-hidden '>
            <div className='h-[80vh] w-full pt-[50px]'>
                <div className='flex flex-col items-center justify-center max-w-[1024px] w-full h-full mx-auto border-spacing-10 border-4 border-dashed'>
                    <Image src={ImageUpload} alt="" />
                    <p className='text-3xl font-bold'>Select Files to Upload</p>
                    <p>Or Drag and Drop, Copy and Paste Files</p>
                </div>
            </div>

            <div className='mt-10 flex bg-white shadow-xl justify-between w-[824px]'>
                <p>My Device</p>
                <p>Google Drive</p>
                <p>Facebook</p>
                <p>Google Photo</p>
                <p>One Drive</p>
            </div>
        </div>
    )
}

export default page