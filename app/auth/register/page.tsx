import AuthCard from '@/components/auth/AuthCard'
import InputField from '@/components/auth/InputField';
import Link from 'next/link';
import React from 'react'

function page() {
    return (
        <AuthCard>
            <div className='py-5 px-[50px] border h-full'>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='text-[#0A6A88] font-medium text-[30px]'>Create Account</h3>
                    <p className='font-medium text-[24px]'>Kindly fill in the necessary details</p>
                </div>


                <div className='space-y-4 mt-[22px]'>
                    <InputField label={"Email"} />
                    <InputField label={"Password"} />
                    <InputField label={"Confirm Password"} />

                    <div className='flex items-center justify-center'>
                        <button className="z-10 px-[75px] py-3 bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black   hover:-translate-y-1 hover:translate-x-1 transition-transform font-medium text-2xl mt-3">Sign Up</button>
                    </div>

                    <div>
                        <p className='text-center mt-10 font-medium text-2xl'>Already have an account? <Link href={'/auth/login'} className='text-[#0A6A88]'>Sign in</Link></p>
                    </div>
                </div>

            </div>
        </AuthCard>
    )
}

export default page