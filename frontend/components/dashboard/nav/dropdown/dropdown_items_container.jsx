import { connect } from 'react-redux';
import { logout } from '../../../../actions/session_actions';
import DropdownItems from './dropdown_items';

const mapStateToProps = ({session, entities: { users, assets, stocks }}) => {
    
    return {
        currentUser: users[session.id],
        assets: assets,
        stocks: stocks,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownItems);