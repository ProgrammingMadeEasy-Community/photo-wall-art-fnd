import AuthCard from '@/components/auth/AuthCard'
import InputField from '@/components/auth/InputField';
import Link from 'next/link';
import React from 'react'

function page() {
    return (
        <AuthCard>
            <div className='py-5 px-[50px] border h-full'>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='text-[#0A6A88] font-medium text-[30px]'>Forgot Password</h3>
                </div>


                <div className='space-y-4 mt-[120px]'>
                    <InputField label={"Email"} />

                    <div className='flex items-center justify-center '>
                        <Link href={'/auth/reset_password'} className=''>
                            <button className="z-10 px-[75px] py-3 bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black   hover:-translate-y-1 hover:translate-x-1 transition-transform font-medium text-2xl mt-24">Submit</button>
                        </Link>
                    </div>
                </div>

            </div>
        </AuthCard>
    )
}

export default page