import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img  from "../Assets/publicidad.jpg";
import img2 from "../Assets/publicidad2.png";
import img3 from "../Assets/publicidad3.png";

function CarouselHome() {
  return (
    <Carousel className="d-flex justify-content-center mt-5 w-100 shadow">
      <Carousel.Item>
        <img className="d-block w-100" src= {img} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src= {img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src= {img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome