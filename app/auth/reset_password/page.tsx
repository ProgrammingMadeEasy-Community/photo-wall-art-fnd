import AuthCard from '@/components/auth/AuthCard'
import InputField from '@/components/auth/InputField';
import Link from 'next/link';
import React from 'react'

function page() {
    return (
        <AuthCard>
            <div className='py-5 lg:px-[50px] px-8 border h-full'>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='text-[#0A6A88] font-medium text-[30px]'>Reset Password</h3>
                </div>


                <div className='space-y-4 mt-[60px]'>
                    <InputField label={"New Password"} />
                    <InputField label={"Confirm New Password"} />

                    <div className='flex items-center justify-center w-full'>
                        <Link href={'/auth/reset_successful'} className='w-full'>
                            <button className="z-10 px-[75px] py-3 bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black   hover:-translate-y-1 hover:translate-x-1 transition-transform font-medium lg:text-2xl text-lg lg:w-auto w-full mt-8">Submit</button>
                        </Link>
                    </div>
                </div>

            </div>
        </AuthCard>
    )
}

export default page