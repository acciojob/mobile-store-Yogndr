import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = ({products}) => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate(); // for back button

  // Find the product with matching id
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }
   return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>

      {/* Back button with class .btn for Cypress */}
      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default ProductDetails