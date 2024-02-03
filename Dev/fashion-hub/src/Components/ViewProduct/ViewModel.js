import React from "react";
import "./ViewModel.css";

function ViewModel(props) {
  return (
    <>
      <div className="model-wrapper"></div>
      <div className="model-container">
        <h3 className="view-product-heading">Product Data</h3>
        <div className='line'></div>
        <p>Kindly find the Details of Product below</p>
        <table className="view-table">
            <tr>
                <td><b>Name</b>:</td>
                <td>{props.product.name}</td>
            </tr>
            <tr>
                <td><b>Description</b>:</td>
                <td>{props.product.description}</td>
            </tr>
            <tr>
                <td><b>Prize</b>:</td>
                <td>{props.product.prize}</td>
            </tr>
        </table>
        <button className="close-btn" onClick={props.closeModel}>
          Close
        </button>
      </div>
    </>
  );
}
export default ViewModel;
