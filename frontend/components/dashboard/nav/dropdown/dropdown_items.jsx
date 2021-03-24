import React from 'react';

class DropdownItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentUser.id,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            buying_power: this.props.currentUser.buying_power,
        }
        this.portfolioValue = this.portfolioValue.bind(this)
    }

    componentDidMount() {
        this.portfolioValue()
    }

    portfolioValue() {
        let value = this.state.buying_power;
        const stocks = this.props.stocks
        
        Object.values(this.props.assets).map((asset, idx) => {
            
            value += asset.quantity * stocks[asset.stock_id].last_price
        })
        
        return value;
    }

    render() {
        
        const { first_name, last_name, buying_power } = this.state
        return (
                <div className="nav-dropdown-items">
                    <div className="nav-dropdown-userinfo">
                        <div className="nav-dropdown-fullname">
                            <span>{first_name} {last_name}</span>
                        </div>
                        <div className="nav-dropdown-portfolio-value-div">
                            <p className="nav-dropdown-buying-power-text">
                                Portfolio Value
                            </p>
                            <p className="nav-dropdown-portfolio-value">
                                ${this.portfolioValue()}
                            </p>
                        </div>
                        <div className="nav-dropdown-buying-power-div">
                            <p className="nav-dropdown-buying-power-text">
                                Buying Power
                            </p>
                            <p className="nav-dropdown-buying-power">
                                ${buying_power}
                            </p>
                        </div>
                    </div>
                    <div className="nav-dropdown-aboutme-section">
                        <div className="personal-links">
                            <div className="linkedin-link">
                                <a href="https://www.linkedin.com/in/hammad-khalid-071823143/">
                                    <span>My LinkedIn</span>
                                </a>
                            </div>
                            <div className="github-link">
                                <a href="https://github.com/HammadKhalid101">
                                    <span>My Github</span>
                                </a>
                            </div>
                            <div className="personal-site-link">
                                <a href="https://www.hammad-khalid.com/">
                                    <span>My Personal Website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="nav-dropdown-logout">
                        <button className='logout-button' onClick={this.props.logout}>
                            <span className="logout-button-span">
                                Log Out
                            </span>
                        </button>
                    </div>
                </div>
        )
    }
}

export default DropdownItems;