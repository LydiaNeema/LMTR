import React from "react";
<<<<<<< HEAD
import NavBar from "./components/NavBar";
import {useState,useEffect} from 'react'
import { Outlet } from "react-router-dom";




function App() {
 

  return (
    <>
    <div>
     <NavBar/>
     <Outlet/>
     
        </div>
    </>
  )
}

export default App
=======
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
     
      <NavBar />

    
      <main>
        <Outlet />
        <ProductList/>
      </main>

      
    </div>
  );
}

export default App;
>>>>>>> merge-temp
