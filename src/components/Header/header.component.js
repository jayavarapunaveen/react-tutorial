import React from 'react';
import './header.component.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { withRouter } from 'react-router-dom'
class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    navigateToCart=()=>{
        this.props.history.push('/cart');
    }
    render() {
        return (<div className="app-header">
            <div className="app-title">
                E-commerce App
            </div>
            <div className="app-options" onClick={()=>this.navigateToCart()}>
                {/* <Link to={`/cart`}> */}
                    <ShoppingCartOutlinedIcon fontSize="large" />
                    <span style={{
                        fontSize: "large",
                        position: "absolute"
                    }}> {this.props.cartCount ? this.props.cartCount : null}</span>
                {/* </Link> */}
            </div>
        </div>);
    }
}
const mapStoreToProps = ({ cart }) => ({
    cartCount: cart.cartItems.length
})

// export default Header;
export default withRouter(connect(mapStoreToProps, null)(Header));