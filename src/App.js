import "./App.css";
import NavBar from "./Components/NavBar.js";
import ProductList from "./Components/ProductList.js";

function App() {
  const productList = [
    {
      name: "Vivo",
      price: 2200,
      quantity: 2
    },
    {
      name: "iPhone",
      price: 2000,
      quantity: 2
    },
    {
      name: "Realme",
      price: 2300,
      quantity: 2
    },
    {
      name: "Lava",
      price: 1400,
      quantity: 2
    },
    {
      name: "Oppo",
      price: 1800,
      quantity: 2
    },
    {
      name: "Redme",
      price: 2000,
      quantity: 2
    },
  ]
  return (
    <>
      <NavBar />
      <main class="container mt-5">
        <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;
