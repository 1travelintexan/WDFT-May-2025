import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ProductsListPage } from "./pages/ProductsListPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AddProductPage } from "./pages/AddProductPage";
import { UpdateProductPage } from "./pages/UpdateProductPage";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setAllProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  //functions
  function handleDelete(productId) {
    axios
      .delete(`https://dummyjson.com/products/${productId}`)
      .then(() => {
        const filteredProducts = allProducts.filter((oneProduct) => {
          if (oneProduct.id !== productId) {
            return true;
          }
        });

        setAllProducts(filteredProducts);
        nav("/products-list");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Navbar />
      <h1>CRUD day!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products-list"
          element={<ProductsListPage allProducts={allProducts} />}
        />
        <Route
          path="/product-detail/:productId"
          element={<ProductDetailPage handleDelete={handleDelete} />}
        />
        <Route path="/create-product" element={<AddProductPage />} />
        <Route
          path="/edit-product/:productId"
          element={<UpdateProductPage />}
        />
      </Routes>
    </>
  );
}

export default App;
