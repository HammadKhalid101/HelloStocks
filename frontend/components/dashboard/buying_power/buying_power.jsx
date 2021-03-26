import React from 'react';

class BuyingPower extends React.Component {
    constructor(props) {
        super(props);
        this.convert_to_decimal = this.convert_to_decimal.bind(this);
    }

    convert_to_decimal(num) {
        let convert = num;
        const decimal = Math.abs(convert).toFixed(2);
        let nums = decimal.toString();
        if (nums.indexOf(".") === -1) {
            nums += '..';
        }
        nums = decimal.toString().split(".");
        nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const converted = `$${nums.join(".")}`;
        return converted;
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
                                {this.convert_to_decimal(this.props.currentUser.buying_power)}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default BuyingPower;