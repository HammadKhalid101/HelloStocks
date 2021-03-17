import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page-main-div">
                <div className="landing-page-top-div">
                    <nav className="landing-page-main-nav">
                        <a className="main-nav-hellostocks-link"href="/"><img src={window.hellostockslogo} alt="HelloStocks" /></a>
                        <div className="main-nav-links">
                            <button className="main-nav-buttons">
                                <span>Products</span>
                            </button>
                            <button className="main-nav-buttons">
                                <span>Learn</span>
                            </button>
                            <button className="main-nav-buttons">
                                <span>Support</span>
                            </button>
                            <button className="main-nav-buttons">
                                <span>Who we are</span>
                            </button>
                        </div>
                        <GreetingContainer />
                    </nav>
                    <div className="first-section">
                        <header className="landing-page-header">
                            <h1>
                                <span>Investing for Everyone</span>
                            </h1>
                            <p>
                                <span>
                                    Commission-free investing, plus the tools you need to put your money
                                    in motion. Sign up and get your first stock for free. Certain
                                    limitations apply.
                                </span>
                            </p>
                            <Link to="/signup">
                                <span>Sign up</span>
                            </Link>
                            <button className="commissions-button">
                                <span>(add ! Logo) Commissions & Free Stock Disclosures</span>
                            </button>
                        </header>
                    </div>
                </div>
            </div>
        )
    }
}