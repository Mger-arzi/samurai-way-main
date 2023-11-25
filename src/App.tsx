import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Navbar } from "./components/navbar/Navbar";

function App() {
   return (
      <div className="app-wprapper">
         <Header/>
         <Navbar/>
         <Profile/>
      </div >
   );
}

export default App;
