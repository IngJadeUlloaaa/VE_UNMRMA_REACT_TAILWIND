import React from 'react'
import NoFound from '../assets/images/404.webp';
import { Link } from 'react-router-dom';

function NoPage() {
    return (
        <>
            <section className='w-full h-screen bg-slate-800 flex flex-col items-center justify-center sm:flex-row'>
                <div className='w-full h-auto flex items-center justify-center animate__animated animate__fadeInLeft sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4'>
                    <h1 className='text-white font-medium text-2xl md:text-3xl'>
                        La página no existe - 404
                    </h1>
                    <Link to="/login" className='text-white ml-4'>
                       volver al menú principal
                    </Link>
                    {/* <div className='flex flex-col gap-1'>
                        <p className='flex gap-1'>
                            <span className='text-base font-rubik text-app-grayColor font-thin sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>OOPS!</span>
                            <span className='text-base font-rubik text-app-whiteColor font-thin sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>PAGE NOT FOUND</span>
                            <span className='text-base font-rubik text-app-grayColor font-thin sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>ON SERVER</span>
                        </p>
                        <p className='flex gap-1'>
                            <span className='text-lg font-rubik text-app-whiteColor font-thin sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-2xl'>Back on</span>
                            <span className='text-lg font-rubik text-app-grayColor font-thin sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-2xl'>the road🔪</span>
                        </p>
                    </div> */}
                </div>
                {/* <div className='w-full h-auto flex items-center justify-center animate__animated animate__fadeIn sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4'> */}
                    {/* <img src={NoFound} alt="404-img" /> */}
                {/* </div> */}
            </section>
        </>
    )
}

export default NoPage