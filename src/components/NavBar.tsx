import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import { Palette } from '../constants';


type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  border-bottom: 1px solid ${ Palette.gray };
  display: grid;
  grid-template-columns: 60px 1fr 3fr 60px;
  grid-template-row: 1fr;
  height: 60px;
`;

const LogoContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  align-self: center;
`;

const Menu = styled.ul`
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;
  justify-self: end;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavBar = (props: Props): React.ReactElement => (
  <Wrapper>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <Menu>
      { props.children }
    </Menu>
  </Wrapper>
);

export default NavBar;
