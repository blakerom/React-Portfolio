import React from 'react'
import Icon1 from '../../images/svg1.svg'
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
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>H2 tag</PortfolioH2>
          <PortfolioP>Ptag info</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>H2 tag</PortfolioH2>
          <PortfolioP>Ptag info</PortfolioP>
        </PortfolioCard>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>H2 tag</PortfolioH2>
          <PortfolioP>Ptag info</PortfolioP>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}
