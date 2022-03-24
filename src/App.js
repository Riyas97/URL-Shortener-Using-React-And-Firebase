/*
This file creates two routes - one for the homepage where users can 
generate a shortened url and another where users will be redirected 
to the original url when they key in the shortened url
*/

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/home";
import Redirector from "./components/redirect";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="v/:code" element={<Redirector/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;