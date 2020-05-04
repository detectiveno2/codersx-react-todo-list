import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import LoginForm from "./components/LoginForm.js";

class App extends Component {
  render() {
    const defaultEmail = "abc@coders-x.com";
    return (
      <div className="App">
        <Header />
        <LoginForm email={defaultEmail} />
      </div>
    );
  }
}

export default App;
