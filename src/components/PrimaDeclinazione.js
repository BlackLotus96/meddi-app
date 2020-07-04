import React, { useState } from 'react';
import GetFrase from "./Frase"
import GetFrasePrimoModulo from "./primo_modulo/FrasePrimoModulo"
import IniziaEsercizio from "./primo_modulo/InterfacciaPrimoEsercizio";
import frasi from "./primo_modulo/frasi-primo-modulo"

function RenderizzaFrase() {
    return <GetFrase />
}

    function RenderizzaFrasePrimoModulo() {
        const [disabled, setDisabled] = useState(false)
        const [paroleAttiveBool, setParoleAttive] = useState(false )
        return (
            <div className="pagina-frase" id="pagina-frase">
                <GetFrasePrimoModulo frasi={frasi} disabled={disabled} setDisabled={setDisabled} paroleAttiveBool={paroleAttiveBool}/>
                <IniziaEsercizio frasi={frasi} disabled={disabled} setDisabled={setDisabled} />
            </div>
            )
    }


export default RenderizzaFrasePrimoModulo;
