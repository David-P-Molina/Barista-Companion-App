import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import beans from '../../assets/beans.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${beans}) no-repeat ;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .text {
    text-align: center;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const CoffeeBeanHeader = () => (
  <Styles>
    <div className="jumbo">
      <div className="overlay"></div>
      <Container className='text'>
      <br /><br /><br />
        <h1>Coffee Beans</h1>
        
      </Container>
    </div>
  </Styles>
)