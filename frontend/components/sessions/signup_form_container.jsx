import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processFrom: (newUser) => dispatch(signup(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);