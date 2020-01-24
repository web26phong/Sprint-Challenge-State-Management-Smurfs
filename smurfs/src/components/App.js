import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

import AddSmurf from "./AddSmurf";
import SmurfsList from "./SmurfsList";
import SmurfsContext from "../contexts/SmurfsContext";

import "./App.css";

const App = () => {
  const [smurfsList, setSmurfsList] = useState([]);

  useEffect(()=>{
    Axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      setSmurfsList(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

    return (
      <SmurfsContext.Provider value={{smurfsList, setSmurfsList}}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <AddSmurf />
          <SmurfsList />
        </div>
      </SmurfsContext.Provider>
    );
  }

export default App;
