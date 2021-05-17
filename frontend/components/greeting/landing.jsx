import React from "react";
import Greeting from "./greeting";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page-main-div">
        <div className="landing-page-top-div">
          <nav className="landing-page-main-nav">
            <div className="main-nav-links">
              <a className="main-nav-hellostocks-link" href="/">
                <img src={window.hellostockslogo} alt="HelloStocks" />
              </a>
              <div className="main-nav-mid">
                <ul className="main-nav-ul">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hammad-khalid-071823143/"
                      target="_blank"
                      className="main-nav-buttons"
                    >
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/HammadKhalid101/HelloStocks"
                      target="_blank"
                      className="main-nav-buttons"
                    >
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://hammad-khalid.com/"
                      target="_blank"
                      className="main-nav-buttons"
                    >
                      <span>Personal Site</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="greeting-container-div">
                <Greeting />
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
                      Commission-free investing, plus the tools you need to put
                      your money in motion. Sign up and get your first stock for
                      free. Certain limitations apply.
                    </span>
                  </p>
                  <div className="landing-page-header-signup-link-div">
                    <Link
                      className="landing-page-header-signup-link"
                      to="/signup"
                    >
                      <span>Sign Up</span>
                    </Link>
                  </div>
                  <div className="commissions-modal-container">
                    <button className="commissions-modal-button">
                      <div className="commissions-modal-button-logo-div">
                        <span className="commissions-modal-button-logo">i</span>
                      </div>
                      <div className="commissions-modal-span">
                        <span className="commissions-modal-span">
                          Commissions & Free Stock Disclosures
                        </span>
                      </div>
                      {/* <span className="commissions-modal-button-span">
                                                <span className="commissions-modal-button-logo-span">
                                                    <svg fill="none" height="28" viewBox="0 0 24 24" width="28" class="commissions-modal-button-logo">
                                                        <circle cx="12" cy="12" r="11" stroke="rgb(0, 0, 0)" stroke-width="2"></circle>
                                                        <path d="M11.232 18H13.056V9.52H11.232V18ZM11.2 8.128H13.088V6.32H11.2V8.128Z" fill="rgb(0, 0, 0)"></path>
                                                    </svg>
                                                </span>
                                                <span className="commissions-modal-button-text-span">
                                                    Commissions & Free Stock Disclosures
                                                </span>
                                            </span> */}
                    </button>
                  </div>
                </div>
                <div className="landing-page-header-right-div">
                  <div className="landing-page-header-vid-div">
                    <video
                      className="landing-page-header-vid"
                      playsInline
                      preload="auto"
                      loop
                      muted={true}
                      autoPlay={true}
                      src={window.landing_page_header_vid}
                    ></video>
                    <img
                      className="landing-page-header-img"
                      src={window.landing_page_header_img}
                    />
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="second-section">
            <div className="second-section-content">
              <h4 className="second-section-text">
                See our
                <button className="second-section-modal-button">
                  <span className="second-section-modal-button-text">
                    fee schedule
                  </span>
                </button>
                to learn more about cost.
              </h4>
            </div>
          </div>
          <div className="third-section">
            {/* <div className="third-section-content"> */}
            <div className="third-section-left">
              <div className="third-section-vid-div">
                <video
                  className="third-section-vid"
                  playsInline
                  preload="auto"
                  loop
                  muted={true}
                  autoPlay={true}
                  src={window.third_section_vid}
                ></video>
              </div>
            </div>
            <div className="third-section-right">
              <div className="third-section-right-modal-content">
                <div className="third-section-right-modal-div">
                  <h1 className="third-section-right-heading">
                    We are all investors.
                  </h1>
                </div>
                <div className="third-section-modal-button-div">
                  <button className="third-section-modal-button">
                    <span className="third-section-modal-button-span">
                      See the campain
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="landing-page-mid-div">
          <div className="landing-page-mid-content">
            <section className="landing-page-mid-section"></section>
          </div>
        </div>
        <div className="landing-page-bottom-div">
          <div className="landing-page-footer-container">
            <footer className="landing-page-footer"></footer>
          </div>
        </div>
      </div>
    );
  }
}
