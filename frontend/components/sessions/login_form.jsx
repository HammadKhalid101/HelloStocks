import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.update = this.update.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { username, password } = this.state
        return (
            <div onSubmit={this.handleSubmit} className="login-form-box">
                <form >Welcome to HelloStocks, where the stocks only go up.
                    <br/>
                    Please Sign In
                    {this.renderErrors()}
                    <br/>
                    <div className="login-form">
                        <br/>
                        <label>Username
                            <input 
                                className="login-input"
                                type="text" 
                                value={username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br/>
                        <label>Password
                            <input 
                                className="login-input"
                                type="password" 
                                value={password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <button className="login-button" type="submit">Sign In</button>
                    </div>
                </form>
                <br/>
                    <button className="forgot-credentials-button">Forgot your username or password?</button>
            </div>
        )
    }
}

export default LoginForm;