import React from 'react';
import DropdownItems from './dropdown_items_container'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        };
        this.clickListener = this.clickListener.bind(this);
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
    }

    componentDidUpdate() {
        window.removeEventListener('click', this.clickListener);
    }

    clickListener(e) {
        this.setState({ showDropdown: false }, () => {
            window.removeEventListener('click', this.clickListener)
        })
    }

    handleDropdownClick(e) {
        e.stopPropagation();
        this.setState(prevState => ({ showDropdown: !prevState.showDropdown }), () => {
            if (this.state.showDropdown) {
                window.addEventListener('click', this.clickListener)
            }
        })
    }

    render() {

        return (
            <div className='nav-dropdown'>
                <div onClick={this.handleDropdownClick} className={this.state.showDropdown ? "nav-dropdown-visible" : "nav-dropdown-invisible"}>
                  <div>
                       <span className="nav-dropdown-button-span">
                           Account
                       </span>
                   </div>
                   {/* <div className="nav-dropdown-items-container"> */}
                      {this.state.showDropdown && <DropdownItems />}
                   {/* </div> */}
               </div>
           </div>
        )
    }
}

export default Dropdown;