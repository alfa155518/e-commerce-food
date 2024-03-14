import { useContext } from "react";
import { CartContainerContext } from "../context/CartContext";

function useDeleteProduct(cartData, setCartData) {
  const { productNumberInCart, setProductNumberInCart } =
    useContext(CartContainerContext);

  // localStorage.getItem("productNumber") ?

  function removeProduct(product) {
    let filteredProduct = cartData.filter((item) => {
      return item.id !== product.id;
    });
    setCartData(filteredProduct);
    setProductNumberInCart((number) => (number -= 1));
    localStorage.setItem(
      "productNumber",
      JSON.stringify(
        productNumberInCart ? productNumberInCart - 1 : productNumberInCart - 1
      )
    );
  }

  return [removeProduct];
}

export default useDeleteProduct;
