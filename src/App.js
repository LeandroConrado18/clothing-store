
import React from "react";
import HomePage from "./home/pages/HomePage";
import { Link, Route, Routes } from 'react-router-dom';
import HatsPage from "./home/pages/HatsPage";
import SignIn from "./sign-in/Sign-in";
import NavigationBar from "./navigationBar/NavigationBar";

function App() {
  return (
    <div>
      <Routes>        
        <Route path='/' element={<NavigationBar/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'shop'} element={<HatsPage/>}/>
          <Route path={'signin'} element={<SignIn/>}/>
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
