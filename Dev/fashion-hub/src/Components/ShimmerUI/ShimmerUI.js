import React from "react";
import "./ShimmerUI.css";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

function ShimmerUI() {
  return (
    <div className="container-shimmer">
      <div className="add-table-btn">
        <Link to="/AddProduct" style={{ textDecoration: "none" }}>
          <button className="add-btn-shimmer">
            {" "}
            <IoAdd /> Add Product
          </button>
        </Link>
      </div>
      <div className="table-container-shimmer">
        <table className="center-shimmer">
          <thead className="table-head-shimmer">
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Description</th>
              <th>Prize</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShimmerUI;
