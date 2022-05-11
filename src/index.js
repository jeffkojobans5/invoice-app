import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { InvoiceProvider } from "./Contexts/InvoiceContext"
import { EditInvoiceProvider } from "./Contexts/EditInvoiceContext"
import { UserProvider } from "./Contexts/UserContext";
import { FilterProvider } from "./Contexts/FilterContext";
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev-ddlmt95z.us.auth0.com"
    clientId="ytrNPu6rtvn6ya2zGl6mbB7ntOghk9eV"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
  <UserProvider>
    <EditInvoiceProvider>
      <InvoiceProvider>
      <FilterProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter> 
        </FilterProvider>
      </InvoiceProvider>    
      </EditInvoiceProvider > 
    </UserProvider> 
</Auth0Provider>      ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
