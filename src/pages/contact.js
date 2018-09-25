import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

class Contact extends Component {

    render() {
        return (
            <div style={{color:'teal'}}>
                <Link to='/'>Home</Link>
                <Header headerText='Contact'/>
                <p>Send us a message!</p>
            </div>
        )
    }
}

export default Contact;