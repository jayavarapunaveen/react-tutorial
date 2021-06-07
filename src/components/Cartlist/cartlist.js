import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';


class CartList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.cartItems.map(eachProduct => {
                    return (<ProductCard {...eachProduct} key={eachProduct.id}></ProductCard>);

                })}

                {this.props.totalPrice}
            </>


        )
    }
}

const mapStoreToProps = ({ cart }) => ({
    cartItems: cart.cartItems,
    totalPrice: cart.totalPrice
})

export default connect(mapStoreToProps, null)(CartList);