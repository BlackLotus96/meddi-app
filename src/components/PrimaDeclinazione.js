import React, {useRef, useState} from 'react';

import GetFrase from "./Frase"
import GetFrasePrimoModulo, {SentenceClickable} from "./primo_modulo/FrasePrimoModulo"
import IniziaEsercizio, {ContainerModals} from "./primo_modulo/InterfacciaPrimoEsercizio";
import IniziaEsercizioDue from "./primo_modulo/InterfacciaSecondoEsercizio";
import {useSelector} from "react-redux";
import {selectContainerModals, selectStartTranslation} from "../features/questionsSlice";
import {selectCurrentSentence, selectSentence} from "../features/sentenceSlice";
import {StyledDivider} from "./css_primo_modulo/components_primo_modulo";
import {Divider} from "antd";
import Text from "antd/es/typography/Text";
import {DndComponentOptions} from "./primo_modulo/translation/DragDropComponents";
    /**
    function rendersToSwitch(numberSentence){

        switch(numberSentence){
            case 0:
            return <IniziaEsercizio />

            case 1:
            return <IniziaEsercizioDue/>

        }
    }
**/

    function RenderizzaFrasePrimoModulo(props) {
        //const showContainerModals = useSelector(selectContainerModals)
        const sentence = useSelector(selectSentence)
        const showTranslation = useSelector(selectStartTranslation)
        const numberSentence = useSelector(selectCurrentSentence)



        return (
            <div className="container-frase-e-esercizi" >
                {<StyledDivider  orientation="center">Analisi della frase "{sentence.sentence}"</StyledDivider>}
                <div>
                    <GetFrasePrimoModulo />
                </div>

                {<IniziaEsercizio/>}
                {<StyledDivider orientation="center">Traduzione della frase "{sentence.sentence}"</StyledDivider>}
                {showTranslation ? <DndComponentOptions />  : null}
            </div>

            )
    }


export default RenderizzaFrasePrimoModulo;
