import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

class About extends Component {
    
    render(){
        return(
            <div style={{color:'teal'}}>
                <Link to='/'>Home</Link>
                <Header headerText='This is from about page'/>
                <p>Such wow. Very React.</p>
            </div>
        )
    }
}

export default About;