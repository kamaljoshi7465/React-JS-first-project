import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <button className='btn col-2 btn-danger fw-bold' onClick={() => { props.resetValue() }}>Reset</button>
      <div className='col-8 bg-secondary text-center align-items-center d-flex justify-content-center fw-bold rounded'>
        Total Amount: {props.totalAmount}
      </div>
      <button className='btn col-2 btn-primary fw-bold'>Pay Now</button>
    </div>
  )
}
