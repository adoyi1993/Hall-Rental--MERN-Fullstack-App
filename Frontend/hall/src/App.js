import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Halls from './Components/Halls';
import Header from './Components/Header';
import Landing from './Components/Landing';
import ContactUs from './Components/ContactUs';
import AddHall from './Components/AddHall';
import EditHall from './Components/EditHall';
import EditHallMain from './Components/EditHallMain';
import AddHallAdmin from './Components/AddHallAdmin';
import SignUp from './Components/SignUp';
import LoginScreen from './Components/LoginScreen';
import PublicHeader from './Components/PublicHeader';

function App() {
  return (
    <Router>
    <>
       
        <Routes>
        <Route path='/' element={<LoginScreen/>} />  
        <Route path='/home' element={<Landing/>} />  
        <Route path='/getHalls' element={<Halls/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/addHall'  element={<AddHall/>} />
        <Route path='/admin@hallRental'  element={<AddHallAdmin/>} />
        <Route path='/editHall'  element={<EditHall/>} />
        <Route path='/editHall/:id'  element={<EditHall/>} />

     
        </Routes>
    
    
    
    </>
    </Router>
  );
}

export default App;
