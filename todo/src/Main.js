import React, {Component} from 'react';


class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const name = this.props.name;
        return(
            <div className='main'>
                <p className='main-list'>Item 1</p>
                <p className='main-list'>Something Something Something</p>
            </div>
        );
    }
}

export default Main;