import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const params = useParams();
  const navigate=useNavigate()
  const product = products.find((elt) => elt.id === parseInt(params.id));
  const handleClick=()=>{
      navigate('/home')
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price} $</p>
        <button className="btn btn-primary">By product</button>
        <button className="btn btn-success" onClick={handleClick}>back to home</button>
      </div>
    </div>
  );
};

export default ProductDetails;
