import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home"
import Browse from "./pages/Browse";
import Discover from "./pages/Discover";
import MintItem from "./pages/MintItem";
import Vote from "./pages/Vote";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/browse" component={Browse} />
        <Route path="/discover" component={Discover} />
        <Route path="/mint" component={MintItem} />
        <Route path="/vote" component={Vote} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
