import React, { useState } from 'react';
import UNMShield from '../assets/images/unm_shield.webp';
import { FaHome, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Toggle from '../components/Toggle';

function Navbar({ activeView, setActiveView }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón para abrir/cerrar el menú (visible solo en pantallas pequeñas) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="text-white bg-app-blueColor p-2 rounded-full focus:outline-none shadow-lg"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <nav className={`w-[14%] h-screen sm:w-[50%] md:w-[14%] bg-app-blueColor flex flex-col z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
        <div className='w-full'>
          <img className='w-full bg-no-repeat bg-cover' src={UNMShield} alt="unm-shield" />
        </div>
        <div className='w-full flex flex-col items-center justify-center my-4'>
          <p className='w-[90%] flex flex-col'>
            <span className='font-sans text-sm font-semibold text-app-whiteColor ms-3'>Menu</span>
            <span className='w-full border bg-app-grayColor'></span>
          </p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <ul className='w-[90%] flex flex-col items-start gap-2'>
            <li
              className={`w-full flex items-center p-3 rounded-xl ${activeView === 'home' ? 'bg-app-yellowColor text-app-blueColor' : 'text-app-whiteColor'
                } hover:bg-app-yellowColor hover:shadow-sm hover:shadow-yellow-500/50`}
              onClick={() => setActiveView('home')}
            >
              <FaHome className='font-sans text-lg font-semibold mx-1.5' />
              Home
            </li>
            <li
              className={`w-full flex items-center p-3 rounded-xl ${activeView === 'profile' ? 'bg-app-yellowColor text-app-blueColor' : 'text-app-whiteColor'
                } hover:bg-app-yellowColor hover:shadow-sm hover:shadow-yellow-500/50`}
              onClick={() => setActiveView('profile')}
            >
              <FaUser className='font-sans text-sm font-semibold mx-2' />
              Perfil
            </li>
          </ul>
          <Toggle bottom='bottom-0' left='left-0' />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
