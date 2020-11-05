import {useDispatch, useSelector} from "react-redux";
import {selectCurrent, selectShowErrorOne, selectShowErrorZero, setShowError} from "../../../features/questionsSlice";
import {selectCurrentSentence} from "../../../features/sentenceSlice";
import React, {useState} from "react";
import {Menu} from "antd";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {
    GrigliaVerboAmat,
    GrigliaAmatSenzaTraduzione
} from "../../primo_modulo/error_components/GriglieOutput";

export function TabellaAmat(props){
    const numberQuestion = useSelector(selectCurrent)
    const numberSentence = useSelector(selectCurrentSentence)
    const showErrorOne = useSelector(selectShowErrorOne)
    const showErrorAmat = useSelector(selectShowErrorZero)
    const dispatch = useDispatch()
    const [viewer, setViewer] = useState(true)
    const [key, setKey] = useState("senza")

    function MenuVerboEssere() {

        function handleClick(e){
            if (e.key === "con") {
                setViewer(true)
                setKey("con")
            }
            else{
                setViewer(false)
                setKey("senza")
            }
            //console.log('click ', e);
          };
        return (
        <Menu style={{backgroundColor: 'lightgoldenrodyellow'}} onClick={handleClick}  defaultSelectedKeys={['senza']} selectedKeys={key} mode="horizontal">
            <Menu.Item key="con">
                CON Traduzione
            </Menu.Item>
            <Menu.Item key="senza">
                SENZA Traduzione
            </Menu.Item>
        </Menu>
        )
    }
function onClickArea(){
    dispatch(setShowError({numberSentence: 3, numberQuestion: 0, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 3, numberQuestion: 1, valueOfBool: false}))
}

    return (

            <StyledModal
                title={<MenuVerboEssere/>}
                visible={showErrorAmat || showErrorOne}
                onCancel={onClickArea}
                width={1000}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                {key==="con" &&  <GrigliaVerboAmat/> || key==="senza" && <GrigliaAmatSenzaTraduzione/>}

            </StyledModal>

    )
}