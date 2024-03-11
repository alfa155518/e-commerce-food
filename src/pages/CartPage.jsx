import { useContext } from "react";
import { CartContainerContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";
import "../sass/pages/cart-page.css";
import te from "../images/slide-1.png";

function CartPage() {
  let { cartData } = useContext(CartContainerContext);

  console.log(cartData);

  return (
    <>
      {/* ============== LayOut ========== */}
      <MainHeader />
      <NavBar />
      <SecondNav />
      {/* ======== section img ========= */}
      <div className="section-img">Product In Cart Page</div>
      <div className="wrapper-cart">
        <table>
          <thead>
            <tr>
              <th>product</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>
                <span className="remove-product">remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartData.length > 0 ? (
              cartData.map((product, i) => (
                <tr key={i}>
                  <td>
                    <img src={product.catImg} alt="re" />
                  </td>
                  <td>
                    <h5 className="name">{product.productName}</h5>
                  </td>
                  <td>
                    <h6 className="price">{product.price}</h6>
                  </td>
                  <td className="actions">
                    <div className="plus">
                      <FaPlus />
                    </div>
                    <span className="quantity">{product.quantity}</span>
                    <div className="minus ">
                      <FaMinus />
                    </div>
                  </td>
                  <td className="trash">
                    <FaTrash />
                  </td>
                </tr>
              ))
            ) : (
              <h3>Cart Empty</h3>
            )}
          </tbody>
        </table>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default CartPage;
