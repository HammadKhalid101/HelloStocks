import React from 'react';

class BuyingPower extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dashboard-main-buying-power-container">
                <div className="dashboard-main-buying-power-button-div">
                    <button className="dashboard-main-buying-power-button">
                        <div className="dashboard-main-buying-power-button-content">
                            <span className="dashboard-main-buying-power-text-span">
                                Buying Power
                            </span>
                            <span className="dashboard-main-buying-power-value-span">
                                $186,396.33
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default BuyingPower;