import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Header from "./components/header";
import Register from "./components/register/register";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Login}></Route>
        <Route path="/signup" exact component={Register}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
