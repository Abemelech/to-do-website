import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const name = this.props.name;
        return(
            <div className='header-div'>
                <h1 className='header'>Welcome {name}</h1>
                <h3 className='sub-header'>Are you ready to get things done!</h3>
            </div>
        );
    }
}

export default App;