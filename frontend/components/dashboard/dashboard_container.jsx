import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
    
    // return {
        // assets: state.entities.assets
    // };
};

const mapDispatchToProps = dispatch => {
    
    // return {
        // logout: () => dispatch(logout()),
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);