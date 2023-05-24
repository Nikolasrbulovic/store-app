import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddCustomer = ({ addCustomer }) => {
  const [name, setName] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    addCustomer(name);
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Name </Form.Label>
        <Form.Control
          id="name"
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Add Customer</Button>
    </Form>
  );
};

export default AddCustomer;
