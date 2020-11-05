import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorSix, selectShowErrorSeven, selectShowErrorThree, setShowError} from "../../../features/questionsSlice";
import {StyledDivider, StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {
    GrigliaConcordanza,
} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {selectModalAncilla, selectModalLuscinia, setModalLuscinia} from "../../../features/modalSlice";

export function TabellaCercaDiz(){
    const showErrorSix = useSelector(selectShowErrorSix)
    const showErrorSeven = useSelector(selectShowErrorSeven)
    const dispatch = useDispatch()
    function Text(props){
    return(
        <span style={{color: props.color, fontWeight: "bolder", fontSize: "x-large"}}>{props.text}</span>
    )}
function onClickArea(){

    dispatch(setShowError({numberSentence: 3, numberQuestion:6, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 3, numberQuestion:7, valueOfBool: false}))
}

    return (

            <StyledModal
                title="CONCORDANZA DELL'AGGETTIVO"
                visible={showErrorSix || showErrorSeven}
                onCancel={onClickArea}
                width={700}
                bodyStyle={{height:"auto"}}
                footer={null}
            >
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Text text = "NOTA BENE!" color = "red"/>
                    <br/>
                    <Text text = "Un "/><Text text = "aggettivo " color = "blue"/>
                    <Text text = "e "/>
                    <Text text = "un "/><Text text = "sostantivo " color = "red"/>
                    <br/>
                    <Text text = "concordano sul "/>
                    <br/>
                    <Text text = "GENERE (maschile, femminile e neutro)" color = "orange"/>
                    <br/>
                    <Text text = "e sul "/>
                    <br/>
                    <Text text = "CASO ( i 6 casi delle Declinazioni)" color = "green"/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <StyledDivider orientation="center">Concordanza Sostantivo-Aggettivo</StyledDivider>
                <GrigliaConcordanza/>
            </StyledModal>

    )
}