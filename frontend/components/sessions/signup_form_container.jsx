import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (newUser) => dispatch(signup(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);