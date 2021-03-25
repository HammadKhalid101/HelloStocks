import React from 'react';

class MainGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="dashboard-main-graph-section">
                <header className="dashboard-main-graph-header">
                    <div className="main-graph-portfolio-value-div">
                        <h1 className="main-graph-portfolio-value-heading">
                            <span className="main-graph-portfolio-value-span">
                                $230,978.22
                            </span>
                        </h1>
                    </div>
                    <div className="main-graph-portfolio-value-change-div">
                        <span className="main-graph-portfolio-value-change-span">
                            <span className="main-graph-portfolio-value-change-amount">
                                +$4,245
                            </span>
                            <span className="main-graph-portfolio-value-change-percent">
                                (+1.87%)
                            </span>
                        </span>
                        <span className="main-graph-portfolio-value-today-span">
                            Today
                        </span>
                    </div>
                </header>
                <div className="dashboard-main-graph-container">
                    <img className="stonks-img" src={window.stonks} />
                </div>
                <nav className="dashboard-main-graph-nav">
                    <div className="main-graph-nav-buttons-div">
                        <button className="main-graph-nav-live-button">
                            <span className="main-graph-nav-button-span">
                                LIVE
                            </span>
                        </button>
                        <button className="main-graph-nav-button">
                            <span className="main-graph-nav-button-span">
                                1D
                            </span>
                        </button>
                        <button className="main-graph-nav-button">
                            <span className="main-graph-nav-button-span">
                                1W
                            </span>
                        </button>
                        <button className="main-graph-nav-button">
                            <span className="main-graph-nav-button-span">
                                1M
                            </span>
                        </button>
                        <button className="main-graph-nav-button">
                            <span className="main-graph-nav-button-span">
                                3M
                            </span>
                        </button>
                        <button className="main-graph-nav-button">
                            <span className="main-graph-nav-button-span">
                                1Y
                            </span>
                        </button>
                        <button className="main-graph-nav-button">
                            <span className="main-graph-nav-button-span">
                                ALL
                            </span>
                        </button>
                    </div>    
                </nav>
            </section>
        )
    }
}

export default MainGraph;