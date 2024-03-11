import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const CartContainerContext = createContext();

function CartContext({ children }) {
  const [cartData, setCartData] = useState([]);

  console.log(cartData);

  // console.log(re);

  function addToCart(product) {
    let exit = cartData.find((pr) => {
      return pr.id === product.id;
    });
    console.log(exit);
    if (exit) {
      toast.error("Product Already Exit In Cart");
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      console.log(cartData);
      toast.success("Product Added To Cart");
    }
  }

  return (
    <CartContainerContext.Provider
      value={{
        cartData,
        addToCart,
      }}>
      {children}
      <Toaster />
    </CartContainerContext.Provider>
  );
}

export default CartContext;
