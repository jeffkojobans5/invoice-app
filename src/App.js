import React from 'react';
import { Routes , Route , Navigate} from 'react-router-dom';

import  { Header } from './Components/index'

// pages
import  Invoices  from './pages/Invoices'
import  LandingPage  from './pages/LandingPage'
import  EditInvoice  from './pages/EditInvoice'
import  CreateInvoice  from './pages/CreateInvoice'

// contexts
import  LoginRedirect from './Contexts/LoginLogoutRedirect';


function App() {
  let user = localStorage.getItem("username")
  return (
  <>
  {/* <Header /> */}
  <Routes>
  
  <Route path = "/api/connect/auth0/redirect" element={<LoginRedirect />} />
  <Route path = "/" element={<LandingPage />} />
  { user && (
    <>
        <Route path = { `/${user}/invoices` } element={<Invoices />} />
        <Route path = { `/${user}/invoices/:uniqkey/:id` } element={<EditInvoice />} />
        <Route path = { `/${user}/create-invoice` }  element={<CreateInvoice />} />
      </>
    )
  }
  
  <Route path = { `/new` }  element={<CreateInvoice />} />
  <Route path = { `/invoices` }  element={<Invoices />} />
  <Route path = { `/invoice/:id` }  element={<EditInvoice />} />

  <Route path="" element={ <Navigate to={user ? "/" : `/${user}/invoices`} />} />

  </Routes> 
  </>  
  )
} 

export default App;