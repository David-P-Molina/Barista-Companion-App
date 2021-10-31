import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import welcome from '../../assets/welcome.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${welcome}) no-repeat ;
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

export const Header = () => (
  <Styles>
    <div className="jumbo">
      <div className="overlay"></div>
      <Container>
      <br /><br /><br /><br /><br /><br />
        <h1>Welcome</h1>
        <p>for coffee enthusiasts in pursuit of the perfect cup</p>
      </Container>
    </div>
  </Styles>
)