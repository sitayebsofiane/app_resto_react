import React from 'react';
import './../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Singup';
import ErrorPage from '../ErrorPage'

function App() {
  return (
    <div >
      <Header />
      <Welcome />
      <Login />
      <Signup />
      <ErrorPage />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;