import React from 'react';
import Home from './Pages/Home';
import DashBorad from './Pages/DashBoard';
import {Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div >     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<DashBorad/>}></Route>
        </Routes>         
        
    </div>
  );
}
export default App;