
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
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {products.map(eachProduct => {
                    return (<ProductCard {...eachProduct} key={eachProduct.id}></ProductCard>);

                })}
            </div>



        )
    }
}


export default ProductList;