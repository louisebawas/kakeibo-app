import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import Asking from '../components/illustrations/Asking';
import Button from '../components/Button';
import FormGroupInput from '../components/FormGroupInput';
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
  background-color: ${ Palette.lightyellow };
  grid-area: 1 / 1 / 4 / 3;
  padding: 60px;

  h1 {
    margin-top: 3rem;
  }

  svg {
    margin: 2rem;
    height: 500px;
    width: 350px;
  }
`;

const Header = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  align-self: end;
  justify-self: end;
  font-size: 0.85rem;
`;

const Login = (): React.ReactElement => {
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: (values) => {
      toast(`Welcome back ${ values.userName }!`);

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
    }),
  });

  return (
    <Container>
      <Aside>
        <Logo />
        <h1>Asking the right questions</h1>
        <Asking />
      </Aside>
      <Header>
        Not a member?
        {' '}
        <Link to="/signup">Sign Up</Link>
      </Header>
      <Content>
        <h2>Login to Kakeibo</h2>
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

          <Button type="submit" color="bittersweet">Login</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
