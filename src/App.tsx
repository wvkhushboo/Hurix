import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {Routes, Route} from "react-router-dom"
import Team from './components/Team';
import Roles from './components/Roles';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/roles' element={<Roles/>}/>
      </Routes>
    </div>
  );
}

export default App;
