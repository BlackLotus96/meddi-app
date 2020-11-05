import {useDispatch, useSelector} from "react-redux";
import {selectShowErrorFive, selectShowErrorSix, setShowError} from "../../../features/questionsSlice";
import {StyledModal} from "../../css_primo_modulo/components_primo_modulo";
import {
    GrigliaBonamPlurale, GrigliaBonamSingolare,

} from "../../primo_modulo/error_components/GriglieOutput";
import React, {useState} from "react";
import {Menu} from "antd";

export function TabellaBonam(){
    const showErrorFive = useSelector(selectShowErrorFive)

    const dispatch = useDispatch()
    const [viewer, setViewer] = useState(true)
    const [key, setKey] = useState("SINGOLARE")

    function MenuSingolarePlurale() {

        function handleClick(e){
            if (e.key === "PLURALE") {
                setViewer(true)
                setKey("PLURALE")
            }
            else{
                setViewer(false)
                setKey("SINGOLARE")
            }
            //console.log('click ', e);
          };
        return (
        <Menu style={{backgroundColor: 'lightgoldenrodyellow'}} onClick={handleClick}  defaultSelectedKeys={['SINGOLARE']} selectedKeys={key} mode="horizontal">
            <Menu.Item key="SINGOLARE">
                SINGOLARE
            </Menu.Item>
            <Menu.Item key="PLURALE">
                PLURALE
            </Menu.Item>
        </Menu>
        )
    }



function onClickArea(){
    dispatch(setShowError({numberSentence: 3, numberQuestion: 5, valueOfBool: false}))
}

    return (

            <StyledModal
                title={<MenuSingolarePlurale/>}
                visible={showErrorFive}
                onCancel={onClickArea}
                width={800}
                bodyStyle={{height:"auto"}}
                footer={null}
            >

                     {key==="SINGOLARE" &&  <GrigliaBonamSingolare/> || key==="PLURALE" && <GrigliaBonamPlurale/>}

            </StyledModal>

    )
}