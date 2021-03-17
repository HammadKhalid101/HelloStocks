import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div className="landing-page-main-div">
                    <header>
                        <img src={window.hellostockslogo} alt="HelloStocksLogo"/>
                        <div className="navbar-links">
                        </div>
                        This is the landing page
                        <GreetingContainer />
                    </header>
                </div>
            </div>
        )
    }
}