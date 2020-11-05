import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorThree, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaRosam,} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaRosam(){
    const showErrorThree = useSelector(selectShowErrorThree)

    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 1, numberQuestion: 3, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Tabella Rosa, ae"
                visible={showErrorThree}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaRosam/>

            </StyledModal>

    )
}