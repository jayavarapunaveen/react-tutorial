import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/actions/cartaction';

export default function CartItem({ item, value = {} }) {
  const dispatch = useDispatch();
  const { id, title, image, price, count, total } = item;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={image} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>{title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span> $ {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            {/*decrement*/}
            <span className="btn btn-black mx-1" onClick={() =>{
              console.log('remove item')

                    dispatch(removeItemFromCart(id))}}
            >
              -
              </span>
            {/*count*/}
            <span className="btn btn-black mx-1">{count}</span>
            {/*increment*/}
            <span className="btn btn-black mx-1" onClick={() =>{
              console.log('add item')
              dispatch(addItemToCart(item))}}
            >
              +
              </span>
          </div>
        </div>
      </div>

      {/* before end of main row */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" >
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {total}</strong>
      </div>
    </div>
  )
}