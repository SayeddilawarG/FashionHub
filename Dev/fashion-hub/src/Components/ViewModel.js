import React from 'react';
import "./ViewModel.css";

function ViewModel(props) {
  return (
    <>
    <div className='model-wrapper'></div>
    <div className='model-container'>
        <h2>Product Data</h2>
        <p>Kindly find the Details of Product below</p>
        <p>
            Name :{props.product.name}  <br/>
            Description :{props.product.description} <br/>
            Prize :{props.product.prize} <br/>
        </p> 
        <button className='close-btn' onClick={props.closeModel}>Close</button>
    </div>
    </>
  )
}
export default ViewModel
