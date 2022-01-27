import React, {Component} from 'react';
import Task from './Task.js'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            numTasks: 0
        }
    }

    addToDo = () => {
        this.setState({
            numTasks: this.state.numTasks + 1
        });
    }

    render() {
        const tasks = [<Task />];

        for (var i = 0; i < this.state.numTasks; i++) {
            tasks.push(<Task />);
            console.log("Check");
        }


        return(
            <div className='main'>
                {tasks}
                <div className='todo-add'>
                    
                    <p><a href= "#" onClick={this.addToDo}>+ Add Item</a></p>
                </div>
                
            </div>
        );
    }
}

export default Main;