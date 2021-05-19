import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Header from "./components/header";
import Register from "./components/register/register";
import IDE from "./components/IDE/IDE";
import AllCodes from "./components/allCodes/allcodes";
import EditIDE from "./components/editCode/editCode";

const App = () => {
  return (
    <div style={{ backgroundColor: "#282c34" ,margin:"0" }}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Login}></Route>
        <Route path="/signup" exact component={Register}></Route>
        <Route path="/ide" exact component={IDE}></Route>
        <Route path="/allcodes" exact component={AllCodes}></Route>
        <Route path="/editCode" exact component={EditIDE}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
