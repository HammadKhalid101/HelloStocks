import { connect } from 'react-redux';
import { getAllAssets } from '../../../../actions/asset_actions';
import AssetItems from './asset_items';

const mapStateToProps = ({session, entities: { users, assets, stocks }}) => {
    
    return {
        currentUser: users[session.id],
        assets: assets,
        stocks: stocks,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        getAllAssets: (currentUserId) => dispatch(getAllAssets(currentUserId)),
        fetchStock: (stockId) => dispatch(fetchStock(stockId)),
        fetchStocks: () => dispatch(fetchStocks(),)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetItems);