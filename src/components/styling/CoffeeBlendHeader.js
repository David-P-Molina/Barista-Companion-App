import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import coffeeBlend from '../../assets/coffeeBlend.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${coffeeBlend}) no-repeat ;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
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

export const CoffeeBlendHeader = () => (
  <Styles>
    <div className="jumbo">
      <div className="overlay"></div>
      <Container>
      <br /><br /><br /><br /><br /><br />
        <h1>Coffee Blend Types</h1>
      </Container>
    </div>
  </Styles>
)