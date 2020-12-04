import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/base.scss'
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let m = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
// numRow  x numCol
function findVal(m, x) {
  let start = 0;
  let end = m[0].length - 1;
  let center = Math.floor(m[0].length / 2);
  console.log(center);

  for (let i = 0; i++; i < m.length) {
    console.log(i);
    while (start !== end) {
      if (m[i][center] === x) {
        return true;
      }
      
      console.log(center);
      if (x < m[i][center]) {
        start = start + 1;
        end = center;
      } else {
        start = center;
        end -= 1;
      }
      center = Math.floor(center/2);
    }
  }
  return false;
}

console.log(findVal(m, 11));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
