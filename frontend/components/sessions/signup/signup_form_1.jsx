import React from 'react';

// const SignupForm1 = (props) => {
//     if (props.currentForm != 1) {
//         return null;
//     }
//     return (
//         <div className="signup-form1-container">
//             <header className="signup-form1-header">
//                 <div className="signup-form1-header-text">
//                     <h4>Make Your Money Move, Fly To The Moon</h4>
//                     <p>HelloStocks lets you invest in companies you love, commission-free.</p>
//                     <p>Please enter your full legal name. Your legal name should match any form of government ID.</p>
//                 </div>
//             </header>
//             <div className="signup-form1-inputs">
//                 <input 
//                 className="signup-form1-input"
//                     type="text" 
//                     value={props.first_name}
//                     placeholder="First name"
//                     onChange={props.update('first_name')}
//                 />
//                 <input 
//                     className="signup-form1-input"
//                     type="text" 
//                     value={props.last_name}
//                     placeholder="Last name"
//                     onChange={props.update('last_name')}
//                 />
//                 <input 
//                     className="signup-form1-input"
//                     type="text" 
//                     value={props.username}
//                     placeholder="Username"
//                     onChange={props.update('username')}
//                 />
//                 <input 
//                     className="signup-form1-input"
//                     type="text" 
//                     value={props.email}
//                     placeholder="Email"
//                     onChange={props.update('email')}
//                 />
//                 <input 
//                     className="signup-form1-input"
//                     type="password" 
//                     value={props.password}
//                     placeholder="Password (min. 8 characters)"
//                     onChange={props.update('password')}
//                 />
//             </div>
//         </div>
//     )
// }

class SignupForm1 extends React.Component {
    render() {
        if (this.props.currentForm != 1) {
            return null;
        }

        return (
                <div className="signup-form1-container">
                <header className="signup-form1-header">
                    <div className="signup-form1-header-text">
                        <h4>Make Your Money Move, Fly To The Moon</h4>
                        <p>HelloStocks lets you invest in companies you love, commission-free.</p>
                        <p>Please enter your full legal name. Your legal name should match any form of government ID.</p>
                    </div>
                </header>
                <div className="signup-form1-inputs">
                    <input 
                    className="signup-form1-input"
                        type="text" 
                        value={this.props.first_name}
                        placeholder="First name"
                        onChange={this.props.update}
                    />
                    <input 
                        className="signup-form1-input"
                        type="text" 
                        value={this.props.last_name}
                        placeholder="Last name"
                        onChange={this.props.update}
                    />
                    <input 
                        className="signup-form1-input"
                        type="text" 
                        value={this.props.username}
                        placeholder="Username"
                        onChange={this.props.update}
                    />
                    <input 
                        className="signup-form1-input"
                        type="text" 
                        value={this.props.email}
                        placeholder="Email"
                        onChange={this.props.update}
                    />
                    <input 
                        className="signup-form1-input"
                        type="password" 
                        value={this.props.password}
                        placeholder="Password (min. 8 characters)"
                        onChange={this.props.update}
                    />
                </div>
            </div>
        )   
    }   
}

export default SignupForm1;