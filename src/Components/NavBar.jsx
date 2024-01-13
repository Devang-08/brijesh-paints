import React from 'react'
import './NavBar.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <nav id='navs' className='bg-info'>
            <div class="logo">
                <img src={logo} height="30px" width="200px" alt="Logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="paint" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Paints & Products
                    </Link>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="a">Oil Base Products</Link></li>
                        <li><Link class="dropdown-item" to="b">Water Base Products</Link></li>
                        <li><Link class="dropdown-item" to="c">Powder Base Products</Link></li>
                        <li><Link class="dropdown-item" to="d">Accessories</Link></li>
                    </ul>
                </li>
                <li><Link to="services">Services</Link></li>
            </ul>
            <div class="search-box">
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </div>
        </nav>
    )
}

export default NavBar