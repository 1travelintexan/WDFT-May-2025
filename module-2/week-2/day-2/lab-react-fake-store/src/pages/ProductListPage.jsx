import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    //using fetch to get array of products
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //***********with axios ************/
    //.then and .catch
    // axios("https://fakestoreapi.com/products")
    //   .then(({ data }) => {
    //     console.log(data);
    //     setProducts(data);
    //   })
    //   .catch((err) => console.log(err));

    //******************* */
    //async and await
    async function getAllProducts() {
      try {
        const res = await axios("https://fakestoreapi.com/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <h3>{product.category}</h3>
              <h3>${product.price}</h3>
              <h3>{product.description}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
