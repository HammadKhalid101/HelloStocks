import React from 'react';
import Dropdown from './dropdown/dropdown'
import Search from './search/search_container';

class Navbar extends React.Component {
    render() {
        return (
            <div className="dashboard-nav-container">
                <nav className="dashboard-nav">
                    <div className="nav-logo">
                        <a className="nav-hellostocks-link"href="/#/dashboard">
                            <img src={window.hellostockslogo} alt="HelloStocks" />
                        </a>
                    </div>
                    <div className="nav-search-container">
                        <Search />
                    </div>
                    <div className="nav-dropdown-container">
                        <Dropdown />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;;