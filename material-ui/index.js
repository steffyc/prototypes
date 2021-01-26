import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Timer3 from './components/Timer3';

const sample={
  name: 'dataA',
  time: new Date(),
  connectionStatus: true
};
const sample2={
  name: 'dataB',
  time: new Date(),
  connectionStatus: true
};
const sample1={
  name: 'dataD',
  time: new Date(),
  connectionStatus: true
};
const samples=[sample, sample2, sample1];

ReactDOM.render(
  <React.StrictMode>
    <Timer3 props={samples}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
