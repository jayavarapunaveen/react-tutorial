import React from 'react';
import './header.component.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="header">
            <div className="app-title">
                E-commerce App
            </div>
            <div className="app-options" >
                <Link to={`/cartlist`}>
                    Cart {this.props.cartCount ? this.props.cartCount : null}
                </Link>
            </div>
        </div>);
    }
}
const mapStoreToProps = ({ cart }) => ({
    cartCount: cart.cartItems.length
})

// export default Header;
export default connect(mapStoreToProps, null)(Header);