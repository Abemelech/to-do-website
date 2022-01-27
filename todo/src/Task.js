import React, {Component} from 'react';


class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBoxChecked: false
        };
    }

    handleInput = (e) => {
        this.setState(
            prevState => ({ isBoxChecked: !prevState.isBoxChecked})
        );

    }

    getNameClassName = () => {
        if (this.state.isBoxChecked === false) {
            return ("todo-item-name");
        }
        else {
            return ("todo-item-name checked");
        }
    }

    getDescClassName = () => {
        if (this.state.isBoxChecked === false) {
            return ("todo-item-desc");
        }
        else {
            return ("todo-item-desc checked");
        }
    }
    
    render() {
        const name = this.props.name;
        return(
            <div className='todo-item'>
                <input type='checkbox' onChange={this.handleInput}></input>
                <p className={this.getNameClassName()}>Item 1</p>
                <p className={this.getDescClassName()}>Something Something Something</p>
            </div>
        );
    }
}

export default Task;