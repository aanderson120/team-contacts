import React, { Component } from "react";
import Header from "./components/Header";
import Results from "./components/Results";

class App extends Component {
  render() {
    return (
      <div>
        <Header />   
        <Results/>
      </div>
    )}; 
  };

export default App;

