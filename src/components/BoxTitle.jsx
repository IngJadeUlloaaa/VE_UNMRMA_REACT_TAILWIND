import React from 'react'

function BoxTitle({ header }) {
  return (
    <>
      <div className='w-full h-auto p-3 rounded-b-3xl shadow-lg text-center'>
        <h1 className='font-sans font-semibold text-4xl p-3 dark:text-app-whiteColor'>{header}</h1>
      </div>
    </>
  )
}

export default BoxTitle