import React from 'react'

function InputUpdate({ name, bool }) {
    return (
        <>
            <div className='w-9/12 h-auto flex gap-4'>
                <input className='w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none' type="text" placeholder={name} readOnly={bool} />
            </div>
        </>
    )
}

export default InputUpdate