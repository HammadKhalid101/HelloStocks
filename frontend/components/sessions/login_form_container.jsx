import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        processForm: (currentUser) => dispatch(login(currentUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);