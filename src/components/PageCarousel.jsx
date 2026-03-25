import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Pagecarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import cardigan from '../images/cardigan.jpg';
import comforters from '../images/comforters.jpg';
import grannysquares from '../images/grannysquares.jpg'

const PageCarousel = () => {
  return (
    <div> <Carousel>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={comforters} alt="product image" />
        <Carousel.Caption>
        <h3>Cozy Comforters</h3>
          <p>Wrap yourself in warmth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={cardigan} alt="product image" />
        <Carousel.Caption>
        <h3>Stylish Cardigans</h3>
          <p>Perfect for a  chilly season.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={grannysquares} alt="product image" />
        <Carousel.Caption>
        <h3>Amaizing Patterns</h3>
          <p>Modern designs meeting timeless, handcrafted elegance.

</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}

export default PageCarousel;

