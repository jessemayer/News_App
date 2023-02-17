import React, { createContext, useEffect, useState }  from 'react'
import axios from 'axios'
import './App.css';
import { NewsContextProvider } from './NewsContext';
import News from './components/News';
import Navbar from './components/NavBar';
import Home from './components/Pages/Home';
import WallStreetJournal from './components/Pages/WallStreetJournal';
import Business from './components/Pages/Business';
import {TechCrunchProvider} from './components/Pages/TechCrunch';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/TechCrunch' element={<TechCrunchProvider />} />
            <Route path='/Business' element={<Business />} />
            <Route path='/WallStreetJournal' element={<WallStreetJournal />} />
          </Routes>
        </div>

     <NewsContextProvider>
      <News />
      
    </NewsContextProvider> 
    </>
  );
}

export default App;
