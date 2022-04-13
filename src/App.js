import React from 'react';
import { Routes , Route } from 'react-router-dom';

import  { Header } from './Components/index'

// pages
import  Invoices  from './pages/Invoices'
import  LandingPage  from './pages/LandingPage'
import  EditInvoice  from './pages/EditInvoice'
import  CreateInvoice  from './pages/CreateInvoice'

// contexts
import  LoginRedirect from './Contexts/LoginLogoutRedirect';


function App() {
  return (
  <>
  {/* <Header /> */}
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/invoices" element={<Invoices />} />
    <Route path="/create" element={<Invoices />} />
    <Route path="/invoices/:id" element={<EditInvoice />} />
    <Route path="/createInvoice/" element={<CreateInvoice />} />
    <Route path="/api/connect/auth0/redirect" element={<LoginRedirect />} />
  </Routes> 
  </>  
  )
} 

export default App;
