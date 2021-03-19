import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
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

    handleDemoUser() {
        this.props.processForm({
            username: 'demotrades',
            password: 'password'
        })
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
            <div className="login-page-main">
                <div className="login-page-img-div">
                    <img className="login-page-img" src={window.login_image}/>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <header className="login-form-header">
                            <span>Welcome to HelloStocks</span>
                        </header>
                        <div className="login-form-mid">
                            <div className="login-form-email-input-div">
                                <label>
                                    <div className="login-form-input-labels">
                                        <span>Email or username</span>
                                    </div>
                                    <div className="login-form-email-input-box">
                                        <input 
                                            className="login-form-email-input"
                                            type="text" 
                                            value={username}
                                            onChange={this.update('username')}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="login-form-password-input-div">
                                <label>
                                    <div className="login-form-input-labels">
                                        <span>Password</span>
                                    </div>
                                    <div className="login-form-password-input-box">
                                        <input 
                                            className="login-form-password-input"
                                            type="password" 
                                            value={password}
                                            onChange={this.update('password')}
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="forgot-credentials">
                                <p><a className="forgot-credentials-link" href="#">Forgot your username or password?</a></p>
                            </div>
                        </div>
                        {this.renderErrors()}
                        <footer className="login-form-footer">
                            <div className="login-form-signin-button-div">
                                <button className="login-form-signin-button" type="submit">
                                    <span className="login-form-signin-button-span">
                                        Sign In
                                    </span>
                                </button>
                            </div>
                            <div className="login-form-demo-button-div">
                                <button className='login-form-demo-button' onClick={this.handleDemoUser}>
                                    <span className="login-form-demo-button-span">
                                        Demo User
                                    </span>
                                </button>
                            </div>  
                        </footer>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;