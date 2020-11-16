import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../photos/logos/Logo.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <Link to="/" class="navbar-brand">
                    <img src={logo} style={{width: '100px'}} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Concerns</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Event</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Contact</Link>
                        </li>
                    </ul>
                    
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;