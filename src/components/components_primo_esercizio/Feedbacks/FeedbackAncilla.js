import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorThree, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaAncilla, GrigliaVerbiTransitiviIntransitivi} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {selectModalAncilla, setModalAncilla} from "../../../features/modalSlice";

export function TabellaAncilla(){
    const showModalAncilla = useSelector(selectModalAncilla)
    const showErrorThree = useSelector(selectShowErrorThree)
    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setModalAncilla({valueOfBool: false}))
    dispatch(setShowError({numberSentence: 2, numberQuestion: 3, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Tabella Ancill, ae"
                visible={showModalAncilla || showErrorThree}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaAncilla/>

            </StyledModal>

    )
}