import './App.css';
import Dashboard from './Views/Dashboard';
import React, { useState } from "react";

import RegLogin from './Views/RegLogin';
import { Link, navigate, Router } from "@reach/router";

import axios from "axios";


function App() {

 

  return (
    // <div className="App">
    //   <RegLogin setLoggedIn={() => setIsLoggedIn(true)} path="/"/>

    //   <Router>
    //     <Dashboard path="/dashboard"/>
    //   </Router>
    // </div>

<>
      <div className="jumbotron">
        <h1>MERN Login Reg</h1>
        {/* {<button onClick={logout}>Logout</button>} */}

      </div>
      <RegLogin  path="/" />

      <Router>
        <Dashboard path="/dashboard" />
      </Router>
   
    </>
    
  );
}

export default App;
