import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
      <div className='col-3'>
        <h2>{props.product.name}  <span class="badge bg-secondary">₹{props.product.price}</span></h2>
      </div>
      <div className="col-3">
        <button type="button" class="btn btn-outline-info w-25" onClick={() => { props.decrementQuantity(props.index) }}><b>-</b></button>
        <button type="button" class="btn btn-outline-primary col-2">{props.product.quantity}</button>
        <button type="button" class="btn btn-outline-info w-25" onClick={() => { props.incrementQuantity(props.index) }}><b>+</b></button>
      </div>
      <div className="col-2">
        <h3>{props.product.price * props.product.quantity}</h3>
      </div>
    </div>
  )
}
