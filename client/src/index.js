// import 'antd/dist/antd.css';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './Redux/store';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import styles from "./index.css"
const root = createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
