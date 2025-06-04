import axios from "axios";
import { useState } from "react";

export const AddProductPage = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");

  function handleAddProduct(e) {
    e.preventDefault();
    const newProduct = {
      title,
      thumbnail,
      description,
    };
    //sending the data with axios
    axios
      .post("https://dummyjson.com/products/add", newProduct)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTitle("");
        setThumbnail("");
        setDescription("");
      });

    //**************** POST with fetch *******/
    // fetch("https://dummyjson.com/products/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newProduct),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("with fetch", data);
    //   })
    //   .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Add Product Page</h1>
      <form onSubmit={handleAddProduct}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
};
