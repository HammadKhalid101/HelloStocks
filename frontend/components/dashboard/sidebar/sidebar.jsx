import React from 'react';
import Portfolio from './portfolio/portfolio';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="sidebar-portfolio-container">
                <div className="sidebar-header-container">
                    <header className="sidebar-header">
                        <div className="sidebar-header-text">
                            <a className="sidebar-header-stocks-a-tag" href="/#/dashboard">
                                <span className="sidebar-header-span">Stocks</span>
                            </a>
                        </div>
                        <div className="sidebar-header-button-container">
                            <button className="sidebar-header-button">
                                <span className="sidebar-header-button-span">
                                    ...
                                </span>
                            </button>
                        </div>
                    </header>
                </div>
                <Portfolio />
                <div className="sidebar-watchlists-container">
                    <div className="sidebar-create-watchlist-div">
                        <span className="sidebar-create-watchlist-text-span">Lists</span>
                        <button className="sidebar-create-watchlist-button">
                            <span className="sidebar-create-watchlist-button-span">+</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;