import React from 'react'
import './ReactPages/Service.css';
import { Outlet,Link} from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <h2 className='Head'>Kongu Engineering College</h2>
        <nav>
            <ul class="bar">
                <li><Link className='nav-Link' to="/">Home</Link></li>
                <li><Link className='nav-Link' to="/about">About</Link></li>
                <li><Link className='nav-Link' to="/contact">Contact</Link></li>
            </ul>
        </nav><div className='Pic'>
            <img className='Pic1' src='kongu-engineering-college-erode-255321.jpg'></img></div>
        <Outlet/>
    </div>
  )
}
