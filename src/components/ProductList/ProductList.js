
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
            tempProducts: [],
            category: "",
            maxPrice: "",
            loading: false,
            maxProducts: 50,
            recordsPerPage: 6,
            currentPage: 1
        }
        // window.onscroll = (event) => {
        //     console.log('scrolled once', event.srcElement.documentElement.scrollTop);
        //     console.log(document.getElementById('productList').offsetHeight);

        //     if (window.innerHeight + event.srcElement.documentElement.scrollTop >= document.getElementById('productList').offsetHeight) {
        //         if (!this.state.loading&&(this.state.products.length<this.state.maxProducts)) {
        //             console.log('new products loaded')
        //             this.loadProducts();
        //         }
        //     }
        // }
    }
    componentDidMount() {
        this.loadProducts();
    }
    calculatePages = () => {
        let arrayLength = this.state.products.length;
        let noOfPages = Math.ceil(arrayLength / this.state.recordsPerPage);
        let list = []

        for (let i = 1; i <= noOfPages; i++) {
            list.push(<li key={'pagination' + i} onClick={
                () => {
                    this.setState({ currentPage: i }, this.tempProductsDisp)

                }}>
                {i}
            </li>)
        }

        return list;
    }
    tempProductsDisp = () => {
        const temp = JSON.parse(JSON.stringify(this.state.products));
        this.setState({
            tempProducts: temp.splice((this.state.currentPage - 1) * this.state.recordsPerPage, this.state.recordsPerPage)
        })

    }

    loadProducts = () => {
        this.setState({ loading: true })
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response)
                this.setState({
                    products: [...response.data, ...this.state.products],
                    loading: false
                }, this.tempProductsDisp);
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
        const { tempProducts } = this.state
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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid green"
                }}>
                    <div id="productList" style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
                        {tempProducts.map((eachProduct, index) => {
                            return (<ProductCard {...eachProduct} key={index}></ProductCard>);

                        })}
                    </div>
                    <ul id="page-numbers">
                        {this.calculatePages()}
                    </ul>
                    {/* {this.state.loading?"Loading....":null} */}
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