import axios from "axios";
import React from "react";

const HomeScreen = () => {
  let getAllProducts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/products");
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log("error in fetching products", error);
    }
  };

  getAllProducts();

  return (
    <div>
      <h1>Home screen</h1>
    </div>
  );
};

export default HomeScreen;