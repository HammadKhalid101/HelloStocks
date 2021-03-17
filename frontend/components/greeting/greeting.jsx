import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const links = () => (
        <nav className="login-link">
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign up</Link>
        </nav>
    )
    const greeting = () => (
        <nav className='greeting-logout'>
            <button className='logout-button' onClick={logout}>Logout</button>
        </nav>
    )

    return currentUser? greeting() : links();
}

export default Greeting;