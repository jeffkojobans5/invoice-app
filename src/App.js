import React from 'react';
import { Routes , Route } from 'react-router-dom';

import { Header } from './components/index'
import  CreateInvoice  from './pages/CreateInvoice'
import  Login  from './pages/Login'


function App() {
  return (
  <>
  <Header />
  <Routes>
    <Route path="/" element={<CreateInvoice />} />
    <Route path="/login" element={<Login />} />
  </Routes> 
  </>  
  )
}

export default App;

