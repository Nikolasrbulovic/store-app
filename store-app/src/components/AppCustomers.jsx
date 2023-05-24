import Button from "react-bootstrap/Button";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
const AppCustomers = () => {
  const [appCustomers, setAppCustomers] = useState([
    "Marko",
    "Nikola",
    "Milos",
    "Milan",
  ]);
  const deleteCustomerHandler = (name) => {
    setAppCustomers((prev) => prev.filter((customer) => customer !== name));
  };
  return (
    <ListGroup>
      {appCustomers.map((customer, key) => {
        return (
          <ListGroup.Item key={key}>
            {customer}
            <Button onClick={() => deleteCustomerHandler(customer)}>
              Delete Customer
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
export default AppCustomers;
