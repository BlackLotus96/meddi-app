import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {DndComponentOptions} from "./primo_modulo/translation/DragDropComponents";

const Home = () => (
    <Fragment>
        <Helmet><title>tesi di Simone</title></Helmet>
        <div id="home">
            <div style={{textAlign: 'center'}}>
                <span className="mdi mdi-cube-outline cube"></span>
            </div>
            <h1>Esercizi sulla prima declinazione</h1>
            <div className="play-button-container">
                <ul>
                    <li><Link className="play-button" to="/play/primo_modulo">Inizia esercizi primo modulo</Link></li>
                </ul>
            </div>
        </div>
    </Fragment>

);

export default Home;