import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import Button from '../components/Button';
import FormGroupInput from '../components/FormGroupInput';
import Freedom from '../components/illustrations/Freedom';
import Logo from '../components/Logo';
import { LandingContainer as Container } from '../components/Layouts';
import { Palette } from '../constants';


const Content = styled.div`
  grid-area: 2 / 3 / 3 / 5;
  place-self: center;

  form {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 3rem;
      width: 150px;
    }
  }
`;

const Aside = styled.aside`
  background-color: ${ Palette.peachpuff };
  grid-area: 1 / 1 / 4 / 3;
  padding: 60px;

  h1 {
    align-item: end;
    margin-top: 3rem;
  }

  svg {
    height: 500px;
    width: 450px;
  }
`;

const Header = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  align-self: end;
  justify-self: end;
  font-size: 0.85rem;
`;

const SignUp = (): React.ReactElement => {
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      userName: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      toast(`Welcome ${ values.userName }!`);

      setTimeout(() => {
        navigate('/kakeibo');
      }, 2000);
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(16)
        .label('Username')
        .required(),
      password: Yup.string()
        .min(8)
        .label('Password')
        .required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords should match')
        .label('Password Confirmation')
        .required(),
    }),
  });

  return (
    <Container>
      <Aside>
        <Logo />
        <h1>Freedom from mindless spending</h1>
        <Freedom />
      </Aside>
      <Header>
        Already a member?
        {' '}
        <Link to="/session">Login</Link>
      </Header>
      <Content>
        <h2>Sign Up to Kakeibo</h2>
        <form onSubmit={ form.handleSubmit }>
          <FormGroupInput
            label="Username"
            type="text"
            form={ form }
            name="userName"
          />

          <FormGroupInput
            label="Password"
            type="password"
            form={ form }
            name="password"
          />

          <FormGroupInput
            label="Confirm Password"
            type="password"
            form={ form }
            name="confirmPassword"
          />

          <Button type="submit" color="bittersweet">Create Account</Button>
        </form>
      </Content>
    </Container>
  );
};

export default SignUp;
