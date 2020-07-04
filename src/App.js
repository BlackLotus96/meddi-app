import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrimaDeclinazione from "./components/PrimaDeclinazione";
import RenderizzaFrase from "./components/PrimaDeclinazione";
import RenderizzaFrasePrimoModulo from "./components/PrimaDeclinazione";
import Frase from "./components/Frase";
import InterfacciaPrimoEsercizio from "./components/primo_modulo/InterfacciaPrimoEsercizio";
function App() {
  return (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/play/primo_modulo" component={RenderizzaFrasePrimoModulo}/>

  </Router>
  );
}

export default App;
