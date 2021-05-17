import React from "react";
import Navbar from "./nav/navbar";
import Sidebar from "./sidebar/sidebar";
import MainGraph from "./main_graph/main_graph_container";
import BuyingPower from "./buying_power/buying_power_container";
import News from "./news/news";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStocks();
    this.props.getAllAssets(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="dashboard-main">
        <header className="dashboard-header">
          <Navbar />
        </header>
        <div className="dashboard-main-content">
          <div className="dashboard-left-side">
            <MainGraph />
            <BuyingPower />
            <News />
            <footer className="dashboard-left-side-footer">
              <div className="dashboard-left-side-footer-content">
                <span className="dashboard-privacy-policy-span">
                  For more information, see our
                  <a
                    className="dashboard-privacy-policy-link"
                    href="/#/dashboard"
                  >
                    {" "}
                    Privacy Policy.
                  </a>
                </span>
              </div>
            </footer>
          </div>
          <div className="dashboard-right-side">
            <div className="dashboard-sidebar-container">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
