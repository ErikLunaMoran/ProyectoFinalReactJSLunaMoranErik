import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

/* const menu = [
  { text: "Home", link: "/#home" },
  { text: "Features", link: "/#features" },
  { text: "Pricing", link: "/#pricing" },
]; */

export const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Mi Castillo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Casita</Nav.Link>
        <Nav.Link href="#features">Características</Nav.Link>
        <Nav.Link href="#pricing">Precios</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
