import "./App.css";

import Navbarmy from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";

function App() {
  return (
    <div>
      <Navbarmy></Navbarmy>
      <Routes>
        <Route path="customers" element={<AppCustomers />}></Route>
        <Route path="products" element={<AppProducts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
