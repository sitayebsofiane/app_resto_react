import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Singup';
import ErrorPage from '../ErrorPage';
import MotPasseOublie from '../MotPasseOublie';
import AjouterProduitRef from '../AjoutProduitRef';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/motpasseoublie" component={MotPasseOublie} />
        <Route path="/ajouterProduitRef" component={AjouterProduitRef} />
        <Route component={ErrorPage} />
        <Landing />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;