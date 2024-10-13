import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

import Form from 'react-bootstrap/Form';

import "./css/MenuCards.css"


let MenuCards = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
<>



<div className='bg bg-light bg-gradient'>

<h3 className='menu-description bg bg-danger bg-gradient'>Box Meals</h3>
<div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/chicken-lunchbox.jpeg")} />
      <Card.Body>
        <Card.Title >Chicken Lunchbox</Card.Title>
        <Card.Text>
            Ksh850.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow}>Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" src={require("./images/wings-lunchbox.jpeg")} />
      <Card.Body>
        <Card.Title>Wings Lunchbox</Card.Title>
        <Card.Text>
        Ksh850.00
        </Card.Text>
        <Button variant="outline-danger"  onClick={handleShow} className='card-button'>Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" src={require("./images/crunch-burger-lunchbox.jpeg")} />
      <Card.Body>
        <Card.Title>Crunch Burger Lunchbox</Card.Title>
        <Card.Text>
        Ksh850.00
        </Card.Text>
        <Button variant="outline-danger"  onClick={handleShow} className='card-button'>Order Now</Button>
      </Card.Body>
    </Card>
    </div>


    <h3 className='menu-description bg bg-danger bg-gradient'>Chicken Pieces</h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/kfc-bucket.jpeg")} />
      <Card.Body>
        <Card.Title >21PC Bucket</Card.Title>
        <Card.Text>
            Ksh3800.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" src={require("./images/kfc-bucket.jpeg")} />
      <Card.Body>
        <Card.Title>18PC Bucket</Card.Title>
        <Card.Text>
        Ksh3250.00
        </Card.Text>
        <Button variant="outline-danger"  onClick={handleShow} className='card-button'>Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" src={require("./images/kfc-bucket.jpeg")} />
      <Card.Body>
        <Card.Title>15PC Bucket</Card.Title>
        <Card.Text>
        Ksh2900.00
        </Card.Text>
        <Button variant="outline-danger"  onClick={handleShow} className='card-button'>Order Now</Button>
      </Card.Body>
    </Card>
    </div>
<div className='d-flex justify-content-center'>
    <Card className='card-main'>
      <Card.Img variant="top" src={require("./images/9-pc-bucket.jpeg")} />
      <Card.Body>
        <Card.Title>9PC Bucket</Card.Title>
        <Card.Text>
        Ksh1900.00
        </Card.Text>
        <Button variant="outline-danger"  onClick={handleShow} className='card-button'>Order Now</Button>
      </Card.Body>
    </Card>
    </div>


    <Offcanvas show={show} onHide={handleClose} className="bg bg-danger">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-header">
            <img src={require("./images/kfc-delivery-logo.png")} alt="kfc-delivery-logo" className="kfc-delivery-img" /> 

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Full Names" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="number" placeholder="Enter your Residential Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter your Phone Number" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" min={1} />
      </Form.Group>

      <Form.Text className="text-light">Please Ensure that the information given is acurrate in order to ensure  smooth delivery of your order.
      </Form.Text>


      <Form.Group className="mb-3 d-flex justify-content-center p-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me if complete!" className='fw-bold text-light' />
      </Form.Group>

      
<div className="text-center">
      <Button variant="dark" type="submit">
        Continue to Checkout
      </Button>
      </div>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>

<div className='proceed-menu'>
      <Card>
      <Card.Body>
        <Card.Text>
         Proceed to the Our Menu page to view more products.
        </Card.Text>
        <Button variant="outline-danger" className='card-button'>Our Menu</Button>
      </Card.Body>
    </Card>
    </div>

    </div>
</>
    );
}

export default MenuCards;