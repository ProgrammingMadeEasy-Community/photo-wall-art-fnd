import AuthCard from '@/components/auth/AuthCard'
import InputField from '@/components/auth/InputField';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



function page() {
  return (
    <AuthCard>
      <div className='py-5 lg:px-[50px] px-8 border h-full'>
        <div className='flex flex-col items-center gap-2'>
          <h3 className='text-[#0A6A88] font-medium text-[30px]'>Sign into your Account</h3>
          <p className='font-medium text-[28px]'>OR</p>
          <div className='flex gap-5'>
            <FaFacebook className='size-10 text-blue-500' />
            <FcGoogle className='size-10' />
          </div>
        </div>


        <div className='space-y-4 mt-[22px]'>
          <InputField label={"Email"} />
          <div>
            <InputField label={"Password"} />
            <Link href={'/auth/forgot_password'}><p className='text-right text-[#7E7C7C] mt-1 underline cursor-pointer'>Forgot Password?</p></Link>
          </div>

          <div className='flex items-center justify-center'>
            <button className="z-10 px-[75px] py-3 bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black hover:-translate-y-1 hover:translate-x-1 transition-transform font-medium lg:text-2xl text-lg mt-3 lg:w-auto w-full">Sign In</button>
          </div>

          <div>
            <p className='text-center mt-10 font-medium lg:text-2xl text-lg'>Don't have an account? <Link href={'/auth/register'} className='text-[#0A6A88]'>Sign Up</Link></p>
          </div>
        </div>

      </div>
    </AuthCard>
  )
}

export default page