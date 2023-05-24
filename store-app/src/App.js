import "./App.css";
import { useState } from "react";
import Navbarmy from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";

function App() {
  const [products, setProducts] = useState([
    { name: "product 1" },
    { name: "product 2" },
    { name: "product 3" },
    { name: "product 4" },
  ]);

  const [productsCopy, setProductsCopy] = useState(products);

  const searchProducts = (keyPress) => {
    setProducts(
      productsCopy.filter((product) =>
        product.name.includes(keyPress.target.value)
      )
    );
  };
  return (
    <div>
      <Navbarmy></Navbarmy>
      <Routes>
        <Route path="customers" element={<AppCustomers />}></Route>
        <Route
          path="products"
          element={
            <AppProducts products={products} searchProducts={searchProducts} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
