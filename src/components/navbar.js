
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import "./css/NavBar.css"

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <>
      <nav className='navbar navbar-fixed-top'>

<Navbar expand="lg" className="bg-body-tertiary navbar fixed-top">
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
              <NavDropdown.Item href="#action/3.1" onClick={handleShow}>Our Offers</NavDropdown.Item>

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

    {/*Modal*/}
    <Modal  size="lg" centered
    show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Oops!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We currently don't have any offers running at the moment but make sure to keep an eye on upcoming deals and discounts on selected items in our website or your nearest KFC restaurant.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </nav>
    </>
    );
}

export default NavBar;