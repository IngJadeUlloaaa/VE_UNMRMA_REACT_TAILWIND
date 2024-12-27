import React from 'react'

function Input({ data, api_data }) {
  return (
    <>
      <div className='w-3/5 h-auto my-2'>
        <p className='w-full h-auto'>
          <span className='text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold'>{data}</span>
        </p>
        <input className='w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none' type="text" placeholder={api_data} readOnly />
      </div>
    </>
  )
}

export default Input