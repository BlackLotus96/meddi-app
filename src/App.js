import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrimaDeclinazione from "./components/PrimaDeclinazione";
import Frase from "./components/Frase";

function App() {
  return (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/play/prima_declinazione" component={PrimaDeclinazione}/>
  </Router>
  );
}

export default App;
