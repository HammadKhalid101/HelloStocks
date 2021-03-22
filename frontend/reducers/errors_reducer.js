import { combineReducers } from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_reducer'
import stockErrorsReducer from '../reducers/stock_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    stock: stockErrorsReducer,
})

export default errorsReducer;