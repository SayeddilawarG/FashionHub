import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline, IoTrashOutline, IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import ViewModel from "../ViewProduct/ViewModel";
import DeleteModel from "../DeleteProduct/DeleteModel";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductList() {
  const [showModel, setShowModel] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTaost, setShowTaost] = useState(false);
  const [viewProduct, setViewProduct] = useState({
    name: "",
    description: "",
    prize: "",
  });
  useEffect(() => {
    GetProductList();
  }, []);

  const GetProductList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5017/api/Product/GetProducts"
      );
      if (response.ok) {
        const data = await response.json();
        setProductList(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setShowTaost(true);
      toast.error("Internal Server Error !");
    }
  };
  const viewProducthandle = (id) => {
    setShowModel(true);
    const product = productList.find((Id) => Id.id == id);
    setViewProduct(product);
  };

  const deleteProducthandle = (id) => {
    setShowDeleteModel(true);
    const product = productList.find((Id) => Id.id == id);
    setViewProduct(product);
  };
  const closeModel = () => setShowModel(false);
  const closeDeleteModel = () => setShowDeleteModel(false);

  return (
    <div className="container">
      {!isLoading && (
        <div className="add-table-btn">
          <Link to="/AddProduct" style={{ textDecoration: "none" }}>
            <button className="add-btn">
              {" "}
              <IoAdd /> Add Product
            </button>
          </Link>
        </div>
      )}
      {!isLoading ? (
        <div
          className="table-container"
          style={
            productList.length == 0
              ? { overflow: "auto" }
              : { overflowy: "scroll" }
          }
        >
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
              {productList?.map((product, key) => (
                <tr key={key}>
                  <td data-title="Sr.No">{key + 1}</td>
                  <td data-title="Name">{product.name}</td>
                  <td data-title="Description">{product.description}</td>
                  <td data-title="Prize">Rs.{product.prize}</td>
                  <td data-title="Actions">
                    <a>
                      <Link
                        to={`/AddProduct/${product.id}`}
                        style={{ color: "#7db500" }}
                      >
                        <FaRegEdit />
                      </Link>
                    </a>{" "}
                    <a>
                      <IoEyeOutline
                        onClick={() => viewProducthandle(product.id)}
                        style={{ color: "#7d8bff" }}
                      />
                    </a>{" "}
                    <a>
                      <IoTrashOutline
                        onClick={() => deleteProducthandle(product.id)}
                        style={{ color: "red" }}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {productList.length == 0 && (
            <h3 style={{ textAlign: "center", marginTop: "30px" }}>
              No data found !
            </h3>
          )}
        </div>
      ) : (
        ShimmerUI
      )}
      {showModel && <ViewModel closeModel={closeModel} product={viewProduct} />}
      {showDeleteModel && (
        <DeleteModel
          closeDeleteModel={closeDeleteModel}
          product={viewProduct}
          getProductList={GetProductList}
        />
      )}
      {isLoading && <ShimmerUI />}
      {showTaost && <ToastContainer />}
    </div>
  );
}
export default ProductList;
