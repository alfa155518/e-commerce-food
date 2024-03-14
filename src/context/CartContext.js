import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const CartContainerContext = createContext();

function CartContext({ children }) {
  let [cartData, setCartData] = useState([]);

  let [productNumberInCart, setProductNumberInCart] = useState(0);

  function addToCart(product) {
    let exit = cartData.find((productInCart) => {
      return productInCart.id === product.id;
    });

    if (exit) {
      toast.error("Product Already Exit In Cart");
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      setProductNumberInCart((number) => (number += 1));
      localStorage.setItem(
        "productNumber",
        JSON.stringify(
          productNumberInCart
            ? productNumberInCart + 1
            : (productNumberInCart += 1)
        )
      );

      toast.success("Product Added To Cart");
    }
  }

  return (
    <CartContainerContext.Provider
      value={{
        cartData,
        setCartData,
        addToCart,
        setProductNumberInCart,
        productNumberInCart,
      }}>
      {children}
      <Toaster />
    </CartContainerContext.Provider>
  );
}

export default CartContext;
