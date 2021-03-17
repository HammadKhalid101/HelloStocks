import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page-main-div">
                <div className="landing-page-top-div">
                    <div className="landing-page-header-div">
                        <header className="landing-page-header">
                            <nav className="main-nav">
                                <button className="main-nav-hellostocks-button">
                                    <img src={window.hellostockslogo} alt="HelloStocksLogo"/>
                                </button>
                                <button className="main-nav-buttons"><span>Products</span></button>
                                <button className="main-nav-buttons"><span>Learn</span></button>
                                <button className="main-nav-buttons"><span>Support</span></button>
                                <button className="main-nav-buttons"><span>Who we are</span></button>
                                <GreetingContainer className="main-nav-buttons"/>
                            </nav>
                        </header>
                    </div>
                    <section className="first-section">
                        <h1>
                            <span>Investing for Everyone</span>
                        </h1>
                        <p>
                            <span>
                                Commission-free investing, plus the tools you need to put your money in motion. 
                                Sign up and get your first stock for free. 
                                Certain limitations apply.
                            </span>
                        </p>
                        <Link to="/signup"><span>Sign up</span></Link>
                        <button className="commissions-button"><span>(add ! Logo) Commissions & Free Stock Disclosures</span></button>
                    </section>
                    <br/>
                    <section className="fee-schedule-section">
                        <div className="fee-schedule-div">
                            <p>
                            See our <button className="fee-schedule-button"><span>fee schedule</span></button> fee schedule to learn more about cost.
                            </p>
                        </div>
                    </section>
                    <section className="campain-section">
                        <h1>
                        <span>We are all investors.</span>
                        </h1>
                        <button className="campain-button">
                        <span>See the campain (add -> Logo)</span>
                        </button>
                    </section>
                    <section>
                        <h3><span>Introducing Fractional Shares</span></h3>
                        <p><span>Invest in thousands of stocks with as little as $1.</span></p>
                        <div>
                            <h5>
                                Invest Any Amount
                            </h5>
                            <p>
                                <span>
                                    Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.
                                </span>
                            </p>
                        </div>
                        <div>
                            <h5>
                                Build a Balanced Portfolio
                            </h5>
                            <p>
                                <span>
                                    Customize your portfolio with pieces of different companies and funds to help reduce risk.
                                </span>
                            </p>
                        </div>
                        <div>
                            <h5>
                                Trade in Real Time
                            </h5>
                            <p>
                                <span>
                                    Trades placed during market hours are executed at that time, so you’ll always know the share price.
                                </span>
                            </p>
                        </div>
                        <button className="campain-button">
                        <span>(add -> Logo) Fractional Shares Disclosure</span>
                        </button>
                    </section>
                    <section className="lmc-section">
                        <div>
                            <div>
                                <p><span>add image here then take out p and span tags<img src="" alt=""/></span></p>
                            </div>
                            <div>
                                <nav>
                                    <button>
                                        <div>
                                            <p><span><img src="" alt=""/>add ^ arrow icon here then remove p and span tag</span></p>
                                        </div>
                                    </button>
                                    <ul>
                                        <li>
                                            <button>
                                                <span>Learn</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <span>Manage</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <span>Customize</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <button>
                                        <div>
                                            <p><span><img src="" alt=""/>add down arrow icon here then remove p and span tag</span></p>
                                        </div>
                                    </button>
                                </nav>
                            </div>
                        </div>
                        <div>
                            <h1>
                                Learn As You Grow
                            </h1>
                            <p>
                                <span>
                                    Our goal is to make investing in financial markets more affordable, more intuitive, 
                                    and more fun, no matter how much experience you have (or don’t have).
                                </span>
                            </p>
                        </div>
                    </section>
                    <section>
                        <h3>Our Products</h3>
                        <button><span>Cash Management</span></button>
                        <button><span>Stocks & Funds</span></button>
                        <button><span>Options</span></button>
                        <button><span>Gold</span></button>
                        <button><span>Crypto</span></button>
                        <p><span>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</span></p>
                        <button><span>Learn More</span></button>
                        <button className="campain-button">
                        <span>(add -> Logo) Variable APY and Debit Card Disclosures</span>
                        </button>
                        <p><span>Cash Management offered through HelloStocks Financial</span></p>
                    </section>
                </div>
                <div className="landing-page-footer-div">
                    <footer className="landing-page-footer">
                        <div className="landing-page-footer-top">
                            <ul>
                                <li>
                                    <button><span>Stocks & Funds</span></button>
                                </li>
                                <li>
                                    <button><span>Options</span></button>
                                </li>
                                <li>
                                    <button><span>Gold</span></button>
                                </li>
                                <li>
                                    <button><span>Cash Management</span></button>
                                </li>
                                <li>
                                    <button><span>Crypto</span></button>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <button><span>Learn</span></button>
                                </li>
                                <li>
                                    <button><span>Support</span></button>
                                </li>
                                <li>
                                    <button><span>Snacks</span></button>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <button><span>About us</span></button>
                                </li>
                                <li>
                                    <button><span>Careers</span></button>
                                </li>
                                <li>
                                    <button><span>Blog</span></button>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/"><span>Add LinkedIn icon</span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/"><span>Add Facebook icon</span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/"><span>Add Instagram icon</span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/"><span>Add Twitter icon</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <section>
                                <span>add HELLOSTCOKS SNACKS LOGO HERE</span>
                                <div>
                                    <span>
                                        The 3-minute newsletter with fresh takes on the financial news you need to start your day.
                                    </span>
                                </div>
                                <form className="snacks-from">
                                    <div>
                                        <input type="text" placeholder="name@email.com"/>
                                    </div>
                                    <button><span>Subscribe</span></button>
                                </form>
                            </section>
                        </div>
                        <div className="landing-page-footer-bottom">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/"><span>Check the background of the firm on FINRA’s BrokerCheck</span></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/"><span>Brokerage Customer Relationship Summary</span></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/"><span>HelloStocks Terms & Conditions</span></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/"><span>Disclosure Library</span></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/"><span>Privacy</span></a>
                            </li>
                        </ul>
                        <br/>
                        <hr/>
                        <span>
                            © 2021 HelloStocks. All rights reserved.
                        </span>
                        <section className="landing-page-footer-section">
                            <p>
                                <span>
                                    HelloStocks means HelloStocks Markets and its in-application and web experiences with its family of 
                                    wholly owned subsidiaries which includes HelloStocks Financial, HelloStocks Securities, and HelloStocks Crypto.
                                </span>
                            </p>
                            <p>
                                <span>
                                    All investments involve risks, including the possible loss of capital.
                                </span>
                            </p>
                            <p>
                                <span>
                                    Securities trading is offered to self-directed customers by HelloStocks Financial. 
                                    HelloStocks Financial is a member of the 
                                    <a href="https://www.finra.org/#/">
                                        <span>
                                            Financial Industry Regulatory Authority (FINRA)    
                                        </span>
                                    </a>.
                                </span>
                            </p>
                            <button className="disclosures-button">
                                <span>(add -> Logo) View Important Disclosures</span>
                            </button>
                        </section>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}