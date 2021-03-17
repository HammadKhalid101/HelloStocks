import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = Object.assign({}, this.state);
        this.props.processForm(newUser);
    }

    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors).map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { first_name, last_name, username, email, password } = this.state
        return (
            <div className="signup-form-container">
                <h3 className="signup-form-logo">HelloStocks (Add HelloStocks Logo Here)</h3>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="signup-form-box">Make Your Money Move, Fly To The Moon
                    <p>HelloStocks lets you invest in companies you love, commission-free.</p>
                    <br/>
                    Please enter your full legal name. Your legal name should match any form of government ID.
                    {this.renderErrors()}
                    <br/>
                    <div className="signup-form">
                        <br/>
                            <input 
                                className="signup-input"
                                type="text" 
                                value={first_name}
                                placeholder="First name"
                                onChange={this.update('first_name')}
                            />
                        <br/>
                        <br/>
                            <input 
                                className="signup-input"
                                type="text" 
                                value={last_name}
                                placeholder="Last name"
                                onChange={this.update('last_name')}
                            />
                        <br/>
                        <br/>
                            <input 
                                className="signup-input"
                                type="text" 
                                value={username}
                                placeholder="Username"
                                onChange={this.update('username')}
                            />
                        <br/>
                        <br/>
                            <input 
                                className="signup-input"
                                type="text" 
                                value={email}
                                placeholder="Email"
                                onChange={this.update('email')}
                            />
                        <br/>
                        <br/>
                            <input 
                                className="signup-input"
                                type="password" 
                                value={password}
                                placeholder="Password"
                                onChange={this.update('password')}
                            />
                        <br/>
                        {/* <p>Already Started</p>
                        <button className="signup-already-started-button">Log in to complete your application</button> */}
                        <br/>
                        <button className="signup-button" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;