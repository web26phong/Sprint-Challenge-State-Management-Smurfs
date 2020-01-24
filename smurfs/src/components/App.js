import React, { Component } from "react";

import Smurfs from "../contexts/Smurfs";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Smurfs.Provider>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </div>
      </Smurfs.Provider>
    );
  }
}

export default App;
