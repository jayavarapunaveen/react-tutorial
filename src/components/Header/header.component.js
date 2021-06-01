import React from 'react';
import './header.component.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="header">
            <div className="app-title">
                E-commerce App
            </div>
            <div className="app-options">
                Cart
            </div>
        </div>);
    }
}


export default Header;