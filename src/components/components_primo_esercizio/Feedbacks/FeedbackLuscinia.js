import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorThree, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {
    GrigliaLuscinia,
} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {selectModalAncilla, selectModalLuscinia, setModalLuscinia} from "../../../features/modalSlice";

export function TabellaLuscinia(){
    const showModalLuscinia = useSelector(selectModalLuscinia)
    const dispatch = useDispatch()

function onClickArea(){

    dispatch(setModalLuscinia({valueOfBool: false}))
}

    return (

            <StyledModal
                title="Tabella Luscinia, ae"
                visible={showModalLuscinia}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                    <GrigliaLuscinia/>

            </StyledModal>

    )
}