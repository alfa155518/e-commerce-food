import "../sass/layout/navbar.css";
import logo from "../images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form>
        <span>
          All Categories <MdKeyboardArrowDown />
        </span>
        <input type="text" />
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
    </nav>
  );
}

export default NavBar;
