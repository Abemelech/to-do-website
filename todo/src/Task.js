import React, {Component} from 'react';


class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBoxChecked: false,
            title: "Task",
            desc: "Description of the task...",
            titleEdit: false,
            descEdit: false
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
    
    toogleName = () => {
        this.setState(
            prevState => ({ titleEdit: !prevState.titleEdit})
        ); 
    }

    toogleDesc = () => {
        this.setState(
            prevState => ({ descEdit: !prevState.descEdit})
        ); 
    }

    changeName = (value) => {
        this.setState({
            title: value
        });
    }

    changeDesc = (event) => {
        this.setState({
            desc: event.target.value
        });
    }

    render() {
        var title = this.state.title
        const nameBox = [];
        const descBox = [];
        if (this.state.titleEdit){
            return(
                <div className='todo-item'>
                
                <input type='checkbox' onChange={this.handleInput}></input>
                <input autoFocus type = 'text' value={this.state.title} onChange={(e) => this.changeName(e.target.value)} onMouseLeave= {this.toogleName} />
                <p className={this.getDescClassName()} onDoubleClick={this.toogleDesc}>{this.state.desc}</p>
            </div>
            );
        }
        else if (this.state.descEdit){
            return(
                <div className='todo-item'>
                <input type='checkbox' onChange={this.handleInput}></input>
                <p className={this.getNameClassName()} onDoubleClick={this.toogleName}>{this.state.title}</p>
                <input autoFocus className = 'todo-item editBox' type = 'textbox' value={this.state.desc} onChange={this.changeDesc} onMouseLeave={this.toogleDesc}/>
                </div>
            );
        }
        return(
            <div className='todo-item'>
                
                <input type='checkbox' onChange={this.handleInput}></input>
                <p className={this.getNameClassName()} onDoubleClick={this.toogleName}>{this.state.title}</p>
                <p className={this.getDescClassName()} onDoubleClick={this.toogleDesc}>{this.state.desc}</p>
            </div>
        );
    }
}

export default Task;