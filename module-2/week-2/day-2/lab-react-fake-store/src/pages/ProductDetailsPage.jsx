import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    //************with fetch*********
    // fetch(`https://fakestoreapi.com/products/${productId}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setProduct(data);
    //   })
    //   .catch((err) => console.log(err));

    //**************With axios .then and .catch *******/
    // axios(`https://fakestoreapi.com/products/${productId}`)
    //   .then((res) => {
    //     console.log(res);
    //     setProduct(res.data);
    //   })
    //   .catch((err) => console.log(err));

    //with async and await
    async function getOneProduct() {
      try {
        const { data } = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);
  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} style={{ width: "60%" }} />
      <h2>{product.title}</h2>
      <h3>Price: ${product.price}</h3>
    </div>
  );
}

export default ProductDetailsPage;
