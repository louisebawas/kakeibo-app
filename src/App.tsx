import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ToastContainer from './components/ToastContainer';


const App = (): React.ReactElement => (
  <>
    <Routes>
      <Route path="/session" element={ <Login /> } />
      <Route path="/signup" element={ <SignUp /> } />
      <Route path="/" element={ <Landing /> } />
      <Route path="/kakeibo" element={ <Home /> } />
    </Routes>

    <ToastContainer />
  </>
);

export default App;
