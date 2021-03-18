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
                    <img className="login-page-img" src={window.hellostockslogo}/>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <header className="login-form-header">
                            <span>Welcome to HelloStocks, where the stocks only go up.</span>
                            <span>Please Sign In</span>
                        </header>
                        <div className="login-form-inputs">
                            <label>Email or Username
                                <input 
                                className="login-input"
                                type="text" 
                                value={username}
                                onChange={this.update('username')}
                                />
                            </label>
                            <label>Password
                                <input 
                                className="login-input"
                                type="password" 
                                value={password}
                                onChange={this.update('password')}
                                />
                            </label>
                        </div>
                        <p><a href="#">Forgot your username or password?</a></p>
                        {this.renderErrors()}
                        <footer>
                            <div className="signin-button-div">
                                <button className="signin-button" type="submit">Sign In</button>
                            </div>
                            <div className="demo-user-login-button">
                                <button className='demo-user-button-login' onClick={this.handleDemoUser}>Demo User</button>
                            </div>  
                        </footer>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;