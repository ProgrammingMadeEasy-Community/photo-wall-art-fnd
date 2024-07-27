"use client"

import AuthCard from '@/components/auth/AuthCard'
import InputField from '@/components/auth/InputField';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function page() {
    const [currentComp, setCurrentComponent] = React.useState("")
    const [name, setName] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [code, setCode] = React.useState<string>("")

    const handleNameSubmit = () => {
        console.log(name)
        if(currentComp === ""){
            setCurrentComponent("email")
        } else if(currentComp === "email"){
            setCurrentComponent("code")
        }
    }


    return (
        <AuthCard>
            <div className='flex flex-col justify-center items-center h-full gap-y-10 lg:px-16 px-6'>

                <h3 className='lg:text-[40px] text-3xl font-normal'>
                    {currentComp === 'email' ?
                        `Hello ${name}! 🤝` 
                        : currentComp === 'code' ?
                        <div>
                            <p >Code sent to Email</p>
                            <p className='text-sm'>An email with the code has been sent to {email}</p>
                        </div> 
                        : "Lets get to know you 🫵"
                    }

                </h3>
                {currentComp === 'email' ?

                    <InputField label={""} className="w-full" placeHolder="Email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                    :
                currentComp === 'code' ?
                <InputField label={""} className="w-full" placeHolder="Enter Code" value={code} onChange={(e: any) => setCode(e.target.value)} />
                    :
                    <InputField label={""} className="w-full" placeHolder="Your Name" value={name} onChange={(e: any) => setName(e.target.value)} />
                }


                <div className='gap-y-2 flex flex-col'>
                    <button className="cursor-pointer lg:px-[95px] bg-gradient-to-r from-[#2F7C57] to-[#A84885] lg:py-5 py-3 px-[60px] text-white lg:rounded-full rounded-[30px] border border-white hover:bg-white hover:-translate-y-1 hover:translate-x-1 transition-transform font-bold lg:text-2xl text-base" onClick={handleNameSubmit}>Continue</button>
                    {currentComp === "code" ?
                    <button className='text-center'>Resend</button>
                    :
                    <button className='text-center'>Skip</button>
                    }

                    {/* <p className='font-medium text-[28px]'>OR</p>
                    <div className='flex gap-5'>
                        <FaFacebook className='size-10 text-blue-500' />
                        <FcGoogle className='size-10' />
                    </div> */}
                </div>
            </div>
        </AuthCard>
    )
}

export default page