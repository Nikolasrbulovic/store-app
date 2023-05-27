import "./App.css";
import { useState } from "react";
import Navbarmy from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";
import Customer from "./components/Customer";
import BuyProduct from "./components/BuyProduct";

function App() {
  const [appCustomers, setAppCustomers] = useState([
    { name: "nikola", productList: [{ name: "product 1", quantity: 1 }] },
    { name: "marko", productList: [{ name: "product 1", quantity: 1 }] },
    { name: "filip", productList: [{ name: "product 1", quantity: 1 }] },
    { name: "marija", productList: [{ name: "product 1", quantity: 1 }] },
  ]);
  const [appCustomersCopy, setAppCustomersCopy] = useState(appCustomers);
  const addCustomer = (customer) => {
    setAppCustomers((prevState) => [...prevState, { name: customer }]);
  };
  const deleteCustomerHandler = (key) => {
    setAppCustomers((prev) => prev.filter((customer, id) => id !== key));
  };
  const buyProduct = (customerIndex, productName, productId) => {
    const customer = appCustomers[customerIndex];

    const product = customer.productList.map((element) => {
      if (productName == element.name) {
        return { name: productName, quantity: element.quantity++ };
      } else {
        return { name: productName, quantity: 1 };
      }
    });
    const filterProducts = customer.productList.filter(
      (element) => element.name !== productName
    );

    const users = appCustomersCopy.map((element, index) => {
      if (index == customerIndex) {
        return {
          name: element.name,
          productList: [...filterProducts, ...product],
        };
      } else {
        return element;
      }
    });

    setAppCustomers(users);
    console.log(appCustomers);
  };

  const [products, setProducts] = useState([
    { name: "product 1", quantity: 0 },
    { name: "product 2", quantity: 0 },
    { name: "product 3", quantity: 0 },
    { name: "product 4", quantity: 0 },
  ]);

  const [productsCopy, setProductsCopy] = useState(products);

  const searchProducts = (keyPress) => {
    setProducts(
      productsCopy.filter((product) =>
        product.name.includes(keyPress.target.value)
      )
    );
  };
  const productIncrementHandler = (key) => {
    setProducts((products) =>
      products.map((element, index) => {
        if (index == key) {
          return { name: element.name, quantity: element.quantity++ };
        } else {
          return element;
        }
      })
    );
  };
  const productDecrementHandler = (key) => {
    setProducts((products) =>
      products.map((element, index) => {
        if (index == key) {
          return { name: element.name, quantity: element.quantity-- };
        } else {
          return element;
        }
      })
    );
  };
  return (
    <div>
      <Navbarmy></Navbarmy>
      <Routes>
        <Route
          path="customers/:id"
          element={<Customer appCustomers={appCustomers} />}
        ></Route>
        <Route
          path="products/:id"
          element={
            <BuyProduct
              productDecrementHandler={productDecrementHandler}
              appCustomers={appCustomers}
              products={products}
              buyProduct={buyProduct}
            />
          }
        ></Route>
        <Route
          path="customers"
          element={
            <AppCustomers
              appCustomers={appCustomers}
              addCustomer={addCustomer}
              deleteCustomerHandler={deleteCustomerHandler}
            />
          }
        ></Route>
        <Route
          path="products"
          element={
            <AppProducts
              products={products}
              searchProducts={searchProducts}
              productIncrementHandler={productIncrementHandler}
              productDecrementHandler={productDecrementHandler}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
