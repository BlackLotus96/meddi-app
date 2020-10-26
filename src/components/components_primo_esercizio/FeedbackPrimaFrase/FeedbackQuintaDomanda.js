import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrent,
    selectShowModalOne,
    selectShowErrorFour,
    setShowError,
    setShowModal
} from "../../../features/questionsSlice";
import {selectCurrentSentence} from "../../../features/sentenceSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaPuella} from "../../primo_modulo/error_components/GriglieOutput";
import React, {useState} from "react";
import {selectModalPuella, setModalPuella} from "../../../features/modalSlice";

export function ModalPuella(){
    const dispatch = useDispatch()
    const showModalPuella = useSelector(selectModalPuella)
    const showError = useSelector(selectShowErrorFour)


    function onClickArea(){
        dispatch(setModalPuella({ valueOfBool: false}))
        dispatch(setShowError({numberSentence: 0, numberQuestion: 4, valueOfBool: false}))

    }


    return(
        <StyledModal
                title="Declinazione di Puella"
                visible={showModalPuella || showError}
                width={1200}
                onCancel={onClickArea}
                footer={null}

        >

            <GrigliaPuella />


        </StyledModal>
    )
}