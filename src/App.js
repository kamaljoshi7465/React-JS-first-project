import "./App.css";
import NavBar from "./Components/NavBar.js";
import ProductList from "./Components/ProductList.js";
import React, { useState } from "react";

function App() {
  const products = [
    {
      name: "Vivo",
      price: 2200,
      quantity: 0
    },
    {
      name: "iPhone",
      price: 2000,
      quantity: 0
    },
    {
      name: "Realme",
      price: 2300,
      quantity: 0
    },
    {
      name: "Lava",
      price: 1400,
      quantity: 0
    },
    {
      name: "Oppo",
      price: 1800,
      quantity: 0
    },
    {
      name: "Redme",
      price: 2000,
      quantity: 0
    },
  ]

  let [productList, setProductList] = useState(products)

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList)
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity = 0
    setProductList(newProductList)
  }
  return (
    <>
      <NavBar />
      <main class="container mt-5">
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </main>
    </>
  );
}

export default App;