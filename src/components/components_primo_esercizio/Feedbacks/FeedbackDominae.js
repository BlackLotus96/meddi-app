import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorFour, selectShowErrorThree, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaDominae, GrigliaVerbiTransitiviIntransitivi} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";

export function TabellaDominae(){
    const showErrorThree = useSelector(selectShowErrorThree)
    const showErrorFour = useSelector(selectShowErrorFour)
    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 1, numberQuestion: 4, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 2, numberQuestion: 3, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 3, numberQuestion: 4, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 3, numberQuestion: 3, valueOfBool: false}))

}

    return (

            <StyledModal
                title="Tabella Domina, ae"
                visible={showErrorFour || showErrorThree}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaDominae/>

            </StyledModal>

    )
}