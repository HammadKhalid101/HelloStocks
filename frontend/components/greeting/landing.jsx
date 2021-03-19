import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page-main-div">
                <div className="landing-page-top-div">
                    <nav className="landing-page-main-nav">
                        <div className="main-nav-links">
                            <a className="main-nav-hellostocks-link"href="/"><img src={window.hellostockslogo} alt="HelloStocks" /></a>
                            <div className="main-nav-mid">
                                <ul className="main-nav-ul">
                                    <li>
                                        <button className="main-nav-buttons">
                                            <span>Products</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="main-nav-buttons">
                                            <span>Learn</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="main-nav-buttons">
                                            <span>Support</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="main-nav-buttons">
                                            <span>Who we are</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="greeting-container-div">
                                <GreetingContainer />
                            </div>
                        </div>
                    </nav>
                    <div className="first-section">
                        <header className="landing-page-header">
                            <div className="landing-page-header-div">
                                <div className="landing-page-header-left-div">
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
                                    <div className="landing-page-header-signup-link-div">
                                        <Link className="landing-page-header-signup-link" to="/signup">
                                            <span>Sign Up</span>
                                        </Link>
                                    </div>
                                    <div className="commissions-modal-container">
                                        <button className="commissions-modal-button">
                                            <span className="commissions-modal-span">
                                                Commissions & Free Stock Disclosures
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="landing-page-header-right-div">
                                    <div className="landing-page-header-vid-div">
                                        <img src={window.landing_page_header} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        )
    }
}