import React, {Component, Fragment } from 'react';
import frasi from '../frasi.json';
/**import isEmpty from "../utils/is-empty";**/
import { Helmet } from 'react-helmet';
import isEmpty from "../utils/is-empty";

class PrimaDeclinazione extends Component {
    constructor(props) {
      super(props);
      this.state = {
        frasi,
        fraseCorrente: {},
        prossimaFrase: {},
        frasePrecedente: {},
        indiceFraseCorrente: 0
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




  render() {
      const { fraseCorrente } = this.state;

      return (
          <Fragment>
              <head>
                  <Helmet>
                      <title>Prima Declinazione</title>
                  </Helmet>

              </head>
              <div className="prima-declinazione-wrapper">
                  <p className="font-weight-normal">
                      {fraseCorrente.frase}
                  </p>
                  <div className="checkbox-container">
                      <form>
                          <input type="checkbox" id="soggetto" name="soggetto" value="Soggetto"/>
                          <label for="soggetto">Soggetto</label>
                          <input type="checkbox" id="verbo" name="verbo" value="Verbo"/>
                          <label for="verbo">Verbo</label>
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