import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';

class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <Header />
                <Nav />
                <Main />
            </div>
            
            
        );
    } 
}


ReactDOM.render(
    <App />,
    document.getElementById("container")
);