import React from 'react'

function AuthCard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='w-[1200px] h-[700px] bg-white rounded-[20px] overflow-hidden flex justify-between'>

            <div className='w-1/2 bg-auth bg-cover h-full relative'>
                <div className="h-full w-full bg-black absolute top-0 opacity-50"></div>
                <p className='pt-6 pl-8 text-white font-bold text-2xl z-50 relative'>Photo Wall</p>
            </div>


            <div className='w-1/2 h-full'>
                {children}
            </div>

        </div>
    )
}

export default AuthCard