import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-native';
import './index.css';

import Timer from './components/Timer/Timer.tsx';
import Timer2 from './components/Timer2';
import Timer3 from './components/Timer3';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Timer />
    <Timer2 />
    {/* <Timer3 /> */}
    
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
