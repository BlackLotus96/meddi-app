import {useDispatch, useSelector} from "react-redux";
import {

    selectShowErrorTwo,

    setShowError,

} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {

    GrigliaVerbiTransitiviIntransitivi
} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {Collapse} from "antd";

export function TabellaVerbiTransitiviIntransitivi(){
    const showErrorTwo = useSelector(selectShowErrorTwo)

    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 1, numberQuestion: 2, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 2, numberQuestion: 2, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 3, numberQuestion: 2, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Verbi Transitivi e Intransitivi"
                visible={showErrorTwo}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaVerbiTransitiviIntransitivi/>

            </StyledModal>

    )
}

export function InformazioneTabellaTransitivi(){
    const showErrorTwo = useSelector(selectShowErrorTwo)
     const dispatch = useDispatch()
    function onClickArea(){
    dispatch(setShowError({numberSentence: 1, numberQuestion: 2, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 2, numberQuestion: 2, valueOfBool: false}))


    }

    return (

            <StyledModal
                title="Verbi Transitivi e Intransitivi"
                visible={showErrorTwo}
                onCancel={onClickArea}
                width={400}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                <h2>
                    Fai attenzione!<br/>
                    <br/>
                    Verbo con <h2 style = {{color: "red"}}>valore assoluto</h2>
                    <br/>
                    In una frase se un <h2 style = {{color: "red"}}>VERBO è TRANSITIVO</h2><br/>
                    <u>non sempre</u> c'è un <h2 style = {{color: "red"}}>ACCUSATIVO</h2> (complemento oggetto).
                </h2>

            </StyledModal>

    )
}