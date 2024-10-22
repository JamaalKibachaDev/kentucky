import "./css/MainFooter.css";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import { Link } from "react-router-dom";

const MainFooter = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div className="footer bg bg-light bg-gradient mb-0">
            <div className="d-flex justify-content-evenly fs-5">
                <div className="footer-left">
                    <ul>
                        <Link to ="/" className="nav-links"><li>Home</li></Link><br />
                        <Link to ="/menu" className="nav-links"> <li>Our Menu</li></Link><br />
                        <Link to ="#" className="nav-links" onClick={handleShow}><li>Our Offers</li></Link><br />
                        <Link to ="/about" className="nav-links"><li>About Us</li></Link>
                        <Link to ="/faq" className="nav-links"><li>Frequently Asked Questions</li></Link>
                    </ul>
                </div>

<div className="border"></div>

                <div className="footer-right">
                    <br />
                    <span className="social-header">Chat with us on:</span>
                     <br />
                    <div className="social-icons">
                      <Link to="https://www.instagram.com/kfckenya/?hl=en"><i class="fa-brands fa-instagram"></i></Link>
                      <Link to="https://www.facebook.com/people/KFC-KENYA/61555743797178/?_rdr"><i class="fa-brands fa-facebook"></i></Link>
                      <Link to="https://x.com/kfcinkenya?lang=en"><i class="fa-brands fa-x-twitter"></i></Link>  
                      </div>
                      <span className="hotline">KFC Hotline : +254 755 932 932</span> 
                </div>
            </div>
            <div className="py-4 text-center my-4 fw-bold">
             &copy;2024 KFC Kenya All Rights Reserved.
             </div>
        </div>

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
        </>
    );
}

export default MainFooter;