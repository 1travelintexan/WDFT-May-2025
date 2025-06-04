import axios from "axios";
import { useEffect, useState } from "react";

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    async function getCart() {
      try {
        const arrayOfProducts = [];
        const res = await axios("https://fakestoreapi.com/carts/5");
        for (let i = 0; i < res.data.products.length; i++) {
          const currentProductId = res.data.products[i].productId;
          const currentProductQuantity = res.data.products[i].quantity;
          const productRes = await axios(
            `https://fakestoreapi.com/products/${currentProductId}`
          );
          productRes.data.quantity = currentProductQuantity;
          //   console.log(productRes.data);
          arrayOfProducts.push(productRes.data);
        }

        setCartProducts(arrayOfProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);
  return (
    <div>
      <h1>Cart Page</h1>
      {cartProducts.map((oneProduct) => {
        return (
          <div key={oneProduct.id} className="cart-card">
            <img src={oneProduct.image} alt="picture" />
            <h2>Title: {oneProduct.title}</h2>
            <h2>Price: {oneProduct.price}</h2>
            <h2>Quantity: {oneProduct.quantity}</h2>
          </div>
        );
      })}
      <h1>
        Total: $
        {cartProducts.reduce((acc, curr) => {
          return acc + curr.price * curr.quantity;
        }, 0)}
      </h1>
    </div>
  );
};
