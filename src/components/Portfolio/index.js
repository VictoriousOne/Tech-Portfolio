import React from 'react';

import { Carousel } from 'react-bootstrap';
import TeamProfile from '../../assets/images/TeamProfile.jpg';
import TechBytes from '../../assets/images/Tech-Bytes.jpg';
import TrackMyBudget from '../../assets/images/Track-My-Budget.jpg';
import WeatherOnDemand from '../../assets/images/Weather-On-Demand.jpg';
import FluffyPotato from '../../assets/images/Fluffy-Potato.png';
import Sportlytics from '../../assets/images/Sportlytics.png';
import Gamedeets from '../../assets/images/Gamedeets.jpg';



function Portfolio() {

  return (
    <section>
      <Carousel variant="dark" fade>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={TeamProfile}
            alt="First slide"
          />
         <Carousel.Caption>
         <div className="flex-row space-between">
            <a href="https://github.com/VictoriousOne/GenTeamProfile" target="_blank">
              Github URL
            </a>
            <a href="https://github.com/VictoriousOne/GenTeamProfile" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={TechBytes}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div className="flex-row space-between">
            <a href="https://github.com/VictoriousOne/Tech-Bytes" target="_blank">
              Github URL
            </a>
            <a href="https://mytechbytes.herokuapp.com/" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={TrackMyBudget}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="flex-row space-between">
            <a href="https://github.com/VictoriousOne/Track-My-Budget" target="_blank">
              Github URL
            </a>
            <a href="https://whatsmybudget.herokuapp.com/" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={WeatherOnDemand}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="flex-row space-between">
            <a href="https://github.com/VictoriousOne/Weather-On-Demand" target="_blank">
              Github URL
            </a>
            <a href="https://victoriousone.github.io/Weather-On-Demand/" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Sportlytics}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="flex-row space-between">
            <a href="https://github.com/kazichaska/Sportlytics" target="_blank">
              Github URL
            </a>
            <a href="https://kazichaska.github.io/Sportlytics/" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={FluffyPotato}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="flex-row space-between">
            <a href="https://github.com/matthewpetriella/fluffy-potato" target="_blank">
              Github URL
            </a>
            <a href="https://rocky-river-85271.herokuapp.com/" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Gamedeets}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="flex-row space-between">
            <a href="https://github.com/RobertRish/gamedeets" target="_blank">
              Github URL
            </a>
            <a href="https://myvideogamesearch.herokuapp.com/" target="_blank">
              Deployment URL
            </a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Portfolio;