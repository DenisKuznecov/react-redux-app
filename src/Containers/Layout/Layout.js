import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <div className="layout">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
