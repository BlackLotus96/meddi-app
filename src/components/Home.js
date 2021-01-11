import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {DndComponentOptions} from "./primo_modulo/translation/DragDropComponents";
import {Button} from "antd";

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
            <Contatore/>
            <Contatore/>
        </div>
    </Fragment>

);

function Contatore(){
    const [contatore, setContatore] = useState(0)
    return(
        <>
            <h2 style={{marginTop: "200px", marginLeft: "200px"}}>
                Valore del contatore: {contatore}
            </h2>
            <div style={{marginLeft: "200px"}}>
                <Button onClick={() => setContatore(contatore+1)}>Aumenta</Button>
                <Button onClick={() => setContatore(contatore-1)}>Decrementa</Button>
            </div>
        </>
    )
}
export default Home;