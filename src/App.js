import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ProductList from "./components/productlist";
import NavBar from "./components/navbar";
import Details from "./components/detail";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import Content from "./components/content";
import Cart from "./components/cart";
import PageNotFound from "./components/default";
import Product from "./components/product";
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Notification from './components/notification';
class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path= '/login' component={Login} />
          <Route path= '/register' component = {Register} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/profile' component={Profile} />
          <Route path='/notification' component={Notification} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
