import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import roastLevel from '../../assets/roastLevel.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${roastLevel}) no-repeat ;
    background-size: cover;
    color: #efefef;
    height: 225px;
    position: relative;
    z-index: -2;
  }
  .text {
    text-align: center;
  }
  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const RoastLevelHeader = () => (
  <Styles>
    <div className="jumbo">
      <div className="overlay"></div>
      <Container className='text'>
      <br /><br /><br /><br />
        <h1>Roast Levels</h1><hr />
      </Container>
    </div>
  </Styles>
)