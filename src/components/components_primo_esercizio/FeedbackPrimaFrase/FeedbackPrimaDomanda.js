import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {GrigliaVerboEssere, GrigliaVerboEssereSenzaTraduzione} from "../../primo_modulo/error_components/GriglieOutput";
import React,  {useState} from "react";
import { Menu } from 'antd'
import 'antd/dist/antd.css';
import {useSelector, useDispatch} from "react-redux";
import {selectCurrent, selectShowErrorZero, setShowError} from "../../../features/questionsSlice";
import {selectCurrentSentence} from "../../../features/sentenceSlice";

export function TabellaEst(props){
    const numberQuestion = useSelector(selectCurrent)
    const numberSentence = useSelector(selectCurrentSentence)
    const showErrorZero = useSelector(selectShowErrorZero)
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
    dispatch(setShowError({numberSentence: 0, numberQuestion: 0, valueOfBool: false}))
    dispatch(setShowError({numberSentence: 1, numberQuestion: 0, valueOfBool: false}))
    console.log("ciao")
}

    return (

            <StyledModal
                title={<MenuVerboEssere/>}
                visible={showErrorZero}
                onCancel={onClickArea}
                width={1000}
                bodyStyle={{height:450}}
                footer={null}
            >

                {key==="con" &&  <GrigliaVerboEssere/> || key==="senza" && <GrigliaVerboEssereSenzaTraduzione/>}

            </StyledModal>

    )
}