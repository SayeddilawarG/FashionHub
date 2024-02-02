import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline, IoTrashOutline,IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import ViewModel from "./ViewModel";

function ProductList() {
  const [showModel,setShowModel] = useState(false);
  const [productList,setProductList] = useState([]);
  const [viewProduct,setViewProduct] = useState({
    name:'',
    description:'',
    prize:''
  });
  useEffect(()=>{
    GetProductList();
  },[]);

  const GetProductList=async ()=>{
      const data = await fetch("http://localhost:5017/api/Product/GetProducts");
      const json = await data.json();
      setProductList(json);
  }
  const viewProducthandle=(id)=>{
    setShowModel(true);
    console.log(id);
    const product = productList.find(Id=>Id.id==id);
    console.log('this is product', product);
    setViewProduct(product)

    console.log("THis is viw Product",viewProduct);
  }

  const closeModel = ()=>setShowModel(false);

  return (
    <div className="container">
      <div className="add-table-btn">
         <Link to= "/AddProduct"><button className="add-btn"> <IoAdd /> Add Product</button></Link> 
        </div>
      <div className="table-container">
        
        <table className="center">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Description</th>
              <th>Prize</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {productList.map((product,key)=>
          (
            <tr key={key}>
            <td data-title="Sr.No">{key+1}</td>
            <td data-title="Name">{product.name}</td>
            <td data-title="Description">{product.description}</td>
            <td data-title="Prize">{product.prize}</td>
            <td data-title="Actions" className="Actions">
              <a>
              <Link to= {`/AddProduct/${product.id}`}><FaRegEdit /></Link>
              </a>{" "}
              <a>
                <IoEyeOutline onClick={()=>viewProducthandle(product.id)}/>
              </a>{" "}
              <a>
                <IoTrashOutline />
              </a>
            </td>
          </tr>
          ))}   
          </tbody>
        </table>
      </div>

      {showModel && <ViewModel closeModel = {closeModel} product = {viewProduct}/>}
    </div>
  );
}

export default ProductList;
