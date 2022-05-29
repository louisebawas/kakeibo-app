import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Palette } from '../constants';


const StyledLogo = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;

  a {
    color: ${ Palette.maximumbluegreen };
    font-size: 1.5rem;
    font-style: italic;
    margin: auto;
    text-decoration: none;
  } 
`;

const Logo = () => (
  <StyledLogo>
    <Link to="/">kakeibo</Link>
  </StyledLogo>
);

export default Logo;
