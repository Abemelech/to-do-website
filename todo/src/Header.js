import React, {Component} from 'react';


class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const name = this.props.name;
        return(
            <div className='header'>
                <h1 className='main-header'>To Do List</h1>
                <h3 className='sub-header'>Are you ready to get things done!</h3>
            </div>
        );
    }
}

export default Header;