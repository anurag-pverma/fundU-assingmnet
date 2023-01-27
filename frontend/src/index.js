import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { reducers } from "./redux/reducers"
import thunk from "redux-thunk"
import {BrowserRouter} from "react-router-dom"
import { createStore, applyMiddleware, compose} from "redux"
import {GoogleOAuthProvider} from "@react-oauth/google"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GoogleOAuthProvider
                clientId={`476318075567-jnfk3ov4m3vbs4adborkru3r4mat8j5b.apps.googleusercontent.com`}>
       <App />
       </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// # Google  authontication
// Your Client ID===> 476318075567-jnfk3ov4m3vbs4adborkru3r4mat8j5b.apps.googleusercontent.com
// Your Client Secret==> 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
// url to reach that page => https://console.cloud.google.com/apis/credentials?organizationId=0&project=myweb05