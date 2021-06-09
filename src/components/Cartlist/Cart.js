import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        {/* {this.props.cartItems.map(eachProduct => {
                    return (<ProductCard {...eachProduct} key={eachProduct.id}></ProductCard>);

                })}

                {this.props.totalPrice} */}

        {
            if (this.props.cartItems.length > 0) {
                return (
                    <React.Fragment>
                        <h1>My Cart</h1>{JSON.stringify(this.props.totalPrice)}
                        <CartColumns />
                        <CartList value={this.props.cartItems} />
                        <CartTotals deliveryCharge={20} history={this.props.history} totalPrice={this.props.totalPrice}/>
                    </React.Fragment>
                )
            }
            else {
                return (<EmptyCart />)
            }
        }



    }
}

const mapStoreToProps = ({ cart }) => ({
    cartItems: cart.cartItems,
    totalPrice: cart.totalPrice
})

export default connect(mapStoreToProps, null)(Cart);