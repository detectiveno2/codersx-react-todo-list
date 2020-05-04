import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import LoginForm from "./components/LoginForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
      </div>
    );
  }
}

export default App;
