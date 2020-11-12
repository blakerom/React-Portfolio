import React, { Component } from 'react';
//--------------------------------------
import css from './skillsImages/css.png'
import express from './skillsImages/Expressjs.png'
import html from './skillsImages/html.png'
import js from './skillsImages/js.svg'
import mongo from './skillsImages/mongodb.png'
import nodejs from './skillsImages/nodejs.svg'
import postgres from './skillsImages/postgres.png'
import reactlogo from './skillsImages/reactlogo.jpg'
import git from './skillsImages/git.svg'
import csharp from './skillsImages/csharp.png'
//---------------------------------------
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex, GridGenerator } from 'react-hexgrid';
import { 
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle,
  HexWrap
} from './SkillsElements';
import './Skills.css';
import './Animations.css';

class Skills extends Component {
  render() {
    const hexagons = GridGenerator.hexagon(1, 1, 1);

    return (
      <>
        <InfoContainer id="skills">
          <InfoWrapper>
            <InfoRow>
              <Column1>
              <TextWrapper>
                <TopLine>Skills</TopLine>
                <Heading>Headline</Heading> 
                <Subtitle>Description</Subtitle>
              </TextWrapper>
              </Column1>
              <Column2>
                <HexWrap>

                  <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
                    {/* Grid with manually inserted hexagons */}
                    <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                      {/* Using pattern (defined below) to fill the hexagon */}
                      <Hexagon q={0} r={-1} s={1} fill="pat-1" />
                      <Hexagon q={-1} r={1} s={0} fill="pat-2" />
                      <Hexagon q={0} r={1} s={-1} fill="pat-3" />
                      <Hexagon q={1} r={-1} s={0} fill="pat-4" />
                      <Hexagon q={1} r={0} s={-1} fill="pat-5" />
                      {/* Pattern and text */}
                      <Hexagon q={-1} r={0} s={1} fill="pat-6"/>
                      <Hexagon q={-2} r={0} s={1} fill="pat-7"/>
                      <Hexagon q={0} r={0} s={0} fill="pat-8"/>
                      <Hexagon q={-2} r={1} s={0} fill="pat-9"/>
                      <Hexagon q={-1} r={2} s={0} fill="pat-10"/>
                      <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
                    </Layout>
                    <Pattern id="pat-1" link={css} size={{ x: 10, y: 10 }} />
                    <Pattern id="pat-2" link={express} size={{ x: 10, y: 9 }} />
                    <Pattern id="pat-3" link={html} size={{ x: 10, y: 9 }} />
                    <Pattern id="pat-4" link={nodejs} size={{ x:10, y: 9 }} />
                    <Pattern id="pat-5" link={js} size={{ x: 10, y: 9 }} />
                    <Pattern id="pat-6" link={mongo} size={{ x: 10, y: 9 }} />
                    <Pattern id="pat-7" link={postgres} size={{ x: 10, y: 8 }} />
                    <Pattern id="pat-8" link={reactlogo} x={10} y={10} size={{ x: 10, y: 9 }} />
                    <Pattern id="pat-9" link={git} x={10} y={10} size={{ x: 9.3, y: 9 }} />
                    <Pattern id="pat-10" link={csharp} x={10} y={10} size={{ x: 10, y: 8.5 }} />

                  </HexGrid>
                </HexWrap>

                {/* <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap> */}
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
}

export default Skills;