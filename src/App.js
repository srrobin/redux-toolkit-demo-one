import React from 'react';
import './App.css';
import Menuarea from './components/Menuarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import SingleVideo from './components/SingleVideo';

const App = () => {
  return (
    <div>
      <Menuarea />
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/video/:id' element={<SingleVideo/>}/>
      </Routes>
    </div> 
  );
};

export default App;


