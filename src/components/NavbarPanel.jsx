import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarPanel() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar bg="danger" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Redux Store
        </Navbar.Brand>
        <Nav.Link as={Link} to="/">
          <b className="text-light">Products</b>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="my-2 my-lg-0 text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Cart">
              <b className="text-light">
                <h4>Cart ({cartProducts.length})</h4>
              </b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPanel;
