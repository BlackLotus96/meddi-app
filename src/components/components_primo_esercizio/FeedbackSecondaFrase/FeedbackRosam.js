import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorFive, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaRosam,} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaRosam(){
    const showErrorFive = useSelector(selectShowErrorFive)

    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 1, numberQuestion: 5, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Tabella Rosa, ae"
                visible={showErrorFive}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaRosam/>

            </StyledModal>

    )
}