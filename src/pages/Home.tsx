import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import { HomeContainer as Container } from '../components/Layouts';


const NavBarContainer = styled.div`
  grid-area: 1 / 1 / 2 / 5;
`;

const navs = [
  {
    text: 'Profile',
    to: '/kakeibo',
  },
];

const Home = (): React.ReactElement => (
  <Container>
    <NavBarContainer>
      <NavBar>
        { navs.map((nav) => (
          <NavItem
            key={ nav.text }
            text={ nav.text }
            to={ nav.to }
          />
        )) }
      </NavBar>
    </NavBarContainer>
  </Container>
);

export default Home;
