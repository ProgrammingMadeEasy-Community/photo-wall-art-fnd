import React from 'react'


function InputField({ label, placeHolder, className, value, onChange }: any) {
    return (
        <div className={className}>
            <label htmlFor={label} className='font-medium lg:text-2xl text-lg'>{label}</label>
            <input type="text" className='border border-[#7E7C7C] w-full py-4 px-5 text-xl rounded-[30px]' placeholder={placeHolder} value={value} onChange={onChange}/>
        </div>
    )
}

export default InputField