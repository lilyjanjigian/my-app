import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";
import Resume from "./pages/Resume.js";


function App() {
  return (
    // Add coursework page with links to each class you've taken
    // Add skills
    // Add fun page
    <>
      <NavBar/>
      <Router>
        <Courses path="/"/>
        <Courses path="/courses"/>
        <Resume path="/resume"/>
        <NotFound default />
      </Router>

    </>
  );
}

export default App;
