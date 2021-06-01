
import React from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

class ProductList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response)
                this.setState({ products: response.data })
            });
    }

    render() {
        const { products } = this.state
        return (<h1>
            {products.map(eachProduct => {
                return (<ProductCard {...eachProduct}></ProductCard>);

            })}




        </h1>)
    }
}


export default ProductList;