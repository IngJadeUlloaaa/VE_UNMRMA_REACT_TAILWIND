import React from 'react'

function PrincipalHeader({ title, img }) {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center p-4 sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4">
                <h1 className="text-center font-sans font-light text-3xl dark:text-app-whiteColor">
                    {title}
                </h1>
            </div>
            <div className="hidden h-auto items-center justify-center p-4 sm:w-2/4 sm:flex md:w-2/4 md:flex lg:w-2/4 lg:flex xl:w-2/4 xl:flex 2xl:w-2/4 2xl:flex">
                <img src={img} alt="unmrma-origin" />
            </div>
        </>
    )
}

export default PrincipalHeader