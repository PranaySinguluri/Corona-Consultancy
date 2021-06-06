import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Online Corona Consultancy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/add-medicine">
            Add Medicine
          </Nav.Link>
          <Nav.Link as={Link} to="/list-medicine">
            List Medicine
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
