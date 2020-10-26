import {Collapse} from "antd";
import {DomandaPostErrore} from "../../primo_modulo/InterfacciaPrimoEsercizio";
import {GrigliaNominativiUno} from "../../primo_modulo/error_components/GriglieOutput";

import React, {useState} from "react";
import {ToastsStore} from "react-toasts";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {success, error} from "../../message_components/message_to_answers";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrent,
    setShowError,
    setShowModal,
    selectQuestion,
    selectShowModalOne, selectShowErrorOne, selectSetQuestions
} from "../../../features/questionsSlice";
import {selectModalPredicatoVerbale, setModalPredicatoVerbale} from "../../../features/modalSlice";
import {selectCurrentSentence} from "../../../features/sentenceSlice";

export function DomandaNominativi(){
    const numberSentence = useSelector(selectSetQuestions)
    const numberQuestion = useSelector(selectCurrent)
    const showErrorOne = useSelector(selectShowErrorOne)
    const showModalOne = useSelector(selectShowModalOne)
    const question = useSelector(selectQuestion)
    const dispatch = useDispatch()
    function gestisciDomandaNominativi(e){
        if (e.target.value===question.domandaSbagliata.risposta){
            //console.log(e.target.value)
            success()
            dispatch(setShowError({numberSentence: numberSentence, numberQuestion: numberQuestion, valueOfBool: false}))
        }
        else{
            //console.log(e.target.value)
            error()
            dispatch(setShowModal({numberSentence: numberSentence, numberQuestion: numberQuestion, valueOfBool: true}))

        }
    }

    return (

            <StyledModal
                title="Sei sicuro/a?"
                visible={showErrorOne}
                closable={false}
                width={700}
                footer={null}
            >
            <>
        <DomandaPostErrore  gestisciDomanda={gestisciDomandaNominativi}/>
        {showModalOne ? <TabelleNominativi/> : null}
        </>

            </StyledModal>
    )
}
export function TabelleNominativi(){
    const numberQuestion = useSelector(selectCurrent)
    const showModalOne = useSelector(selectShowModalOne)
    const dispatch = useDispatch()
    const numberSentence = useSelector(selectCurrentSentence)
    const { Panel } = Collapse
    function Text(props){
    return(
        props.isHeader ? <span style={{color: props.color, fontWeight: "bolder", fontSize: "x-large"}}>{props.text}</span> :  <span style={{color: props.color, marginLeft: "30px", fontWeight:"bolder"}}>{props.text}</span>
    )}
    function onClickArea(){
        dispatch(setShowModal({numberSentence: 0, numberQuestion: 1, valueOfBool: false}))
    }


    return(
        <StyledModal
                title="Declinazione di Puella e Schola"
                visible={showModalOne}
                width={1200}
                onCancel={onClickArea}
                footer={<Collapse ghost>
                            <Panel header={"RICORDA"}>
                                <Collapse ghost>
                                    <Panel header={<Text color="black" text="Quando c'è 1 NOMINATIVO..." isHeader={true}/>}> <Text color="black" text="Verbo ESSERE = Predicato VERBALE" /></Panel>
                                    <Panel header={<Text color="black" text="Quando ci sono 2 NOMINATIVI..." isHeader={true}/>}> <Text color="black" text="Verbo ESSERE = Predicato NOMINALE" /></Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>}

        >

            <GrigliaNominativiUno />


        </StyledModal>
    )
}

export function TabellaPredicatoVerbale(){
    const showPredicatoVerbale = useSelector(selectModalPredicatoVerbale)
    const dispatch = useDispatch()

    const text1 = <h2>Il predicato verbale</h2>
    const text2 = <h2 style="color:red"> est</h2>

    function onClickArea(){
        dispatch(setModalPredicatoVerbale({valueOfBool: false}))
    }


    return(
        <StyledModal
                title="Predicato Verbale"
                visible={showPredicatoVerbale}
                width={650}
                onCancel={onClickArea}
                footer={null}

        >

            <h2>Il valore del verbo è intransitivo</h2>


        </StyledModal>
    )
}
