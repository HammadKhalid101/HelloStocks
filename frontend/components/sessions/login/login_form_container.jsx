import React from 'react';
import { connect } from 'react-redux';
import { login, loginDemoUser, clearErrors } from '../../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        processForm: (currentUser) => dispatch(login(currentUser)),
        // loginDemo: (demoUser) => dispatch(loginDemoUser(demoUser)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);