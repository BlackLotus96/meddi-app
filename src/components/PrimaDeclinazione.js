import React, {Component, createElement, Fragment} from 'react';
import frasi from '../frasi.json';
/**import isEmpty from "../utils/is-empty";**/
import { Helmet } from 'react-helmet';
import isEmpty from "../utils/is-empty";

class PrimaDeclinazione extends Component {
    constructor(props) {
    super(props);
        this.state = {
        frasi,
        indiceFraseCorrente: 0,
        fraseCorrente: frasi[0],
        prossimaFrase: {},
        frasePrecedente: {},
        attivo: false

        };
    }




    componentDidMount() {
      const {frasi, fraseCorrente, prossimaFrase, frasePrecedente } = this.state;
      this.displayFrasi(frasi, fraseCorrente, prossimaFrase, frasePrecedente);
    }


    displayFrasi = (frasi = this.state.frasi, fraseCorrente, prossimaFrase, frasePrecedente) => {
        let { indiceFraseCorrente } = this.state;
        if (!isEmpty(this.state.frasi)){
            frasi = this.state.frasi;
            fraseCorrente = frasi[indiceFraseCorrente];
            prossimaFrase = frasi[indiceFraseCorrente + 1];
            frasePrecedente = frasi[indiceFraseCorrente - 1];
            this.setState({
                fraseCorrente,
                prossimaFrase,
                frasePrecedente
          });
        }

    };

    gestisciSuccessivo = () => {
        if (this.state.prossimaFrase !== undefined) {
            this.setState(prevState => ({
                indiceFraseCorrente: prevState.indiceFraseCorrente + 1
            }), () => {
                this.displayFrasi(this.state.state, this.state.fraseCorrente, this.state.prossimaFrase, this.state.frasePrecedente);
            });
        }
    };

    gestisciPrecedente = () => {
        if (this.state.frasePrecedente !== undefined) {
            this.setState(prevState => ({
                indiceFraseCorrente: prevState.indiceFraseCorrente - 1
            }), () => {
                this.displayFrasi(this.state.state, this.state.fraseCorrente, this.state.prossimaFrase, this.state.frasePrecedente);
            });
        }
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.fraseCorrente === nextState.fraseCorrente){
            return false;
        }
        return true;
    }
/**
    renderizzaFrase = () => {
        let blockDiv;

        if (key.toString() !== "frase" && blockDiv !== null) {
            blockDiv = document.createElement('div');
            blockDiv.className = key.toString();
            console.log(this.state.fraseCorrente[key])
            blockDiv.append(this.state.fraseCorrente[key]);




        } return blockDiv.innerText;

    }
**/
    renderizzaFrase(){
        return this.state.fraseCorrente.frase;
}
    gestisciCheckboxSoggetto(){

    }



  render() {
      const {fraseCorrente} = this.state;

      return (
          <Fragment>
              <head>
                  <Helmet>
                      <title>Prima Declinazione</title>
                  </Helmet>

              </head>
              <div id="prima-declinazione-wrapper" className="prima-declinazione-wrapper">
                  <div id = "frase" className="frase">
                      {this.renderizzaFrase()}
                  </div>
                  <div className="checkbox-container">
                      <form>
                          <input onClick={this.gestisciCheckboxSoggetto} checked={this.state.attivo} type="checkbox" id="soggetto" name="soggetto" value="Soggetto"/>
                          <label htmlFor="soggetto">Soggetto</label>
                          <input onClick={this.gestisciCheckboxVerbo} checked={this.state.attivo} type="checkbox" id="verbo" name="verbo" value="Verbo"/>
                          <label htmlFor="verbo">Verbo</label>
                      </form>
                  </div>

                  <div className="button-container">
                    <button onClick={this.gestisciPrecedente} type="button" className="btn btn-light" >Precedente</button>
                    <button onClick={this.gestisciSuccessivo} type="button" className="btn btn-primary">Successiva</button>
                  </div>

              </div>
          </Fragment>
      );
    }
}

export default PrimaDeclinazione;