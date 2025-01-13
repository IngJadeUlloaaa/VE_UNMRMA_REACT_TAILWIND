import React, { useState, lazy, Suspense } from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import { useGetStudent } from '../clients/api_clients';
import Cookies from 'js-cookie';

const Home = lazy(() => import("../components/Home"));
const Profile = lazy(() => import("../components/Profile"));

function VirtualEnvironment() {
  const [activeView, setActiveView] = useState('home');

  const { data: student } = useGetStudent(Cookies.get('studentCode'));

  return (
    <>
      <div className='flex'>
        <div className='max-w-[250px] relative'>
          <Navbar activeView={activeView} setActiveView={setActiveView} />
        </div>
        <div className='flex-1'>
          {activeView === 'home' ?
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense> : null}
          {activeView === 'profile' ?
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense> : null}
        </div>
      </div>
    </>
  );
}

export default VirtualEnvironment;