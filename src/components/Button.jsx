import React from 'react'

function Button({ onclick, title}) {
  return (
    <>
        <button onClick={onclick} className='px-8 py-3 shadow-lg rounded-lg font-sans text-sm font-semibold text-app-whiteColor bg-app-blueColor hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50'>
            {title}
        </button>
    </>
  )
}

export default Button