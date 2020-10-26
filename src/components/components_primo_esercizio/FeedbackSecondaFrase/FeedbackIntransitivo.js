import {useDispatch, useSelector} from "react-redux";
import {

    selectShowErrorTwo,

    setShowError,

} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {

    GrigliaVerbiTransitiviIntransitivi
} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {Collapse} from "antd";

export function TabellaVerbiTransitiviIntransitivi(){
    const showErrorTwo = useSelector(selectShowErrorTwo)

    const dispatch = useDispatch()



function onClickArea(){
    dispatch(setShowError({numberSentence: 1, numberQuestion: 2, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Verbi Transitivi e Intransitivi"
                visible={showErrorTwo}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaVerbiTransitiviIntransitivi/>

            </StyledModal>

    )
}