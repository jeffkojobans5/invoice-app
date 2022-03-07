import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { InvoiceProvider } from "./contexts/InvoiceContext"
import { UserProvider } from "./contexts/UserContext";

ReactDOM.render(
<UserProvider>
  <InvoiceProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
  </InvoiceProvider>    
</UserProvider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
