import React from 'react';
import {Link} from "react-router-dom";
import { clearCart } from '../../redux/actions/cartaction';
import { useDispatch } from 'react-redux';


export default function CartTotals({deliveryCharge, history, totalPrice}) {
    const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="container">
      <div className="row">
      <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
        <Link to='/'>
          <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => { dispatch(clearCart())}}>
          clear cart
          </button>
        </Link>
        <h5>
          <span className="text-title">
          subTotal:
          </span>
          <strong>$ {totalPrice.toFixed(2)}</strong>
        </h5>

        <h5>
          <span className="text-title">
          Delivery Fee:
          </span>
          <strong>$ {deliveryCharge}</strong>
        </h5>

        <h5>
          <span className="text-title">
          Total:
          </span>
          <strong>$ {(deliveryCharge+totalPrice).toFixed(2)}</strong>
        </h5>
       
      </div>
      </div>
      </div>
    </React.Fragment>
  )
}