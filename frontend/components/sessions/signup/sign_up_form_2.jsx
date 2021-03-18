import React from 'react';

// const SignupForm2 = (props) => {
//     if (props.currentForm != 2) {
//         return null;
//     }

//     return (
//         <div className="signup-form2-container">
//             <header className="signup-form2-header">
//                 <div className="signup-form2-header-text">
//                     <h4>Welcome {props.first_name}</h4>
//                     <h5>Almost there</h5>
//                     <p>Please enter your buying power to fly to the moon</p>
//                 </div>
//             </header>
//             <div className="signup-form2-inputs">
//                 <input 
//                 className="signup-form2-input"
//                     type="text" 
//                     value={props.buying_power}
//                     placeholder="Don't be shy"
//                     onChange={props.update('buying_power')}
//                 />
//             </div>
//         </div>
//     )
// }

class SignupForm2 extends React.Component {
    render() {
        if (this.props.currentForm != 2) {
            return null;
        }

        return (
            <div className="signup-form2-container">
                <header className="signup-form2-header">
                    <div className="signup-form2-header-text">
                        <h4>Welcome {this.props.first_name}</h4>
                        <h5>Almost there</h5>
                        <p>Please enter your buying power to fly to the moon</p>
                    </div>
                </header>
                <div className="signup-form2-inputs">
                    <input 
                        className="signup-form2-input"
                        type="text" 
                        placeholder="Don't be shy"
                        value={this.props.buying_power}
                        onChange={this.props.update}
                    />
                </div>
            </div>
        )
    }
}

export default SignupForm2;