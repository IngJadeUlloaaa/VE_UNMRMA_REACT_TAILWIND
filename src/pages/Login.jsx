// src/pages/Login.jsx
import React, { useState } from 'react';
import 'animate.css';
import '../index.css';
import { FaUser, FaLock } from 'react-icons/fa';
import Toggle from '../components/Toggle';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
    const [clicks, setClicks] = useState(0);
    const manejarClick = () => {
        setClicks(prevClicks => {
            const nuevosClicks = prevClicks + 1;
            if (nuevosClicks === 10) {
                alert('This FrontEnt was created by Engineer Carlos Ulloa!\nLet me create your website Contact me! ulloacarlos3112@gmail.com');
            }
            return nuevosClicks;
        });
    }

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const studentCode = document.getElementById('student_code').value;

        try {
            const response = await fetch('https://192.168.23.248:4500/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ student_code: studentCode }),
            });

            if (!response.ok) throw new Error('Invalid Credentials');
            const data = await response.json();

            // Guardar el token en una cookie
            Cookies.set('authToken', data.token, { secure: true, sameSite: 'strict' });

            // Redirigir a virtual_environment con replace
            navigate('/virtual_environment', { replace: true });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <section className='w-full h-auto flex flex-col-reverse gap-8 py-20 overflow-auto scroll-smooth scrollbar-native sm:flex-row sm:gap-0 sm:py-0'>
            <Toggle top='top-0' bottom='left-0' />
            <article className='w-full h-auto flex items-center justify-center sm:w-2/4 sm:h-screen'>
                <form className='w-3/4 h-96 animate__animated animate__fadeIn md:w-3/4 lg:w-3/5 xl:w-3/5 2xl:w-3/5' onSubmit={handleLogin}>
                    <div className='w-full h-full'>
                        <p className='text-center'>
                            <span className='font-sans text-2xl font-semibold text-app-greenColor md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Sistema de Matricula</span><br />
                            <span className='font-sans text-2xl font-semibold text-app-blueColor mr-2 md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Unificada</span>
                            <span className='font-sans text-2xl font-semibold text-app-yellowColor md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>UNMRMA</span><br />
                            <span className='font-sans text-base text-app-grayColor sm:text-base'>Iniciar Sesión</span>
                        </p>
                        <div className='w-full h-auto flex flex-col items-center justify-center gap-3 my-6'>
                            <div className="w-full flex items-center border-app-yellowColor border-4 p-3 rounded-xl">
                                <FaUser className="text-app-greenColor mr-3" />
                                <input
                                    className="w-full bg-transparent focus:outline-none font-sans text-sm text-app-grayColor dark:text-app-whiteColor"
                                    id='student_code'
                                    type="text"
                                    placeholder="Código Mined"
                                    required
                                />
                            </div>
                            <div className="w-full flex items-center border-app-yellowColor border-4 p-3 rounded-xl">
                                <FaLock className="text-app-greenColor mr-3" />
                                <input
                                    className="w-full bg-transparent focus:outline-none font-sans text-sm text-app-grayColor dark:text-app-whiteColor"
                                    id='userPasswd'
                                    type="password"
                                    placeholder="Temporarily Blocked"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='w-28 font-sans text-sm font-semibold text-app-grayColor border-app-yellowColor border-4 p-2 rounded-xl'>Entrar</button>
                        </div>
                    </div>
                </form>
            </article>

            <article className='w-full h-auto flex items-center justify-center sm:w-2/4 sm:h-screen'>
                <div className="w-[340px] h-[280px] bg-cover bg-center animate-slider md:w-[420px] md:h-[350px] lg:w-[490px] lg:h-[410px] xl:w-[624px] xl:h-[520px] 2xl:w-[624px] 2xl:h-[520px]" onClick={manejarClick}></div>
            </article>
        </section>
    )
}
export default Login