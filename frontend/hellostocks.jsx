import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util';
import { fetchStock } from './util/stock_api_util';
import { receiveAsset, receiveAssets, deleteAsset } from './actions/asset_actions'
import {
    fetchAsset, 
    fetchAssets, 
    createAsset, 
    updateAsset, 
    destroyAsset } from './util/asset_api_util';
import {
    getAsset,
} from './actions/asset_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    
    // Testing 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // Testing 

    ReactDOM.render(<Root store={store} />, root)
})

//Testing
window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchStock = fetchStock;
window.fetchAsset = fetchAsset;
window.fetchAssets = fetchAssets;
window.createAsset = createAsset;
window.updateAsset = updateAsset;
window.destroyAsset = destroyAsset;
window.getAsset = getAsset;
window.receiveAsset = receiveAsset;
window.receiveAssets = receiveAssets;
window.deleteAsset = deleteAsset;
// Testing