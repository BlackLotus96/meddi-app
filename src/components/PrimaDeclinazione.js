import React from 'react';
import { Card, Tag} from 'antd';
import GetFrasePrimoModulo from "./primo_modulo/FrasePrimoModulo"
import IniziaEsercizio from "./primo_modulo/InterfacciaPrimoEsercizio";
import {useSelector} from "react-redux";
import {selectStartTranslation} from "../features/questionsSlice";
import {selectCurrentSentence, selectSentence} from "../features/sentenceSlice";
import {StyledDivider} from "./css_primo_modulo/components_primo_modulo";

import {DndComponentOptions} from "./primo_modulo/translation/DragDropComponents";
import {StyledButton, StyledCard} from "./css_primo_modulo/components_frase";
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
                {<StyledDivider orientation="center">Analisi della frase "{sentence.sentence}"</StyledDivider>}
                <div style={{flexDirection: "column", display: "flex"}}>
                {
                    <StyledCard bordered={true} title="Legenda Tag" style={{ width: 200 }}>
                        <Tag style = {{fontFamily: "OpenDyslexic-Regular", height: "30px", marginBottom: "20px", borderRadius: "20px"}} color="#FF0000"> Sintassi </Tag>
                        <Tag style = {{fontFamily: "OpenDyslexic-Regular", height: "30px", marginBottom: "20px", borderRadius: "20px"}} color="#0032D5"> Parte del discorso </Tag>
                        <Tag style = {{fontFamily: "OpenDyslexic-Regular", height: "30px", marginBottom: "20px", borderRadius: "20px"}} color="#1B9C11"> Morfologia </Tag>
                    </StyledCard>
                }

                    <GetFrasePrimoModulo/>
            </div>
                {<IniziaEsercizio/>}
                {<StyledDivider orientation="center">Traduzione della frase "{sentence.sentence}"</StyledDivider>}
                {showTranslation ? <DndComponentOptions />  : null}
            </div>

            )
    }


export default RenderizzaFrasePrimoModulo;
