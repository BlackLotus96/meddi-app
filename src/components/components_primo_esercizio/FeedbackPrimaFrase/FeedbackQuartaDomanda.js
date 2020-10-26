import React from "react";
import {DomandaPostErrore} from "../../primo_modulo/InterfacciaPrimoEsercizio";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {success, error} from "../../message_components/message_to_answers";
import {GrigliaComplementi, GrigliaVerbiStatoMoto} from "../../primo_modulo/error_components/GriglieOutput";
import {Collapse} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrent,
    selectQuestion, selectSetQuestions,
    selectShowErrorThree, selectShowErrorTwo, selectShowModalThree,
    setShowError,
    setShowModal
} from "../../../features/questionsSlice";
import {TabellaComplementiLuogo} from "./FeedbackTerzaDomanda";

export function ComplementoStatoInLuogo(){

    const numberQuestion = useSelector(selectCurrent)
    const numberSentence = useSelector(selectSetQuestions)
    const showErrorTwo = useSelector(selectShowErrorTwo)
    const showErrorThree = useSelector(selectShowErrorThree)
    const showModalThree = useSelector(selectShowModalThree)
    const dispatch = useDispatch()
    const question = useSelector(selectQuestion)
    const { Panel } = Collapse


    function gestisciDomandaComplementi(e){
       if (e.target.value===question.domandaSbagliata.risposta){
            success()
            dispatch(setShowError({numberSentence: 0, numberQuestion: 3, valueOfBool: false})) // temporaneo
       }
       else{
           error()
           dispatch(setShowError({numberSentence: 0, numberQuestion: 2, valueOfBool: true}))
       }
    }
    return(
            <StyledModal
                    title="ATTENZIONE! GUARDA BENE IL VERBO!"
                    visible={showErrorThree}
                    style = {{height: 1000}}
                    width={1000}
                    closable={false}
                    footer={null}
            >

            {showErrorTwo ? <TabellaComplementiLuogo/>: <DomandaPostErrore gestisciDomanda={gestisciDomandaComplementi}/>}
            </StyledModal>

    )
}

export function ModalGrigliaComplementi(){
    const numberSentence = useSelector(selectSetQuestions)
    const numberQuestion = useSelector(selectCurrent)
    const dispatch = useDispatch()
    const showModalThree = useSelector(selectShowModalThree)
    function onClickArea(){
        dispatch(setShowModal({numberSentence: 0, numberQuestion: 3, valueOfBool: false}))
    }
    return(
        <StyledModal
                title="Tabella Complemento di Luogo con la preposizione IN"
                visible={showModalThree}
                width={1200}
                onCancel={onClickArea}
                footer={false}

        >

            <GrigliaComplementi/>


        </StyledModal>
    )
}