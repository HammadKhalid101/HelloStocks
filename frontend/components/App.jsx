import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/signup_form_container'


const App = () => {
    return (
        <div>
            <header>
                <Link to='/' className="header-link">
                </Link>
                <h1>Welcome to HelloStocks, This header is from App.jsx</h1>
                Add Home container here.
            </header>

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />

        </div>
    )
}

export default App;