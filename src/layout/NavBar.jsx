import "../sass/layout/navbar.css";
import logo from "../images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
function NavBar() {
  function showOrHideMenu() {
    const allLinksMenu =
      document.documentElement.querySelector(".second-nav .links");
    allLinksMenu.classList.toggle("active-menu");
  }

  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form>
        <input type="text" placeholder="Search About Products" />
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
          <Link to="/">
            <span>
              <IoCartOutline />
            </span>
            My Wishlist
            <strong className="number">0</strong>
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
