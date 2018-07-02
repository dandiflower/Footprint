import React from "react";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Quiz from "./pages/Quiz";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </div>
  </Router>
);

export default App;
