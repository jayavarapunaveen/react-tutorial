
import React from 'react';
function ProductCard(props) {
    let cardStyles = {
        padding: "25px",
        border: "1px solid red"
    }

    return (
        <div style={
            cardStyles
        }>
            <h2>{props.title}</h2>
            <img src={props.image} />
        </div>
    );
}

export default ProductCard;