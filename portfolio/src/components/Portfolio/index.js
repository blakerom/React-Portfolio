import React, { useState } from 'react'
import Proj1 from '../../images/devpendency.jpg'
import Proj2 from '../../images/chapp.png'
import Proj3 from '../../images/roadtrip.PNG'
import Proj4 from '../../images/fishy_tracker.PNG'
import { Button } from '../ProjectButtonElement'
import {
  PortfolioContainer, 
  PortfolioWrapper, 
  PortfolioCard, 
  PortfolioIcon, 
  PortfolioH1, 
  PortfolioH2, 
  PortfolioP
} from './PortfolioElements'

export const Portfolio = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Proj1} />
          <PortfolioH2>Devpendancy App</PortfolioH2>
          <PortfolioP>A productivity app for the software developer on the go.</PortfolioP>
          <Button
          href="//github.com/401d37-Final-Project/devpendency-app" 
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          dark='true'
          >See More</Button>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Proj2} />
          <PortfolioH2>Chapp</PortfolioH2>
          <PortfolioP>CLI chat application with a built in language filter.</PortfolioP>
          <Button
          href="//npmjs.com/package/chapp" 
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          dark='true'
          >See More</Button>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Proj3} />
          <PortfolioH2>Roadtrip</PortfolioH2>
          <PortfolioP>Trip planner that creates an itinerary for your destination.</PortfolioP>
          <Button
          href="//team-get-road-trip.herokuapp.com/" 
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          dark='true'
          >See More</Button>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Proj4} />
          <PortfolioH2>Fishy Tracker</PortfolioH2>
          <PortfolioP>Aquarium water parameter tracking application w/ charts.</PortfolioP>
          <Button
          href="//https://daviddicken.github.io/fishy_tracker/" 
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          dark='true'
          >See More</Button>
        </PortfolioCard>
        
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}
