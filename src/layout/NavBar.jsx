import logo from "../images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContainerContext } from "../context/CartContext";
import "../sass/layout/navbar.css";
function NavBar() {
  const { productNumberInCart } = useContext(CartContainerContext);

  let productNumber = localStorage.getItem("productNumber")
    ? JSON.parse(localStorage.getItem("productNumber"))
    : 0;

  // Show Or Hide Menu In Small Screens
  function showOrHideMenu() {
    const allLinksMenu =
      document.documentElement.querySelector(".second-nav .links");
    allLinksMenu.classList.toggle("active-menu");
  }

  return (
    <nav>
      <div className="logo">
        <Link to={"/"} aria-label="home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search About Products"
          autoComplete="search"
        />
        <button>
          <IoSearchOutline />
        </button>
      </form>
      <ul className="actions">
        <li>
          <Link to="/">
            <span>
              <CiHeart />
            </span>
            Favorite
            <strong className="number">0</strong>
          </Link>
        </li>
        <li>
          <Link to="/cart-page">
            <span>
              <IoCartOutline />
            </span>
            My Wishlist
            <strong className="number">{productNumber}</strong>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <FaRegUser />
            </span>
            My Account
          </Link>
        </li>
      </ul>
      <div className="bars" onClick={showOrHideMenu}>
        <FaBarsStaggered />
      </div>
    </nav>
  );
}

export default NavBar;
