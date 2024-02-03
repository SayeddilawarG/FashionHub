import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import "./DeleteModel.css";
import "./ViewModel.css";

function DeleteModel(props) {
    useEffect(()=>{
        props.getProductList();
    },[]);
    const handleDeleteProduct=()=>{
    props.closeDeleteModel();
    fetch('http://localhost:5017/api/Product/GetProductById/'+props.product.id,
      {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        } 
      }
    ).then(response=>{
      console.log(response);
      if(response.ok){
        props.getProductList();
        navigator('/');
      }
    }).catch(error=>{
      console.log(error);
    })
    }
    return (
        <>
        <div className='model-wrapper-delete'></div>
        <div className='model-container-delete'>
            <h3>Are you sure you want to delete this product ?</h3>
            <div className='line'></div>
            <table className='delete-table'>
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
            <button className='delete-btn' onClick={handleDeleteProduct}>Yes</button>{" "}
            <button className='close-btn' onClick={props.closeDeleteModel}>No</button>
        </div>
        </>
      )
}
export default DeleteModel
