import React from 'react'
import NoFound from '../assets/images/404.webp';

function NoPage() {
    return (
        <>
            <section className='w-full h-screen bg-slate-800 flex flex-col items-center justify-center sm:flex-row'>
                <div className='w-full h-auto flex items-center justify-center animate__animated animate__fadeInLeft sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4'>
                    <div className='flex flex-col gap-1'>
                        <p className='flex gap-1'>
                            <span className='text-2xl font-rubik text-app-grayColor font-thin md:xl:text-3x lg:text-4xl xl:text-5xl 2xl:text-6xl'>WHERE</span>
                            <span className='text-2xl font-rubik text-app-whiteColor font-thin md:xl:text-3x lg:text-4xl xl:text-5xl 2xl:text-6xl'>YOU GOING</span>
                            <span className='text-2xl font-rubik text-app-grayColor font-thin md:xl:text-3x lg:text-4xl xl:text-5xl 2xl:text-6xl'>KID?</span>
                        </p>
                        <p className='flex gap-1'>
                            <span className='text-xl font-rubik text-app-whiteColor font-thin'>I'll see you</span>
                            <span className='text-xl font-rubik text-app-grayColor font-thin'>at night 🔪</span>
                        </p>
                    </div>
                </div>
                <div className='w-full h-auto flex items-center justify-center animate__animated animate__bounceIn sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4'>
                    <img src={NoFound} alt="404-img" />
                </div>
            </section>
        </>
    )
}

export default NoPage