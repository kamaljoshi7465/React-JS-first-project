import "./App.css";
import NavBar from "./Components/NavBar.js";
import ProductList from "./Components/ProductList.js";
import Footer from "./Components/Footer.js";
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

  let [productList, setProductList] = useState(products)  //set product list quntity
  let [totalAmount, setTotalAmount] = useState(0)  //set total amount

  const incrementQuantity = (index) => {
    // set total price on quantity increment
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList)

    // set total amount on quantity increment
    let newTotalAmount = totalAmount
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount)
  }

  const decrementQuantity = (index) => {
    // set total price on quantity decrement
    let newProductList = [...productList]
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity = 0
    setProductList(newProductList)

    // set total amount on quantity decrement
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].price
    setTotalAmount(newTotalAmount)
  }

  const resetValue = () => {
    let newProductList = [...productList]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setProductList(newProductList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);

    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    setTotalAmount(newTotalAmount);
  }

  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <ProductList productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem} />
      </main>
      <Footer totalAmount={totalAmount} resetValue={resetValue} />
    </>
  );
}

export default App;