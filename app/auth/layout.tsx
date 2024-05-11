import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='h-screen bg-gradient-to-b from-[#E6E8E9] to-[#1A1919] flex justify-center items-center overflow-hidden'>
            {children}
        </main>
    )
}

export default layout
