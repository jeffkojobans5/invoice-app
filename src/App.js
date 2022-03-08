import React from 'react';
import { Routes , Route } from 'react-router-dom';

import { Header } from './components/index'
import  CreateInvoice  from './pages/CreateInvoice'
import  Login  from './pages/Login'
import  Invoices  from './pages/Invoices'


function App() {
  return (
  <>
  <Header />
  <Routes>
    <Route path="/" element={<CreateInvoice />} />
    <Route path="/invoices" element={<Invoices />} />
    <Route path="/login" element={<Login />} />
  </Routes> 
  </>  
  )
}

export default App;

