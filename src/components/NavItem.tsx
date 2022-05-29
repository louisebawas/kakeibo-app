import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Palette } from '../constants';


type Props = {
  text: string;
  to: string;
};

const Wrapper = styled.li`
  background-color: ${ Palette.transparent };
  border-radius: 4px;

  a {
    display: inline-block;
    font-size: 0.85rem;
    text-decoration: none;
    padding: 0.85rem 1rem;

    &:visited {
      color: ${ Palette.dark };
    }
  }

  &:hover {
    a {
      color: ${ Palette.dark };
      font-style: bold;
    }

    background-color: ${ Palette.gray };
    transition: transform 250ms linear;
  }
`;

const NavItem = (props: Props): React.ReactElement => (
  <Wrapper>
    <Link to={ props.to }>{ props.text }</Link>
  </Wrapper>
);

export default NavItem;
