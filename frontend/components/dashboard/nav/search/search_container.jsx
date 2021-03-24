import { connect } from 'react-redux';
import { getAllAssets } from '../../../../actions/asset_actions';
import { fetchStock, fetchStocks } from '../../../../actions/stock_actions'
import Search from './search';

const mapStateToProps = ({session, entities: { users, assets, stocks }}) => {
    
    return {
        currentUser: users[session.id],
        assets: assets,
        stocks: stocks,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        // logout: () => dispatch(logout()),
        getAllAssets: (currentUserId) => dispatch(getAllAssets(currentUserId)),
        fetchStock: (stockId) => dispatch(fetchStock(stockId)),
        fetchStocks: () => dispatch(fetchStocks(),)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);