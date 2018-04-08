import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/clock" component={Clock} />
      <Route path="/people" component={API} />
  </Router>
