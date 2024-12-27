import React from 'react'

function PrincipalHeader({ title, img }) {
    return (
        <>
            <div className="w-2/4 h-auto flex items-center justify-center p-4">
                <h1 className="font-sans font-light text-3xl dark:text-app-whiteColor">
                    {title}
                </h1>
            </div>
            <div className="w-2/4 h-auto flex items-center justify-center p-4">
                <img src={img} alt="unmrma-origin" />
            </div>
        </>
    )
}

export default PrincipalHeader