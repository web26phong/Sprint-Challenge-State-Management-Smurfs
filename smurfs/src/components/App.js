import React, { Component, useState } from "react";

import SmurfsList from "./SmurfsList";
import SmurfsContext from "../contexts/SmurfsContext";

import "./App.css";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  
    return (
      <SmurfsContext.Provider>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfsList />
        </div>
      </SmurfsContext.Provider>
    );
  }

export default App;
