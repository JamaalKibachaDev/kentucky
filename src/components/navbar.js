
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./css/NavBar.css"

const NavBar = () => {
    return(
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src= {require("./images/kfc-logo1.png")} alt="kfc-logo" className="kfc-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-4 fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Our Menu</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Offers</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.2">
                Frequently Asked Questions
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
           
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;