import React from "react";
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
