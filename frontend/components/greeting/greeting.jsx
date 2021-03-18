import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const links = () => (
        <div className="login-signup-links">
            <Link className="main-nav-login-link" to="/login">Log In</Link>
            <Link className="main-nav-signup-link" to="/signup">Sign Up</Link>
        </div>
    )
    const greeting = () => (
        <nav className='greeting-logout'>
            <button className='logout-button' onClick={logout}>Log Out</button>
        </nav>
    )

    return currentUser? greeting() : links();
}

export default Greeting;