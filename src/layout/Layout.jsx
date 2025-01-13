// src/layout/Layout.jsx
import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/virtual_environment">Entorno Virtual UNMRMA</Link>
          </li>
          {/* 
          <li>
            <Link to="/reingreso">Reingreso</Link>
          </li>
          */}
          <li>
            <Link to="/no_found">Page No Found</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout