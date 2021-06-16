
import React, { useEffect, useState } from 'react';
// import './ProductDetail.css';
// import './productdetail.scss';
import ImageZoom from './ImageZoom.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { productId } = useParams();
    const [productInfo, setProductDetail] = useState({
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                console.log(response.data);
                setProductDetail(response.data);
            });
    }, [])


    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <div className="left-container" style={{ width: "30%" }}>
                <ImageZoom image={productInfo?.image}></ImageZoom>
            </div>
            <div className="right-container" style={{
                display: "flex",
                flexDirection: "column",
                width: "70%"
            }}>
                <div className="detail-info-container" style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%"
                }}>
                    <div className="details">
                        <h1>{productInfo.title||""}</h1>
                        <p>{productInfo.description}</p>
                        <h1 style={{ margin: '20px 0px 20px 0px' }}>
                            {`₹ ${productInfo.price}`}
                            <p style={{ fontSize: 'small' }}>
                                {`₹ ${1000} per block`}
                                <br />
                                <b> Discount: </b> <span style={{ color: 'green' }}>
                                    {20}%
                                </span>
                            </p>
                        </h1>
                    </div>
                    <div className="ratings">
                        Ratings
                    </div>
                </div>

                <div className="faq">
                    <hr />
                    Faq
                </div>
                <div className="reviews">
                    <hr />
                    {/* {productInfo.comparisions.map()} */}
                    Comparisions
                    <table class="table table-striped" style={{ width: "700px" }}>
                        <thead>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Rating
                            </th>
                        </thead>
                        <tbody>
                            {productInfo?.comparisions?.map(row => (<tr>
                                <td>
                                    {row.name}
                                </td>
                                <td>
                                    {row.price}
                                </td>
                                <td>
                                    {row.rating}
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;
