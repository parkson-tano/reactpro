import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import Navi from './components/navbar';
import Details from './components/detail';
import SideBar from './components/sidebar';
import Footer from './components/footer';
import Content from './components/content'

class New extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Navi />
      <Header />

      </div>

     );
  }
}



ReactDOM.render(
<New />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
