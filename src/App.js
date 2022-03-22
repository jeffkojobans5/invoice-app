import React from 'react';
import { Routes , Route } from 'react-router-dom';

import { Header } from './EditComponents/index'
import  Login  from './pages/Login'
import  Invoices  from './pages/Invoices'
import  LandingPage  from './pages/LandingPage'
import  InvoicePage  from './pages/InvoicePage'



function App() {
  return (
  <>
  {/* <Header /> */}
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/invoices" element={<Invoices />} />
    <Route path="/invoices/:id" element={<InvoicePage />} />
    <Route path="/login" element={<Login />} />
    {/* <Route path="/createInvoice" element={<CreateInvoice />} /> */}
  </Routes> 
  </>  
  )
}

export default App;

