import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpeg'
import Button from 'react-bootstrap/Button';

export default function MainNav() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt='logo' width="100" height="50"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Beauty</Nav.Link>
            <Nav.Link href="#features">Fragnances</Nav.Link>
            <Nav.Link href="#pricing">Laptops</Nav.Link>
            <Nav.Link href="#pricing">Men's Shirts</Nav.Link>
          </Nav><alert>
          <Button variant="primary">Cart</Button></alert>
        </Container>
      </Navbar>
    </>
  );
}

