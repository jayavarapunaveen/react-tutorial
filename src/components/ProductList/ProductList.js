
import React from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

class ProductList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: "",
            maxPrice: null
        }
    }
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response)
                this.setState({ products: response.data })
            });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    filterProducts = () => {
        let tempProducts = this.state.products;
        tempProducts = tempProducts.filter(eachProduct => {
            return (eachProduct.price <= this.state.maxPrice)
        });

        this.setState({
            products: tempProducts
        })

    }

    render() {
        const { products } = this.state
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop:2
            }}>
                <div style={{ width: "30%", border: "1px solid blue" }}>
                    Max Price:
                <input type="text" name="maxPrice" value={this.state.maxPrice} onChange={this.handleChange} />
                    <button onClick={this.filterProducts}>Apply</button>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    border: "1px solid green"
                }}>
                    {products.map(eachProduct => {
                        return (<ProductCard {...eachProduct} key={eachProduct.id}></ProductCard>);

                    })}
                </div>
            </div >


        )
    }
}


export default ProductList;