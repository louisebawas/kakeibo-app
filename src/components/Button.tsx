import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Palette } from '../constants';


type StyleProps = {
  color: string;
};

type Props = {
  children: string;
  className?: string;
  color?: keyof typeof Palette;
  to?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

const StyledButton = styled.button`
  background-color: ${ (props: StyleProps): string => (props.color) };
  border: none;
  border-radius: 4px;
  color: ${ (props: StyleProps): string => (props.color === 'transparent' ? '#343a40' : '#fff') };
  margin: 0;
  padding: 0.75rem 1.5rem;

  a {
    color: ${ (props: StyleProps): string => (props.color === 'transparent' ? '#343a40' : '#fff') };;
    text-decoration: none;

    &:visited {
      color: ${ (props: StyleProps): string => (props.color === 'transparent' ? '#343a40' : '#fff') };
    }
  }

  &:hover {
    opacity: 0.8;
    transition: transform 250ms linear;
  }
`;

const Button = (props: Props) => {
  const color = props.color ? Palette[props.color] : Palette.transparent;

  return (
    <StyledButton
      className={ props.className }
      type={ props.type }
      color={ color }
      onClick={ props.onClick }
    >
      { props.to ? (
        <Link to={ props.to }>{ props.children }</Link>
      ) : (
        <span>{ props.children }</span>
      ) }
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'transparent',
  className: '',
  to: '',
  type: 'button',
  onClick: () => {},
};

export default Button;
