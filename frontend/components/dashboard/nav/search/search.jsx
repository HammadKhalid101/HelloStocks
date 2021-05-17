import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchStocks();
  //   this.props.getAllAssets(this.props.currentUser.id);
  // }

  render() {
    return (
      <div className="nav-search">
        <div className="nav-search-img-div">
          <img src={window.search_icon} />
        </div>
        <input className="nav-search-input" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
