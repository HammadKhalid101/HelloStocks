import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
    const links = () => (
        <div className="login-signup-links">
            <Link className="main-nav-login-link" to="/login">Log In</Link>
            <Link className="main-nav-signup-link" to="/signup">Sign Up</Link>
        </div>
    )

    return links();
}

export default Greeting;