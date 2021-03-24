import React from 'react';

class Search extends React.Component {

    constructor(props) {
        
        super(props)
        
    }

    componentDidMount() {
        
        this.props.getAllAssets(this.props.currentUser.id);
        this.props.fetchStocks();
    }

    render() {
        
        return (
            <div className='nav-search'>
                <div className="nav-search-img">
                    
                </div>
                <div className="nav-search-text-div">
                    <p className="nav-search-text">
                        Search
                    </p>
                </div>
            </div>
        )
    }
}

export default Search;