import {useSelector} from "react-redux";
import {selectStartExercise} from "../../features/questionsSlice";
import {StyledContainerCheckboxQuestion} from "../css_primo_modulo/components_primo_modulo";
import React from "react";
import {ContenitoreDomandaOpzione} from "./InterfacciaPrimoEsercizio";

export function ContainerQuestions(props) {

    const startExercise = useSelector(selectStartExercise)
    return(
        <StyledContainerCheckboxQuestion style={{display: startExercise}}>
            <ContenitoreDomandaOpzione  question={props.question}/>
        </StyledContainerCheckboxQuestion>
    )
}