import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Header from "./components/header";
import Register from "./components/register/register";
import IDE from "./components/IDE/IDE";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Login}></Route>
        <Route path="/signup" exact component={Register}></Route>
        <Route path="/ide" exact component={IDE}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
