import React from 'react';

import './index.css';
import App from "./components/App/app";
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { store } from "./services/store";
import {createRoot} from "react-dom/client";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
const HTMLElement = document.getElementById('root');
const root = createRoot(HTMLElement)
root.render(
  <>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App/>
      </DndProvider>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
