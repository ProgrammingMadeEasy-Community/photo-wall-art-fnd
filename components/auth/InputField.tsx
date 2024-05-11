import React from 'react'


function InputField({ label }: any) {
    return (
        <div>
            <label htmlFor={label} className='font-medium text-2xl'>{label}</label>
            <input type="text" className='border border-[#7E7C7C] w-full h-[60px] px-2 text-3xl rounded-md' />
        </div>
    )
}

export default InputField