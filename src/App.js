import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './components/login/login'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;
