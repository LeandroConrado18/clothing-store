
import React from "react";
import HomePage from "./home/pages/HomePage";
import { Link, Route, Routes } from 'react-router-dom';
import JacketsPage from "./home/pages/JacketsPage";
import SneakersPage from "./home/pages/SneakersPage";
import WomensPage from "./home/pages/WomensPage";
import MensPage from "./home/pages/MensPage";
import HatsPage from "./home/pages/HatsPage";
import { Outlet } from "react-router-dom";
import SignIn from "./sign-in/Sign-in";
import NavigationBar from "./navigationBar/NavigationBar";

function App() {
  return (
    <div>
      <Routes>        
        <Route path='/' element={<NavigationBar/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'shop'} element={<HatsPage/>}/>
          <Route path={'sigIn'} element={<SignIn/>}/>
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
