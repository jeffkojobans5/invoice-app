import React from 'react';
import Header from './components/Header'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={Header} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;
