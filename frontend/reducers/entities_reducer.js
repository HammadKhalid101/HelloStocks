import { combineReducers } from 'redux'
import assetReducer from './asset_reducer';
import stocksReducer from './stock_reducer';
import usersReducer from "./users_reducer";

const entitiesReducer = (combineReducers({
    users: usersReducer,
    stocks: stocksReducer,
    assets: assetReducer,
}))

export default entitiesReducer;