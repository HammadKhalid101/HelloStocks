import { combineReducers } from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_reducer'
import stockErrorsReducer from '../reducers/stock_errors_reducer';
import assetErrorReducer from './asset_error_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    stock: stockErrorsReducer,
    asset: assetErrorReducer,
})

export default errorsReducer;