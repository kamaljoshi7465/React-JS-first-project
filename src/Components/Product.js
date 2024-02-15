import React from 'react'

export default function Product(props) {
  return (
    <div className='row mt-2 justify-content-center align-items-center'>
      <div className='col-3'>
        <h2>{props.product.name}  <span className="badge bg-secondary">₹{props.product.price}</span></h2>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-outline-info w-25" onClick={() => { props.decrementQuantity(props.index) }}><b>-</b></button>
        <button type="button" className="btn btn-outline-primary col-2">{props.product.quantity}</button>
        <button type="button" className="btn btn-outline-info w-25" onClick={() => { props.incrementQuantity(props.index) }}><b>+</b></button>
      </div>
      <div className="col-3">
        <h4>Total Price: <span className="badge bg-secondary">₹{props.product.price * props.product.quantity}</span></h4>
      </div>
      <button className='col-1 btn bg-danger fw-bold' onClick={() => { props.removeItem(props.index) }}>
        Remove
      </button>
    </div >
  )
}
