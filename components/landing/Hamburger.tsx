"use client"

import React from 'react'
import Link from 'next/link'

const navLinks = [
    { id: 1, name: 'Create New Frame', active: true },
    { id: 2, name: 'Gallery', active: false },
    { id: 3, name: 'Order History', active: false },
    { id: 4, name: 'Contact Us', active: false },
]

function Hamburger({ }) {

    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(set => !set)
    }
    return (
        <>
            <button className={`flex flex-col justify-between items-baseline p-0 cursor-pointer w-[30px] h-6 transition-all ease-in-out after:transition-all after:ease-in-out z-40 relative ${open ? 'lg:translate-x-44' : 'translate-x-0'}`} onClick={handleClickOpen}>
                <span className={`h-1 bg-black rounded-l-md ${open ? 'w-[80%] rotate-45 translate-y-2 bg-red-600 h-0.5' : 'w-full'} transition-all ease-in-out`}></span>
                <span className={`h-1 bg-black rounded-l-md ${open ? 'w-0 h-0 ' : 'block w-full'} transition-all ease-in-out`}></span>
                <span className={`h-1 bg-black rounded-l-md ${open ? 'hidden' : 'block w-full'} transition-all ease-in-out`}></span>
                <span className={`h-1 bg-black rounded-l-md ${open ? 'w-[80%] -rotate-45 bg-red-600 -translate-y-2 h-0.5 ' : 'w-full'} transition-all ease-in-out`}></span>

            </button>

            <div className={`bg-black absolute top-0 left-0 z-20 h-full w-full opacity-50 ${open ? 'block' : 'hidden'}`}></div>

            <div className={`bg-white absolute h-full top-0 left-0 w-full lg:w-[300px] z-30 lg:rounded-r-[30px] transition-transform overflow-hidden ${open ? 'translate-x-0' : 'lg:-translate-x-[300px] -translate-x-full'}`}>

                <div className='flex flex-col h-full justify-between items-center'>
                    <div className='h-1/4'></div>
                    <div className='flex flex-col h-2/4 w-full ml-[40px]'>
                        <ul className='space-y-8'>
                            {navLinks.map(n => (
                                <li key={n.id} className={`rounded-l-full cursor-pointer py-[22px] pl-[30px] ${n.active ? 'bg-[#7E7C7C] text-white ' : 'bg-transparent hover:bg-[#7e7c7ca1] hover:text-white'}`}>
                                    <p className='text-2xl'>{n.name}</p>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className='h-1/4 w-full pt-20'>
                        <div className='w-full h-1 bg-[#D9D9D9]'></div>

                        <div className="w-full flex items-center justify-center mt-[60px]">
                            <Link href={'/auth/login'} >
                                <button className="z-10 px-[55px] py-5 bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black   hover:-translate-y-1 hover:translate-x-1 transition-transform text-xl ">Register / Login</button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Hamburger