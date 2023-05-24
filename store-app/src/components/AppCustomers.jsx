import Button from "react-bootstrap/Button";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AddCustomer from "./AddCustomer";
import { Link } from "react-router-dom";
const AppCustomers = () => {
  const [appCustomers, setAppCustomers] = useState([
    { name: "nikola" },
    { name: "nikola" },
    { name: "nikola" },
    { name: "nikola" },
  ]);
  const addCustomer = (customer) => {
    setAppCustomers((prevState) => [...prevState, { name: customer }]);
  };
  const deleteCustomerHandler = (key) => {
    setAppCustomers((prev) => prev.filter((customer, id) => id !== key));
  };
  return (
    <div>
      <ListGroup>
        {appCustomers.map((customer, key) => {
          return (
            <ListGroup.Item key={key}>
              {customer.name}
              <Button onClick={() => deleteCustomerHandler(key)}>
                Delete Customer
              </Button>
              <Link to={`${key}`}>
                <Button>Latest Purchases</Button>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <AddCustomer addCustomer={addCustomer}></AddCustomer>
    </div>
  );
};
export default AppCustomers;
