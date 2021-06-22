
import React from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { initProducts } from '../../redux/actions/productaction';
class ProductList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: "",
            maxPrice: "",
            loading: false
        }
        window.onscroll = (event) => {
            console.log('scrolled once', event.srcElement.documentElement.scrollTop);
            console.log(document.getElementById('productList').offsetHeight)
            if (window.innerHeight + event.srcElement.documentElement.scrollTop >= document.getElementById('productList').offsetHeight) {
                if (!this.state.loading) {
                    console.log('new products loaded')
                    this.loadProducts();
                }
            }
        }
    }
    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = () => {
        this.setState({ loading: true })
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response)
                this.setState({
                    products: [...response.data, ...this.state.products],
                    loading: false
                });
                this.props.initProducts([...response.data, ...this.props.products]);
            });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    filterProducts = () => {
        let tempProducts = [...this.props.products];
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
                marginTop: 2
            }}>
                <div style={{ width: "30%", border: "1px solid blue" }}>
                    Max Price:
                    <input type="text" name="maxPrice" value={this.state.maxPrice} onChange={this.handleChange} />
                    <button onClick={this.filterProducts}>Apply</button>
                </div>
                <div id="productList" style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    border: "1px solid green"
                }}>
                    {products.map((eachProduct, index) => {
                        return (<ProductCard {...eachProduct} key={index}></ProductCard>);

                    })}
                </div>
            </div >


        )
    }
}



const mapStoreToProps = ({ product }) => ({
    products: product.allProducts
})

function mapPropsToDispatch(dispatch) {
    return ({
        initProducts: (products) => dispatch(initProducts(products))
    })
}

export default withRouter(connect(mapStoreToProps, mapPropsToDispatch)(ProductList));