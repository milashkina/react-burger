import React from 'react';

import './index.css';
import App from "./components/app/app";
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { store } from "./services/store";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
const HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(HTMLElement)
root.render(
  <>
              <Provider store={store}>
                <Router basename="/react-burger">
                  <App/>
                </Router>
              </Provider>
          </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
