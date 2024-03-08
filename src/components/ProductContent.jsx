import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function ProductContent({ product }) {
  // Products Content Component
  return (
    <div className="product p-relative">
      <ul className="actions">
        <li>
          <FaHeart />
        </li>
        <li>
          <FaEye />
        </li>
        <li>
          <FaCartShopping />
        </li>
      </ul>
      <span className="discount p-absolute">discount:{product.discount}%</span>
      <img src={product.catImg} alt="product-img" loading="lazy" />
      <div className="info">
        <h3>{product.productName}</h3>
        {product.rating === 5 && (
          <ul className="rating">
            <li className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </li>
            <li>({product.rating})</li>
          </ul>
        )}
        {product.rating === 4.5 && (
          <ul className="rating">
            <li className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalf className="half-star" />
            </li>
            <li>({product.rating})</li>
          </ul>
        )}
        {product.rating === 4 && (
          <ul className="rating">
            <li className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalf className="half-star" />
            </li>
            <li>({product.rating})</li>
          </ul>
        )}
        {product.rating === 3.5 && (
          <ul className="rating">
            <li className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalf className="half-star" />
            </li>
            <li>({product.rating})</li>
          </ul>
        )}
        {product.rating === 3 && (
          <ul className="rating">
            <li className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalf className="half-star" />
            </li>
            <li>({product.rating})</li>
          </ul>
        )}
        {product.rating === 0 && (
          <ul className="rating">
            <li className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStarHalf className="half-star" />
            </li>
            <li>({product.rating})</li>
          </ul>
        )}
        <h4 className="brand">By:{product.brand}</h4>
      </div>
      <div className="prices">
        <span className="old-price">${product.oldPrice}</span>
        <span className="new-price">${product.price}</span>
        <span className="add-to-cart">
          <IoCartOutline /> add
        </span>
      </div>
    </div>
  );
}

export default ProductContent;
