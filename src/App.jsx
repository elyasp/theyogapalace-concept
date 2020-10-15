import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, Programs, About, Contact } from "./pages";
import { GlobalStyle } from "./styles/styles";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact render={Landing} />
          <Route path="/programs" exact render={Programs} />
          <Route path="/about" exact render={About} />
          <Route path="/contact" exact render={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
