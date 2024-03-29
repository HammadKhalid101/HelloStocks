import { connect } from 'react-redux';
import MainGraph from './main_graph';

const mapStateToProps = ({session, entities: { users, assets, stocks }}) => {
    return {
        currentUser: users[session.id],
        assets: assets,
        stocks: stocks,
    };
};

export default connect(mapStateToProps, null)(MainGraph);