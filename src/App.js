import React from 'react';
import { Routes , Route } from 'react-router-dom';

import { Header } from './components/index'
import  CreateInvoice  from './pages/CreateInvoice'


function App() {
  return (
  <>
  <Header />
  <Routes>
    <Route path="/" element={<CreateInvoice />} />
  </Routes> 
  </>  
  )
}

export default App;

