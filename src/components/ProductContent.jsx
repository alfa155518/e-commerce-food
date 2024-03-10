import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PopularProductsContext } from "../context/ContextProducts";
import CalcRatingProduct from "./CalcRatingProduct";

function ProductContent({ product }) {
  const { getProductInfo } = useContext(PopularProductsContext);

  // Products Content Component
  return (
    <div className="product p-relative">
      <ul className="actions">
        <li>
          <Link to={"favorite"}>
            <FaHeart />
          </Link>
        </li>
        <li onClick={() => getProductInfo(product)}>
          <Link to={"product-info"}>
            <FaEye />
          </Link>
        </li>
        <li>
          <Link to={"shopping"}>
            <FaCartShopping />
          </Link>
        </li>
      </ul>
      <span className="discount p-absolute">discount:{product.discount}%</span>
      <img src={product.catImg} alt="product-img" loading="lazy" />
      <div className="info">
        <h3>{product.productName}</h3>
        <CalcRatingProduct product={product} />
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
