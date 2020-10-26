import React, {useState} from "react";
import {
    selectCurrent,
    selectQuestion,
    selectShowClickableSentence,
    selectStartExercise,
    setStartExercise
} from "../../features/questionsSlice";
import {ButtonIniziaEsercizio, StyledContainerCheckboxQuestion} from "../css_primo_modulo/components_primo_modulo";
import {StyledPrimoEsercizio} from "../css_primo_modulo/components_frase";
import {useDispatch, useSelector} from "react-redux";
import {ContenitoreDomandaOpzione} from "./InterfacciaPrimoEsercizio";
import {selectCurrentSentence} from "../../features/sentenceSlice";
import {ButtonPrecedente, ButtonSuccessivo} from "./FrasePrimoModulo";
import {ContainerQuestions} from "./ContainerQuestions";


export function IniziaEsercizioDue(){
    const startExercise = useSelector(selectStartExercise)
    const questionNumber  = useSelector(selectCurrent)
    const question = useSelector(selectQuestion)
    const dispatch = useDispatch();
    const showClickableSentence = useSelector(selectShowClickableSentence)
    const [checked, setChecked] = useState(false)
    const numberSentence = useSelector(selectCurrentSentence)
    console.log("DOMANDA:" ,question)


    return (
        <StyledPrimoEsercizio>
            <ButtonPrecedente/>
            <ButtonIniziaEsercizio type="button" onClick={() => dispatch(setStartExercise({valueOfBool: true}))} className="button-inizio">
                        Inizia il secondo esercizio!
            </ButtonIniziaEsercizio>
            <ButtonSuccessivo/>
        </StyledPrimoEsercizio>
    )
}

function OpzioneQuiz(props) {
    
}

export default IniziaEsercizioDue