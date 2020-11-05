import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorSix, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaFiliam} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaFiliam(){
    const showErrorSix = useSelector(selectShowErrorSix)

    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 2, numberQuestion: 6, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Tabella Filia, ae"
                visible={showErrorSix}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaFiliam/>

            </StyledModal>

    )
}