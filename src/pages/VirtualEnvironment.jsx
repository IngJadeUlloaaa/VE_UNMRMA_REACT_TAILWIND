import React, { useState } from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Home from '../components/Home';

function VirtualEnvironment() {
  const [activeView, setActiveView] = useState('home');

  return (
    <>
      <main className='flex'>
        <Navbar activeView={activeView} setActiveView={setActiveView} />
        {activeView === 'home' && <Home />}
        {activeView === 'profile' && <Profile />}
      </main>
    </>
  );
}

export default VirtualEnvironment;
