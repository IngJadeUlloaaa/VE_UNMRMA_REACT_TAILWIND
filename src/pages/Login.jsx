// src/pages/Login.jsx
import React from 'react'
import 'animate.css'
import '../index.css'
import { FaUser, FaLock } from 'react-icons/fa';
import Toggle from '../components/Toggle';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const loginToHome = () => {
        let cedula = document.getElementById('userCedula').value;
        let password = document.getElementById('userPasswd').value;

        if (cedula === 'jade' && password === '123') {
            navigate('/virtual_environment');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <section className='w-full h-auto flex flex-col-reverse gap-8 py-20 sm:flex-row sm:gap-0 sm:py-0'>
            <Toggle top='top-0' bottom='left-0' />
            <article className='w-full h-auto flex items-center justify-center sm:w-2/4 sm:h-screen'>
                <form className='w-3/4 h-96 animate__animated animate__fadeIn sm:w-2/4' action="">
                    <div className='w-full h-full'>
                        <p className='text-center'>
                            <span className='font-sans text-2xl font-semibold text-app-greenColor sm:text-4xl'>Sistema de Matricula</span><br />
                            <span className='font-sans text-2xl font-semibold text-app-blueColor mr-2 sm:text-4xl'>Unificada</span>
                            <span className='font-sans text-2xl font-semibold text-app-yellowColor sm:text-4xl'>UNMRMA</span><br />
                            <span className='font-sans text-base text-app-grayColor sm:text-base'>Iniciar Sesión</span>
                        </p>
                        <div className='w-full h-auto flex flex-col items-center justify-center gap-3 my-6'>
                            <div className="w-full flex items-center border-app-yellowColor border-4 p-3 rounded-xl">
                                <FaUser className="text-app-greenColor mr-3" />
                                <input
                                    className="w-full bg-transparent focus:outline-none font-sans text-sm text-app-grayColor dark:text-app-whiteColor"
                                    id='userCedula'
                                    type="text"
                                    placeholder="Cedula"
                                    required
                                />
                            </div>
                            <div className="w-full flex items-center border-app-yellowColor border-4 p-3 rounded-xl">
                                <FaLock className="text-app-greenColor mr-3" />
                                <input
                                    className="w-full bg-transparent focus:outline-none font-sans text-sm text-app-grayColor dark:text-app-whiteColor"
                                    id='userPasswd'
                                    type="password"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='w-28 font-sans text-sm font-semibold text-app-grayColor border-app-yellowColor border-4 p-2 rounded-xl'
                                onClick={loginToHome}
                            >Entrar</button>
                        </div>
                    </div>
                </form>
            </article>

            <article className='w-full h-auto flex items-center justify-center sm:w-2/4 sm:h-screen'>
                <div className="w-[340px] h-[280px] bg-cover bg-center animate-slider sm:w-[624px] sm:h-[520px]"></div>
            </article>
        </section>
    )
}

export default Login