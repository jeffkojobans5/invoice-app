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

ReactDOM.render(
  <UserProvider>
      <InvoiceProvider>
      <FilterProvider>
        <EditInvoiceProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter> 
          </EditInvoiceProvider > 
        </FilterProvider>
      </InvoiceProvider>    
    </UserProvider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
