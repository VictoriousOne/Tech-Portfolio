import React from 'react';

import { Carousel } from 'react-bootstrap';
import TeamProfile from '../../assets/images/TeamProfile.jpg';
import TechBytes from '../../assets/images/Tech-Bytes.jpg';
import TrackMyBudget from '../../assets/images/Track-My-Budget.jpg';
import WeatherOnDemand from '../../assets/images/Weather-On-Demand.jpg';
import FluffyPotato from '../../assets/images/Fluffy-Potato.png';
import Sportlytics from '../../assets/images/Sportlytics.png';


function Portfolio() {

  return (
    <section>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TeamProfile}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TechBytes}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TrackMyBudget}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={WeatherOnDemand}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sportlytics}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FluffyPotato}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Sixth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Portfolio;