import React, {useEffect, useState} from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import RenderizzaFrasePrimoModulo from "./components/PrimaDeclinazione";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrent, selectShowErrorZero, setShowError} from "./features/questionsSlice";

function App() {
  const showErrorZero = useSelector(selectShowErrorZero)
  const numberQuestion = useSelector(selectCurrent)
  const dispatch = useDispatch();


  return (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/play/primo_modulo" render={() => <RenderizzaFrasePrimoModulo/> }/>
  </Router>
  );
}

export default App;
