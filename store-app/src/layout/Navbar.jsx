import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbarmy = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/customers">Customers</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navbarmy;
