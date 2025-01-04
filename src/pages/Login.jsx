// src/pages/Login.jsx
import React from 'react'
import 'animate.css'
import '../index.css'
import { FaUser, FaLock } from 'react-icons/fa';
import LayerUp from '../assets/images/layer_up.webp'
import LayerDown from '../assets/images/layer_down.webp'
import Toggle from '../components/Toggle';
import { useNavigate } from 'react-router-dom'; // here

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
        <section className='w-full h-svh flex'>
            <Toggle top='top-0' bottom='left-0'/>
            <img className='absolute bg-no-repeat bg-contain bottom-0 left-0' src={ LayerDown } alt="layer down" />
            <img className='absolute bg-no-repeat bg-contain top-0 right-0' src={ LayerUp } alt="layer up" />
            <article className='w-6/12 flex items-center justify-center'>
                <form className='w-3/5 h-96 animate__animated animate__fadeIn' action="">
                    <div className='w-full h-full'>
                        <p className='text-center'>
                            <span className='font-sans text-4xl font-semibold text-app-greenColor'>Sistema de Matricula</span><br />
                            <span className='font-sans text-4xl font-semibold text-app-blueColor mr-2'>Unificada</span>
                            <span className='font-sans text-4xl font-semibold text-app-yellowColor'>UNMRMA</span><br />
                            <span className='font-sans text-base text-app-grayColor'>Iniciar Sesión</span>
                        </p>
                        <div className='w-full h-auto flex flex-col items-center justify-center gap-3 my-6'>
                            {/* input cedula and icon */}
                            <div className="w-3/4 flex items-center border-app-yellowColor border-4 p-3 rounded-xl">
                                <FaUser className="text-app-greenColor mr-3" />
                                <input
                                    className="w-full bg-transparent focus:outline-none font-sans text-sm text-app-grayColor dark:text-app-whiteColor"
                                    id='userCedula'
                                    type="text"
                                    placeholder="Cedula"
                                    required
                                />
                            </div>
                            {/* input password and icon */}
                            <div className="w-3/4 flex items-center border-app-yellowColor border-4 p-3 rounded-xl">
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

            <article className='w-6/12 flex items-center justify-center'>
                <div className="w-[624px] h-[520px] bg-cover bg-center animate-slider"></div>
            </article>
        </section>
    )
}

export default Login