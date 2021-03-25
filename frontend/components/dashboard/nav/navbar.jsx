import React from 'react';
import Dropdown from './dropdown/dropdown'
import Search from './search/search_container';

class Navbar extends React.Component {
    render() {
        return (
                <nav className="dashboard-nav">
                    <div className="nav-logo">
                        <a className="nav-hellostocks-link"href="/#/dashboard">
                            <img src={window.hellostockslogo} alt="HelloStocks" />
                        </a>
                    </div>
                    <div className="nav-search-container">
                        <Search />
                    </div>
                    <div className="nav-right-side-container">
                        <div className="nav-right-side">
                            <div className="nav-right-side-links">
                                <a className="nav-portfolio-link"href="/#/dashboard">
                                    <span>Portfolio</span>
                                </a>
                                <a className="nav-right-side-linkedin" href="https://www.linkedin.com/in/hammad-khalid-071823143/">
                                    <span>LinkedIn</span>
                                </a>
                                <a className="nav-right-side-github" href="https://github.com/HammadKhalid101">
                                    <span>Github</span>
                                </a>
                                <a className="nav-right-side-site" href="https://www.hammad-khalid.com/">
                                    <span>Personal Website</span>
                                </a>
                            </div>
                            <div className="nav-dropdown-container">
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar;;