import React from 'react';
import AssetItems from './asset_items_container';

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className='sidebar-portfolio-assets-container'>
                <AssetItems />
            </div>
        )
    }
}

export default Portfolio;