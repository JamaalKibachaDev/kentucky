import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

import Form from 'react-bootstrap/Form';

import "./css/MenuCards.css";



const MenuMain = () => {

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

<div className = "py-5"> <br /></div>
<h2 className='menu-header'>Our Menu</h2>

<div className="menu-main bg bg-light bg-gradient">

{/*Box Meals*/}
<h3 className='menu-description bg bg-danger bg-gradient'>Box Meals  <i class="fa-solid fa-box-open fa-sm"></i></h3>
<div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
<Card.Img variant="top" className='card-img' src= {require("./images/chicken-lunchbox.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >Chicken Lunchbox</Card.Title>
<Card.Text>
    Ksh850.00
</Card.Text>
<br/>
<Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
</Card.Body>
</Card>

<Card className='card-main'>
<Card.Img variant="top" src={require("./images/wings-lunchbox.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >Wings Lunchbox</Card.Title>
<Card.Text>
Ksh850.00
</Card.Text>
<br />
<Button variant="outline-danger"  onClick={handleShow} className='card-button'>Order Now</Button>
</Card.Body>
</Card>

<Card className='card-main'>
<Card.Img variant="top" src={require("./images/crunch-burger-lunchbox.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >Crunch Burger Lunchbox</Card.Title>
<Card.Text>
Ksh850.00
</Card.Text>
<Button variant="outline-danger"  onClick={handleShow} className="card-button">Order Now</Button>
</Card.Body>
</Card>
</div>


{/*Chicken Pieces*/}
<h3 className='menu-description bg bg-danger bg-gradient'>Chicken Pieces  <img src={require("./images/sanders-logo.png")} alt="sanders-logo" className="sanders-logo" /></h3>
<div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
<Card.Img variant="top" className='card-img' src= {require("./images/kfc-bucket.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >21PC Bucket</Card.Title>
<Card.Text>
    Ksh3800.00
</Card.Text>

<Button variant="outline-danger" className='card-button' onClick={handleShow}>Order Now</Button>
</Card.Body>
</Card>

<Card className='card-main'>
<Card.Img variant="top" src={require("./images/kfc-bucket.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >18PC Bucket</Card.Title>
<Card.Text>
Ksh3250.00
</Card.Text>
<Button variant="outline-danger"  onClick={handleShow}  className="card-button">Order Now</Button>
</Card.Body>
</Card>

<Card className='card-main'>
<Card.Img variant="top" src={require("./images/kfc-bucket.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >15PC Bucket</Card.Title>
<Card.Text>
Ksh2900.00
</Card.Text>
<Button variant="outline-danger"  onClick={handleShow} className="card-button">Order Now</Button>
</Card.Body>
</Card>
</div>
<div className='d-flex justify-content-center'>
<Card className='card-main'>
<Card.Img variant="top" src={require("./images/9-pc-bucket.jpeg")} />
<Card.Body>
<Card.Title className='fw-bolder' >9PC Bucket</Card.Title>
<Card.Text>
Ksh1900.00
</Card.Text>
<Button variant="outline-danger"  onClick={handleShow} className="card-button">Order Now</Button>
</Card.Body>
</Card>
</div>

         {/*Sharing*/}
 <h3 className='menu-description bg bg-danger bg-gradient'>Sharing <i class="fa-solid fa-utensils fa-sm"></i></h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/sticky-bawa-bucket.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Sticky Bawa Bucket</Card.Title>
        <Card.Text>
            Ksh2500.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/bawa-bucket.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Bawa Bucket</Card.Title>
        <Card.Text>
            Ksh2200.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/colonel-bucket-feast.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Colonel Bucket Feast</Card.Title>
        <Card.Text>
            Ksh2990.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/kentucky-bucket.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Kentucky Bucket</Card.Title>
        <Card.Text>
            Ksh2550.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
</div>


{/*Burgers*/}
<h3 className='menu-description bg bg-danger bg-gradient'>Burgers  <i class="fa-solid fa-burger fa-sm"></i></h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/crunch-burger-chips.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Crunch Burger w/ Chips</Card.Title>
        <Card.Text>
            Ksh550.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/crunch-burger-meal.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Crunch Burger Meal</Card.Title>
        <Card.Text>
            Ksh650.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/colonel-burger.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Colonel Burger</Card.Title>
        <Card.Text>
            Ksh650.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/colonel-burger-meal.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Colonel Burger Meal</Card.Title>
        <Card.Text>
            Ksh850.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/double-crunch.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Double Crunch Burger</Card.Title>
        <br/>
        <Card.Text>
            Ksh690.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/double-crunch-meal.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Double Crunch Burger Meal</Card.Title>
        
        <Card.Text>
            Ksh890.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>


<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/nyama-nyama.png")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Nyama Nyama Burger</Card.Title>
        <br/>
        <Card.Text>
            Ksh850.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/nyama-nyama-meal.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Nyama Nyama Burger Meal</Card.Title>

        <Card.Text>
            Ksh1100.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='my-3 d-flex justify-content-start'>
        <div className='px-5'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/legend-burger.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Legend Burger</Card.Title>
        <br/>
        <Card.Text>
            Ksh690.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/legend-burger-meal.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Legend Burger Meal</Card.Title>
        <br/>
        <Card.Text>
            Ksh890.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>


{/*Wings*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>Wings</h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/wingman.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Wingman</Card.Title>
        <Card.Text>
            Ksh700.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/wingman-sticky.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Wingman Sticky</Card.Title>
        <Card.Text>
            Ksh790.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/sticky-wings.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >4 Sticky Wings</Card.Title>
        <Card.Text>
            Ksh550.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/zinger-wings-hot.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >4 Hot Zinger Wings</Card.Title>
        <Card.Text>
            Ksh490.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    </div>


{/*Streetwise*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>Streetwise</h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-7.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 7</Card.Title>
        <Card.Text>
            Ksh1790.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/sticky-fiver.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Sticky Fiver</Card.Title>
        <Card.Text>
            Ksh1490.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-5.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 5</Card.Title>
        <Card.Text>
            Ksh1200.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-3.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 3</Card.Title>
        <Card.Text>
            Ksh690.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-2-crucnh.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 2 Crunch</Card.Title>
        <Card.Text>
            Ksh450.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-2.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 2 </Card.Title>
        <Card.Text>
            Ksh490.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-3-crunch.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 3 Crunch </Card.Title>
        <Card.Text>
            Ksh650.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-7-w-rice.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 7 w/ Rice </Card.Title>
        <Card.Text>
            Ksh490.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='my-3 d-flex justify-content-start'>
    <div className='px-5'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-5-w-2-rice.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder'>Streetwise 5 w/ Rice</Card.Title>
        <Card.Text>
            Ksh1200.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    </div>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/street-3-w-rice.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Streetwise 3 w/ Rice</Card.Title>
        <Card.Text>
            Ksh690.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>


{/*Wings*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>Wings</h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/wingman.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Wingman</Card.Title>
        <Card.Text>
            Ksh700.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/wingman-sticky.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Wingman Sticky</Card.Title>
        <Card.Text>
            Ksh790.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/sticky-wings.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >4 Sticky Wings</Card.Title>
        <Card.Text>
            Ksh550.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/zinger-wings-hot.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >4 Hot Zinger Wings</Card.Title>
        <Card.Text>
            Ksh490.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    </div>


{/*Snacks & Sides*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>Snacks & Sides <i class="fa-solid fa-cookie-bite fa-sm"></i></h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/regular-chips.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Regular Chips</Card.Title>
        <Card.Text>
            Ksh290.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/large-family-chips.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Large Chips</Card.Title>
        <Card.Text>
            Ksh390.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/large-family-chips.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Family Chips</Card.Title>
        <Card.Text>
            Ksh590.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/tortilla-chips.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder'>Tortilla Chips</Card.Title>
        <Card.Text>
            Ksh200.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    </div>

    <div className='my-3 d-flex justify-content-start'>
        <div className='px-5'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/coleslaw.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Large Coleslaw</Card.Title>
        <Card.Text>
            Ksh350.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/gravy.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Regular Gravy</Card.Title>
        <Card.Text>
            Ksh60.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    </div>


{/*Soft Drinks*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>Soft Drinks <i class="fa-solid fa-martini-glass-citrus fa-sm"></i></h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/2l-soda.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >2L Soda</Card.Title>
        <Card.Text>
            Ksh370.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/500-soda.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >500ML Soda</Card.Title>
        <Card.Text>
            Ksh150.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/400-apple.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Minute Maid 400ML Apple</Card.Title>
        <Card.Text>
            Ksh160.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/400-mango.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Minute Maid 400ML Mango</Card.Title>
        <Card.Text>
            Ksh160.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    </div>

    <div className='my-3 d-flex justify-content-center'>
    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/500-aqua.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >500ML Dasani Water</Card.Title>
        <Card.Text>
            Ksh130.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>


{/*Krushers*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>
        <img src={require("./images/krusher-logo.png")} alt="krusher-logo" className="krusher-logo" />
    </h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/oreo-k.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Oreo Krusher</Card.Title>
        <Card.Text>
            Ksh350.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>


    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/mango-k.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Mango Krusher</Card.Title>
        <Card.Text>
            Ksh350.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/strawberry-k.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Strawberry Krusher</Card.Title>
        <Card.Text>
            Ksh350.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>


{/*Desserts*/}
    <h3 className='menu-description bg bg-danger bg-gradient'>Desserts <i class="fa-solid fa-ice-cream fa-sm"></i></h3>
    <div className='my-3 d-flex justify-content-evenly'>
<Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/cc-250-ice-cream.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Cookies & Cream Ice Cream 250ML</Card.Title>
        <Card.Text>
            Ksh370.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/caramel-250.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Salted Caramel Ice Cream</Card.Title>
        <Card.Text>
            Ksh150.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/passion-lolly.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Passion Ice Lolly</Card.Title>

        <br />
        <Card.Text>
            Ksh60.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>

    <Card className='card-main'>
      <Card.Img variant="top" className='card-img' src= {require("./images/pinacolada-lolly.jpeg")} />
      <Card.Body>
        <Card.Title className='fw-bolder' >Pinacolada Ice Lolly</Card.Title>
        <Card.Text>
        <br />
            Ksh60.00
        </Card.Text>

        <Button variant="outline-danger" className='card-button' onClick={handleShow} >Order Now</Button>
      </Card.Body>
    </Card>
    </div>

{/*OffCanvas*/}
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
        </div>
        </>
    );
}

export default MenuMain;