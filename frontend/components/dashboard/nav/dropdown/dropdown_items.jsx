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
                        <div className="money-info">
                            <div className="nav-dropdown-portfolio-value-div">
                                <p className="nav-dropdown-portfolio-value">
                                    ${this.portfolioValue()}
                                </p>
                                <p className="nav-dropdown-buying-power-text">
                                    Portfolio Value
                                </p>
                            </div>
                            <div className="nav-dropdown-buying-power-div">
                                <p className="nav-dropdown-buying-power">
                                    ${buying_power}
                                </p>
                                <p className="nav-dropdown-buying-power-text">
                                    Buying Power
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="nav-dropdown-aboutme-section">
                        {/* <div className="personal-links"> */}
                            <div className="linkedin-link">
                                <a className="linkedin-link-a-tag" href="https://www.linkedin.com/in/hammad-khalid-071823143/">
                                    <img src={window.linkedin} />
                                    <span>My LinkedIn</span>
                                </a>
                            </div>
                            <div className="github-link">
                                <a className="github-link-a-tag" href="https://github.com/HammadKhalid101">
                                    <img src={window.github} />
                                    <span>My Github</span>
                                </a>
                            </div>
                            <div className="personal-site-link">
                                <a className="personal-site-link-a-tag" href="https://www.hammad-khalid.com/">
                                    <img src={window.personal} />
                                    <span>My Personal Website</span>
                                </a>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="nav-dropdown-logout">
                        <button className='logout-button' onClick={this.props.logout}>
                            <img src={window.logout} />
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