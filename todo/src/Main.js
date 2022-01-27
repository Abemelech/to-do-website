import React, {Component} from 'react';


class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const name = this.props.name;
        return(
            <div className='main'>
                <div className='todo-item'>
                    <input type='checkbox'></input>
                    <p className='todo-item-name'>Item 1</p>
                    <p className='todo-item-desc'>Something Something Something</p>
                </div>
                
            </div>
        );
    }
}

export default Main;