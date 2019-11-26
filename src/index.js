import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//https://programmingwithmosh.com/react/react-router-add-the-power-of-navigation/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
ReactDOM.render(
  <div>
  <App />
  </div>, document.getElementById('root'));

//ReactDOM.render(
//  <Router history={history}>
//    <Routes />
//  </Router>,
//  document.getElementById("root")
//)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
