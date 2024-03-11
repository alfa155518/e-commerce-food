import { NavLink } from "react-router-dom";
import "../sass/layout/second-nav.css";
import { FaHeadset } from "react-icons/fa";

function SecondNav() {
  return (
    <nav className="second-nav">
      <div className="btn-categories">Browse All Categories</div>
      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart-page">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact-us</NavLink>
        </li>
      </ul>
      <div className="support">
        <h5>
          <FaHeadset />
        </h5>
        <div>
          <p>1900 - 888</p>
          <span>24/7 support center</span>
        </div>
      </div>
    </nav>
  );
}

export default SecondNav;
