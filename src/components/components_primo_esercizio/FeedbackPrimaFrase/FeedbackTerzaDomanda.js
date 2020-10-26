import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrent,
    selectSetQuestions,
    selectShowErrorTwo,
    selectVerbsModalThree,
    selectProva,
    setShowError,
    setShowModal,
    selectShowModalThree, selectShowErrorThree
} from "../../../features/questionsSlice";
import {StyledModal, StyledPanel} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaVerbiDiMoto, GrigliaVerbiStatoMoto} from "../../primo_modulo/error_components/GriglieOutput";
import React from "react";
import {Collapse} from "antd";

export function TabellaComplementiLuogo(){
    const numberQuestion = useSelector(selectCurrent)
    const showErrorTwo = useSelector(selectShowErrorTwo)
    const showErrorThree = useSelector(selectShowErrorThree)
    const showModalThree = useSelector(selectShowModalThree)
    const dispatch = useDispatch()
    const numberSentence = useSelector(selectSetQuestions)

    const prova = useSelector(selectProva)
    console.log(prova)
    function Text(props){
    return(
        props.isHeader ? <span style={{color: props.color, fontWeight: "bolder", fontSize: "x-large"}}>{props.text}</span> :  <span style={{color: props.color, marginLeft: "30px", fontWeight:"bolder"}}>{props.text}</span>
    )}
function onClickArea(){
    dispatch(setShowError({numberSentence: 0, numberQuestion: 2, valueOfBool: false}))
}

    return (

            <StyledModal
                title="Verbi di Stato e di Moto"
                visible={showErrorTwo}
                onCancel={onClickArea}
                width={1200}
                bodyStyle={{height:"auto"}}
                footer={<Collapse ghost>
                            <StyledPanel header={"RICORDA"}>
                                <Collapse ghost>
                                    <StyledPanel header={<Text color="black" text="VERBI DI MOTO" isHeader={true}/>}><Text color="black" text="MOTO A LUOGO oppure MOTO DA LUOGO"/></StyledPanel>
                                    <StyledPanel header={<Text color="black" text="VERBI DI STATO" isHeader={true}/>}><Text color="black" text="STATO IN LUOGO"/></StyledPanel>
                                </Collapse>
                            </StyledPanel>
                        </Collapse>}
            >

                    <GrigliaVerbiStatoMoto/>

            </StyledModal>

    )
}