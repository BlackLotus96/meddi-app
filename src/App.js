import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrimaDeclinazione from "./components/PrimaDeclinazione";

function App() {
  return (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/play/prima_declinazione" exact component={PrimaDeclinazione}/>
  </Router>
  );
}

export default App;
