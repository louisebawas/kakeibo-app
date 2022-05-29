import React from 'react';
import { ToastContainer as Container } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const ToastContainer = (): JSX.Element => (
  <Container
    autoClose={ 3000 }
    position="top-right"
  />
);

export default ToastContainer;

