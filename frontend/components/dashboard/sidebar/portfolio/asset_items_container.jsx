import { connect } from 'react-redux';
import { getAllAssets } from '../../../../actions/asset_actions';
import { fetchStocks } from '../../../../actions/stock_actions';
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
        fetchStocks: () => dispatch(fetchStocks(),)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetItems);