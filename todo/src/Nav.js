import React, {Component} from 'react';


class Nav extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const name = this.props.name;
        return(
            <div className='nav'>
                <h1 className='main-nav'>Catagories</h1>
            </div>
        );
    }
}

export default Nav;