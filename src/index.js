import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { InvoiceProvider } from "./Editcontexts/InvoiceContext"
import { UserProvider } from "./Editcontexts/UserContext";
import { FilterProvider } from "./Editcontexts/FilterContext";

ReactDOM.render(
<UserProvider>
  <InvoiceProvider>
   <FilterProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
    </FilterProvider>
  </InvoiceProvider>    
</UserProvider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
