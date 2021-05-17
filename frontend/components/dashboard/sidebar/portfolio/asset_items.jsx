import React from "react";

class AssetItems extends React.Component {
  constructor(props) {
    super(props);
    this.allAssets = this.allAssets.bind(this);
    this.convert_to_decimal = this.convert_to_decimal.bind(this);
  }

  //   componentDidMount() {
  // this.props.getAllAssets(this.props.currentUser.id);
  // this.props.fetchStocks();
  //   }

  convert_to_decimal(num) {
    let convert = num;
    const decimal = Math.abs(convert).toFixed(2);
    let nums = decimal.toString();
    if (nums.indexOf(".") === -1) {
      nums += "..";
    }
    nums = decimal.toString().split(".");
    nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const converted = `$${nums.join(".")}`;
    return converted;
  }

  allAssets() {
    const stocks = this.props.stocks;
    return (
      <div className="assets-items-div">
        {Object.values(this.props.assets).map((asset, idx) => (
          <a className="asset-item-a-tag" key={asset.id} href="/#/dashboard">
            <div className="asset-item-left">
              <div className="asset-item-name">
                {stocks[asset.stock_id].tikr}
              </div>
              <div className="asset-item-shares">{asset.quantity}</div>
            </div>
            <div className="asset-item-graph">
              {/* <img className="asset-item-graph-img" src={window.small_graph} /> */}
            </div>
            <div className="asset-item-right">
              <div className="asset-item-last-price">
                {this.convert_to_decimal(stocks[asset.stock_id].last_price)}
              </div>
              <div className="asset-item-percent-change">
                {stocks[asset.stock_id].percent_change}%
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  render() {
    return <div className="asset-items-container">{this.allAssets()}</div>;
  }
}

export default AssetItems;
