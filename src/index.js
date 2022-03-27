import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { InvoiceProvider } from "./Editcontexts/InvoiceContext"
import { UserProvider } from "./Editcontexts/UserContext";
import { FilterProvider } from "./Editcontexts/FilterContext";
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './Editcontexts/AuthContext';

// dev-ddlmt95z.us.auth0.com 
// hQjTVLEOeyeek0ZWHxEruYjzkzNCQ9Eu

ReactDOM.render(
  <Auth0Provider
  domain="dev-ddlmt95z.us.auth0.com "
  clientId="hQjTVLEOeyeek0ZWHxEruYjzkzNCQ9Eu"
  redirectUri={window.location.origin}
  cacheLocation="localstorage"
>
    <AuthProvider>
    <UserProvider>
      <InvoiceProvider>
      <FilterProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
        </FilterProvider>
      </InvoiceProvider>    
    </UserProvider>
    </AuthProvider>
</Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
