import React from 'react';

export default function CartColumns() {

  return (
    <div className="container-fluid text-center">
      <div className="row">

        <div className="col-10 col-md-2">
          <p className="text-uppercase">Products</p>
        </div>

        <div className="col-10 col-md-2">
          <p className="text-uppercase">Name of Product</p>
        </div>

        <div className="col-10 col-md-2">
          <p className="text-uppercase">Price</p>
        </div>

        <div className="col-10 col-md-2">
          <p className="text-uppercase">Quantity</p>
        </div>

        <div className="col-10 col-md-2">
          <p className="text-uppercase">Remove</p>
        </div>

        <div className="col-10 col-md-2">
          <p className="text-uppercase">Total</p>
        </div>

      </div>
    </div>
  )
}