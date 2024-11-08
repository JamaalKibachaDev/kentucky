import Accordion from 'react-bootstrap/Accordion';

import "./css/faq.css";

let Faq = () => {
    return (
<>

<div className = "py-5"> <br /></div>


        <h2 className="faq-h2">Frequently Asked Questions</h2>
        <div className="faq">
             <Accordion defaultActiveKey="0" flush className="">
      <Accordion.Item eventKey="0" className="accordion bg bg-danger">
        <Accordion.Header>How can I order KFC for delivery?</Accordion.Header>
        <Accordion.Body className = " p-4 fs-6">
         You can order a  <span>KFC meal</span> for delivery through our <span>website, mobile app</span> or by using our other trusted partners such as <span>Glovo, Uber Eats & Bolt Food</span> at reasonable delivery rates depending on your location.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion bg bg-danger">
        <Accordion.Header>What are the delivery hours?</Accordion.Header>
        <Accordion.Body className = " p-4 fs-6">
          Delivery hours <span>vary in different locations</span>. Check our mobile app or website in order to know your area's delivery times.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="accordion bg bg-danger">
        <Accordion.Header>What should I do if my order is incorrect?</Accordion.Header>
        <Accordion.Body className = " p-4 fs-6">
          Please contact our <span>Customer Service hotline</span> immediately in order to resolve the issue. Our restaurants will do their  best to correct the order as soon as possible.  Please note that we cannot guarantee the time it takes to correct the order.


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="accordion bg bg-danger">
        <Accordion.Header>How do I leave a tip for my delivery driver?</Accordion.Header>
        <Accordion.Body  className = " p-4 fs-6">

        You can typically add a tip at <span>checkout when placing your order through the app or website or you can give cash directly to the driver upon delivery.</span>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="accordion bg bg-danger">
        <Accordion.Header>Are there any special deals for delivery?</Accordion.Header>
        <Accordion.Body   className = " p-4 fs-6">

          We often offer promotions and discounts fo delivery orders. Keep an eye on the <span>app and website</span> to make sure you don't miss out on crazy deals upto<span> 45% off</span> on delivery prices!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="accordion bg bg-danger">
        <Accordion.Header>Can I track my delivery?</Accordion.Header>
        <Accordion.Body className = " p-4 fs-6">
          Once you place an order on any of our platforms, <span>you will be notified on the progress of your delivery all the way from the restaurant to your doorstep.</span> After you have received and confirmed your order, make sure to end the delivery and  you can as well leave a rating if you enjoyed our services.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </>
    )
}

export default Faq;