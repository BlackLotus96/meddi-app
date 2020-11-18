import {StyledContainerFrase} from "../../css_primo_modulo/components_frase";
import stopIcon from "../../../icons/stop.png";
import React, {useState} from "react";
import useSound from "use-sound";
import puellaestinschola from "../../../audio/puellaestinschola.m4a";
import {PlayCircleOutlined} from "@ant-design/icons"

export function AudioComponent(props){
    const [play, {stop, isPlaying}] = useSound(puellaestinschola)
    const onClick = () => {
        if (isPlaying === false) {
            play()
        } else {
            stop()
        }
        console.log(isPlaying)
    }
        return (
            <div>{
                isPlaying ?
                    <div style={{fontSize:"large", display: "flex", flexDirection: "column"}}> Stop! <img onClick={onClick} src={stopIcon} width={40} height={40}/> </div>
                    :
                    <div style={{fontSize:"large", display: "flex", flexDirection: "column"}}> Ascolta frase!<PlayCircleOutlined style={{fontSize: 40}} onClick={onClick}/> </div>
            }</div>
            )
}


