import React, { Component } from "react";

import SmurfsList from "./SmurfsList";
import SmurfsContext from "../contexts/SmurfsContext";

import "./App.css";

class App extends Component {
  render() {
    return (
      <SmurfsContext.Provider>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfsList />
        </div>
      </SmurfsContext.Provider>
    );
  }
}

export default App;
