import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

function AddProduct() {
  const { id } = useParams();
  console.log(id);
  const [showAddbtn,setShowAddbtn] = useState(true);
  const [isEdit,setIsEdit] = useState(false);
  const [checkName,setCheckName] = useState();
  const [checkDescription,setCheckDescription] = useState();
  const [checkPrize,setCheckPrize] = useState();
  const [productData,setProductData] = useState({
    name : "",
    description : "",
    prize : ""
  });
  useEffect(()=>{
    getProductById(id);
  },[]);

  const getProductById=async (id)=>{
    const data = await fetch("http://localhost:5017/api/Product/GetProductByIdView/"+id);
    const json = await data.json();
    console.log("This is Get Product",json);
    setProductData(json);
  }

  const showButton=()=>{
    if(!(checkName =='' && checkDescription =='' && checkPrize =='')){
      setShowAddbtn(false);
    }
  }
  const handleData=(e)=>{
    const newData = {...productData}
    newData[e.target.id] = e.target.value;
    setProductData(newData);
    console.log(newData);
  }
  const postData=async (e)=>{ 
    e.preventDefault();
    const payload = {
      name : productData.name,
      description : productData.description,
      prize : productData.prize
    }

    fetch('http://localhost:5017/api/Product/PostProduct',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(payload)
      }
    ).then(response=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="parent-container">
      <div className="form-container">
        <form>
          <label htmlFor="productname">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={(e)=>handleData(e)}
          />
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            name="description"
            placeholder="Product Description"
            value={productData.description}
            onChange={(e)=>handleData(e)}
          />
          <label htmlFor="prize">Prize </label>
          <input
            type="number"
            id="prize"
            name="prize"
            placeholder="Product Prize"
            value={productData.prize}
            onChange={(e)=>handleData(e)}
          />
          <button onClick={postData} style={{backgroundColor:"Blue"}}>Add</button> <Link to="/"><button style={{border:"1px solid black",color:"black"}}>Back</button></Link>
        </form> 
      </div>
    </div>
  );
}

export default AddProduct;