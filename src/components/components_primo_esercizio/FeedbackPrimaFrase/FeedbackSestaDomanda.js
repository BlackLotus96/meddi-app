import {useDispatch, useSelector} from "react-redux";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaPuella, GrigliaSchola} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {selectModalSchola, setModalSchola} from "../../../features/modalSlice";
import {selectShowErrorFour, selectShowErrorFive, setShowError} from "../../../features/questionsSlice";

export function ModalSchola(){
    const dispatch = useDispatch()
    const showModalSchola = useSelector(selectModalSchola)
    const showError = useSelector(selectShowErrorFive)


    function onClickArea(){
        dispatch(setModalSchola({ valueOfBool: false}))
        dispatch(setShowError({numberSentence: 0, numberQuestion: 5, valueOfBool: false}))

    }


    return(
        <StyledModal
                title="Declinazione di Schola"
                visible={showModalSchola || showError}
                width={1200}
                onCancel={onClickArea}
                footer={null}

        >

            <GrigliaSchola />


        </StyledModal>
    )
}