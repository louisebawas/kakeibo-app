import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';
import Walking from '../components/illustrations/Walking';
import { LandingContainer as Container } from '../components/Layouts';


const Header = styled.div`
  grid-area: 1 / 1 / 2 / 5;
`;

const Aside = styled.aside`
  grid-area: 1 / 1 / 5 / 3;

  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: 60px 1fr 2fr 60px;
`;

const Headline = styled.div`
  grid-area: 3 / 2 / 4 / 3;

  h1 {
    font-size: 3.25rem;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 2.5rem;
  }
`;

const Hero = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  place-self: center;

  svg {
    width: 650px;
  }
`;

const navs = [
  {
    text: 'Sign Up',
    to: 'signup',
  },
  {
    text: 'Log In',
    to: 'session',
  },
];

const Landing = (): React.ReactElement => (
  <Container>
    <Header>
      <NavBar>
        { navs.map((nav) => (
          <NavItem
            key={ nav.text }
            text={ nav.text }
            to={ nav.to }
          />
        )) }
      </NavBar>
    </Header>

    <Aside>
      <Headline>
        <h1>
          Mindful Spending,
          {' '}
          <br />
          {' '}
          Mindful Saving
        </h1>
        <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Button to="signup" color="bittersweet">Get Started</Button>
      </Headline>
    </Aside>

    <Hero>
      <Walking />
    </Hero>
  </Container>
);

export default Landing;
