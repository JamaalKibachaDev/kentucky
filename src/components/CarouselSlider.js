import Carousel from 'react-bootstrap/Carousel';

import "./css/MainCarousel.css";

const MainCarousel = () => {
    return(
        <>

        <div className="py-5">
            <br />
        </div>

         <Carousel>
      <Carousel.Item interval={2000}>
       <img src={require("./images/carousel-1.jpeg")} alt="carousel-1" className="carousel-img"/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
      <img src={require("./images/carousel-2.jpeg")} alt="carousel-2" className="carousel-img" />
      </Carousel.Item>


      <Carousel.Item>
      <img src={require("./images/carousel-3.jpeg")} alt="carousel-3" className="carousel-img" />
      </Carousel.Item>
    </Carousel>
        </>
    );
}

export default MainCarousel;