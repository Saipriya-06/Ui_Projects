import Nav from 'react-bootstrap/Nav';

export  default function SecNav() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Essence</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Glamour Beauty</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Velvet Touch</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Chic Cosmetics</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Nail Couture</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

