import { connect } from 'react-redux';
import BuyingPower from './buying_power';

const mapStateToProps = ({session, entities: { users, assets, stocks }}) => {
    
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => {
    
};

export default connect(mapStateToProps, null)(BuyingPower);