import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
 
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product && product.name}</h5>
        <p className="card-text">{product.price}</p>
        <Link  to={`/list/${product.id}`}  className="btn btn-primary">
          see product
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
