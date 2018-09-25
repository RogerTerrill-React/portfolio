import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

class App extends Component {
    
    render() {
        return (
            <div style={{color:'purple'}}>
                <Link to='/contact/'>Contact</Link>
                <Link to='/about/'>About</Link>
                <Header headerText='Hello Gatsby' />
                <p>What a world</p>
            </div>
        )
    }
}

export default App;
