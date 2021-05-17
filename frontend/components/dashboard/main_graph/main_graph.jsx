import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  ReferenceLine,
} from "recharts";

class MainGraph extends React.Component {
  constructor(props) {
    super(props);
    this.portfolioValue = this.portfolioValue.bind(this);
    this.convert_to_decimal = this.convert_to_decimal.bind(this);
  }

  //   componentDidMount() {
  //     this.portfolioValue();
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

  portfolioValue() {
    let value = this.props.currentUser.buying_power;
    const stocks = this.props.stocks;
    Object.values(this.props.assets).map((asset, idx) => {
      value += asset.quantity * stocks[asset.stock_id].last_price;
    });

    return this.convert_to_decimal(value);
  }

  render() {
    if (!this.props.stocks || !this.props.assets) {
      return <div>Loading......</div>;
    }
    return (
      <section className="dashboard-main-graph-section">
        <header className="dashboard-main-graph-header">
          <div className="main-graph-portfolio-value-div">
            <h1 className="main-graph-portfolio-value-heading">
              <span className="main-graph-portfolio-value-span">
                {this.portfolioValue()}
              </span>
            </h1>
          </div>
          <div className="main-graph-portfolio-value-change-div">
            <span className="main-graph-portfolio-value-change-span">
              <span className="main-graph-portfolio-value-change-amount">
                +$16,235.35
              </span>
              <span className="main-graph-portfolio-value-change-percent">
                (+1.87%)
              </span>
            </span>
            <span className="main-graph-portfolio-value-today-span">Today</span>
          </div>
        </header>
        <div className="dashboard-main-graph-container">
          <img className="chart-img" src={window.chart} />
        </div>
        <nav className="dashboard-main-graph-nav">
          <div className="main-graph-nav-buttons-div">
            <button className="main-graph-nav-live-button">
              <span className="main-graph-nav-button-span">LIVE</span>
            </button>
            <button className="main-graph-nav-button">
              <span className="main-graph-nav-button-span">1D</span>
            </button>
            <button className="main-graph-nav-button">
              <span className="main-graph-nav-button-span">1W</span>
            </button>
            <button className="main-graph-nav-button">
              <span className="main-graph-nav-button-span">1M</span>
            </button>
            <button className="main-graph-nav-button">
              <span className="main-graph-nav-button-span">3M</span>
            </button>
            <button className="main-graph-nav-button">
              <span className="main-graph-nav-button-span">1Y</span>
            </button>
            <button className="main-graph-nav-button">
              <span className="main-graph-nav-button-span">ALL</span>
            </button>
          </div>
        </nav>
      </section>
    );
  }
}

export default MainGraph;
