import React from 'react'
import './Layout.css';
import { Outlet,Link} from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <h2 className='Head'>Kongu college</h2>
        <nav>
            <ul class="bar">
                <li><Link className='nav-Link' to="/">Home</Link></li>
                <li><Link className='nav-Link' to="/about">About</Link></li>
                <li><Link className='nav-Link' to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
