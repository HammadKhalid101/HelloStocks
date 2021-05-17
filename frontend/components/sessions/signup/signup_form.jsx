import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.state);
    this.props.processForm(newUser);
  }

  handleDemoUser() {
    this.props.demoUser({
      username: "demotrades",
      password: "password",
    });
  }

  renderErrors() {
    return (
      <div className="signup-form-errors-div">
        <ul className="signup-form-errors-ul">
          {Object.values(this.props.errors).map((error, idx) => (
            <li className="signup-form-errors-li" key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { first_name, last_name, username, email, password } = this.state;
    return (
      <div className="signup-main">
        <div className="signup-left">
          <div className="signup-left-margin-div">
            <div className="signup-logo-div">
              <img src={window.hellostockslogo} />
            </div>
            <div className="signup-header-div">
              <header className="signup-header">
                <div className="signup-header-top">
                  <div className="signup-header-top-text">
                    <span className="signup-header-top-span">
                      Make Your Money Move, Fly To The Moon
                    </span>
                  </div>
                </div>
                <div className="signup-header-bottom">
                  <div className="signup-header-bottom-text">
                    <span className="signup-header-bottom-span">
                      HelloStocks lets you invest in companies you love,
                      commission-free.
                    </span>
                  </div>
                </div>
              </header>
            </div>
            <div className="signup-form-container">
              <div className="signup-form-top">
                <span className="signup-form-top-span">
                  Please enter your full legal name. Your legal name should
                  match any form of government ID.
                </span>
              </div>
              <form className="signup-form" onSubmit={this.handleSubmit}>
                <div className="signup-form-names">
                  <div className="signup-form-fname">
                    <div className="signup-form-fname-input-div">
                      <input
                        className="signup-form-fname-input"
                        type="text"
                        value={first_name}
                        placeholder="First name"
                        onChange={this.update("first_name")}
                      />
                    </div>
                  </div>
                  <div className="signup-form-lname">
                    <div className="signup-form-lname-input-div">
                      <input
                        className="signup-form-lname-input"
                        type="text"
                        value={last_name}
                        placeholder="Last name"
                        onChange={this.update("last_name")}
                      />
                    </div>
                  </div>
                </div>
                <div className="signup-form-username">
                  <div className="sign-form-username-div">
                    <input
                      className="signup-form-username-input"
                      type="text"
                      value={username}
                      placeholder="Username"
                      onChange={this.update("username")}
                    />
                  </div>
                </div>
                <div className="signup-form-email">
                  <div className="sign-form-email-div">
                    <input
                      className="signup-form-email-input"
                      type="text"
                      value={email}
                      placeholder="Email"
                      onChange={this.update("email")}
                    />
                  </div>
                </div>
                <div className="signup-form-password">
                  <div className="sign-form-password-div">
                    <input
                      className="signup-form-password-input"
                      type="password"
                      value={password}
                      placeholder="Password (min. 10 characters)"
                      onChange={this.update("password")}
                    />
                  </div>
                </div>
                <div className="signup-form-buttons">
                  <div className="signup-form-continue-container">
                    <div className="signup-form-continue-outer-div">
                      <button
                        className="signup-form-continue-button"
                        type="submit"
                      >
                        <div className="signup-form-continue-inner-div">
                          <span className="signup-form-continue-span">
                            Sign Up
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="signup-form-redirect-container">
                    <span className="signup-form-already-text-span">
                      Already signed up?
                    </span>
                    <br />
                    <span className="signup-form-redirect-login-link-span">
                      <Link
                        className="signup-form-redirect-login-link"
                        to="/login"
                      >
                        Log in to make money
                      </Link>
                    </span>
                  </div>
                </div>
                {this.renderErrors()}
              </form>
            </div>
            <div className="signup-footer-container">
              <div className="signup-footer-div">
                <footer className="signup-footer">
                  <div>First</div>
                  <div>Second</div>
                  <div>Third</div>
                  <div>Fourth</div>
                  <div>Fifth</div>
                  <div>Sixth</div>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-right-margin-div">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Six</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
