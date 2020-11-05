import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorSeven, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaFiliam, GrigliaSostAdj} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaSostAdj(){
    const showErrorSeven = useSelector(selectShowErrorSeven)

    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 3, numberQuestion: 7, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Tabella Domina et Bona "
                visible={showErrorSeven}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaSostAdj/>

            </StyledModal>

    )
}