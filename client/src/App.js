import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn";

function App() {
  return (
    <Router basename = "/phone-eats-first">
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* <Route exact path="/signIn">
          <SignIn /> */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
