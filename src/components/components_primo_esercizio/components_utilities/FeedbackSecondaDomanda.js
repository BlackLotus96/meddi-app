import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrent,
    selectShowErrorOne,
    selectShowModalOne,
    setShowError,
    setShowModal
} from "../../../features/questionsSlice";
import {selectCurrentSentence} from "../../../features/sentenceSlice";
import {Collapse} from "antd";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaDominae} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaDominae(){
    const showErrorOne = useSelector(selectShowErrorOne)
    const dispatch = useDispatch()
    function onClickArea(){
         dispatch(setShowError({numberSentence: 1, numberQuestion: 3, valueOfBool: false}))
    }
    return(
        <StyledModal
                title="Declinazione di Dominae"
                visible={showErrorOne}
                width={1200}
                onCancel={onClickArea}
                bodyStyle={{height:"auto"}}
                footer={null}


        >

            <GrigliaDominae />


        </StyledModal>
    )
}