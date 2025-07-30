// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import "../css/productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/productdisplay/${product._id}`}>
        <div className="product-image-container">
          <img 
            src={product.defaultImage} 
            alt={product.name} 
            className="product-image"
          />
          {product.category === "sale" && (
            <div className="sale-badge">SALE</div>
          )}
          {product.category === "new-arrivals" && (
            <div className="new-badge">NEW</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">
            {product.category === "sale" ? (
              <>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="sale-price">₹{product.price}</span>
              </>
            ) : (
              `₹${product.price}`
            )}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;