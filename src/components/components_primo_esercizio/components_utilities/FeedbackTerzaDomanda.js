import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrent,
    selectShowErrorOne,
    selectShowErrorTwo,
    selectShowModalOne,
    setShowError,
    setShowModal
} from "../../../features/questionsSlice";
import {selectCurrentSentence} from "../../../features/sentenceSlice";
import {Collapse} from "antd";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaPulchrae} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaPulchrae(){
    const showErrorTwo = useSelector(selectShowErrorTwo)
    const dispatch = useDispatch()
    function onClickArea(){
         dispatch(setShowError({numberSentence: 1, numberQuestion: 2, valueOfBool: false}))
    }
    return(
        <StyledModal
                title="Declinazione di Pulchrae"
                visible={showErrorTwo}
                width={1200}
                onCancel={onClickArea}
                bodyStyle={{height:"auto"}}
                footer={null}


        >

            <GrigliaPulchrae />


        </StyledModal>
    )
}