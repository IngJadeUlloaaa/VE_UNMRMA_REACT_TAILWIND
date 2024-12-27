import React from 'react'

function InputUpdate({ description, userInformation }) {
    return (
        <>
            <div className='w-3/5 h-auto my-2'>
                <p className='w-full h-auto'>
                    <span className='text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold'>{description}</span>
                </p>
                <input className='w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none' type="text" placeholder={userInformation} />
            </div>
        </>
    )
}

export default InputUpdate