import {
    ColonnaTabella,
    RigaTabella,
    ContainerGrid,
    StyledPanel,
    StyledCollapse, StyledDivider, StyledRadioGroup, RadioButtonSwap, TextOption
} from "../../css_primo_modulo/components_primo_modulo";
import {selectCurrent, selectShowErrorOne, selectShowErrorZero} from "../../../features/questionsSlice";
import {
    selectVerbiDiStato,
    selectVerbiDiMoto,
    selectVerbiTransitivi,
    selectVerbiIntransitivi
} from "../../../features/modalSlice";
import {Divider} from "antd";
import {CloseOutlined, PlusOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {Collapse, Checkbox, Radio} from "antd";
import {useSelector} from "react-redux";
import {DivRow, CheckboxModal} from "../../css_primo_modulo/components_primo_modulo";
import {StyledTag} from "../../css_primo_modulo/components_frase";
import caneGiardino from "../../../icons/immaginiVerbiDiStato/Il cane sta in giardino.jpg";
import gattoTavolo from "../../../icons/immaginiVerbiDiStato/Il gatto è sul tavolo.jpg";
import bambinoCasa from "../../../icons/immaginiVerbiDiStato/Il bambino sta a casa.jpg";
import ragazzaCasa from "../../../icons/immaginiVerbiDiMoto/La ragazza va a casa.jpg";
import ragazzaMercato from "../../../icons/immaginiVerbiDiMoto/La ragazza è andata al mercato.jpg";
import lucaLondra from "../../../icons/immaginiVerbiDiMoto/Luca parte a Londra.jpg";
import CheckboxGroup from "antd/es/checkbox/Group";

export const GrigliaVerboEssereSenzaTraduzione = (props) => {
    return(
                <ContainerGrid>
                    <ColonnaTabella span={10}>
                        <RigaTabella header="true">SINGOLARE</RigaTabella>
                        <StyledDivider />
                        <RigaTabella parola="true">SUM</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">ES</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">EST</RigaTabella>
                    </ColonnaTabella>

                    <ColonnaTabella span={10}>
                        <RigaTabella header="true">PLURALE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">SUMUS</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">ESTIS</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">SUNT</RigaTabella>
                    </ColonnaTabella>

                </ContainerGrid>
    )
}
export const GrigliaPraebetSenzaTraduzione = (props) => {
    const showErrorZero = useSelector(selectShowErrorZero)
    const [isColoredRadice, setIsColoredRadice] = useState(false)
    const [isColoredVocale, setIsColoredVocale] = useState(false)
    const [isColoredDesinenza, setIsColoredDesinenza] = useState(false)
    let objColor = {
        coloreRadice: "blue",
        coloreVocale: "red",
        coloreDesinenza: "green"
    }
    function DivRadice(props){
        return (
            <DivRow style = {{marginRight: "10px"}}   color = {objColor.coloreRadice} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }
    function DivVocaleTematica(props){
        return (
            <DivRow  style = {{marginRight: "10px"}}  color = {objColor.coloreVocale} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }function DivDesinenza(props){
        return (
            <DivRow  color = {objColor.coloreDesinenza} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }
    return(
            <>
                <ContainerGrid>
                    <ColonnaTabella span={6}><RigaTabella><CheckboxModal color={objColor.coloreRadice}onChange={() => setIsColoredRadice(!isColoredRadice)}><TextOption color={objColor.coloreRadice}>Radice</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={6}><RigaTabella><CheckboxModal color={objColor.coloreVocale}onChange={() => setIsColoredVocale(!isColoredVocale)}><TextOption color={objColor.coloreVocale}>Vocale Tematica</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={6}><RigaTabella><CheckboxModal color={objColor.coloreDesinenza}onChange={() => setIsColoredDesinenza(!isColoredDesinenza)}><TextOption color={objColor.coloreDesinenza}>Desinenza</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>

                </ContainerGrid>
                <ContainerGrid>
                    <ColonnaTabella span={10}>
                        <RigaTabella showErrorZero = {showErrorZero} header="true">SINGOLARE</RigaTabella>
                        <StyledDivider />
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"O"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"S"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella showErrorZero = {showErrorZero} parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"T"}/>
                        </RigaTabella>
                    </ColonnaTabella>

                    <ColonnaTabella span={10}>
                        <RigaTabella header="true">PLURALE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"MUS"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"TIS"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"NT"}/>
                        </RigaTabella>
                    </ColonnaTabella>
                </ContainerGrid>
            </>
    )
}
export const GrigliaVerboPraebet = (props) => {
    const showErrorZero = useSelector(selectShowErrorZero)
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)
    const [showColumn3, setShowColumn3] = useState(false)
    const [isColoredRadice, setIscColoredRadice] = useState(false)
    const [isColoredVocale, setIscColoredVocale] = useState(false)
    const [isColoredDesinenza, setIscColoredDesinenza] = useState(false)
    let objColor = {
        coloreRadice: "blue",
        coloreVocale: "red",
        coloreDesinenza: "green"
    }
    function DivRadice(props){
        return (
            <DivRow style = {{marginRight: "10px"}}   color = {objColor.coloreRadice} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }
    function DivVocaleTematica(props){
        return (
            <DivRow  style = {{marginRight: "10px"}}  color = {objColor.coloreVocale} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }function DivDesinenza(props){
        return (
            <DivRow  color = {objColor.coloreDesinenza} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }

    return (<>
                <ContainerGrid>
                    <ColonnaTabella span={6}><RigaTabella><CheckboxModal color={objColor.coloreRadice}onChange={() => setIscColoredRadice(!isColoredRadice)}><TextOption color={objColor.coloreRadice}>Radice</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={6}><RigaTabella><CheckboxModal color={objColor.coloreVocale}onChange={() => setIscColoredVocale(!isColoredVocale)}><TextOption color={objColor.coloreVocale}>Vocale Tematica</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={6}><RigaTabella><CheckboxModal color={objColor.coloreDesinenza}onChange={() => setIscColoredDesinenza(!isColoredDesinenza)}><TextOption color={objColor.coloreDesinenza}>Desinenza</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>

                </ContainerGrid>
                <ContainerGrid>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn3 ? <PlusOutlined onClick={()=>setShowColumn3(false)}/> : <CloseOutlined onClick={()=>setShowColumn3(true)}/>}</RigaTabella></ColonnaTabella>
                </ContainerGrid>
                <ContainerGrid>
                    <ColonnaTabella span={4} hide={showColumn0.toString()}>
                        <RigaTabella showErrorZero = {showErrorZero} header="true">SINGOLARE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E"}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"O"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB"}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E "}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"S"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella showErrorZero = {showErrorZero} parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB "}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E "}/>
                            <DivDesinenza  isColored={isColoredDesinenza} testo = {"T"}/>
                        </RigaTabella>
                    </ColonnaTabella>
                    <ColonnaTabella span={4} hide={showColumn1.toString()}>
                        <RigaTabella header="true">TRADUZIONE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Io OFFRO</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Tu OFFRI</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Egli OFFRE</RigaTabella>
                    </ColonnaTabella>
                    <ColonnaTabella span={4} hide={showColumn2.toString()}>
                        <RigaTabella header="true">PLURALE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB "}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E "}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"MUS"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB "}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E "}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"TIS"}/>
                        </RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">
                            <DivRadice isColored = {isColoredRadice} testo={"PRAEB "}/>
                            <DivVocaleTematica isColored ={isColoredVocale} testo = {"E "}/>
                            <DivDesinenza isColored={isColoredDesinenza} testo = {"NT"}/>
                        </RigaTabella>
                    </ColonnaTabella>
                    <ColonnaTabella span={4} hide={showColumn3.toString()}>
                        <RigaTabella header="true">TRADUZIONE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Noi OFFRIAMO</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Voi OFFRITE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Essi OFFRONO</RigaTabella>
                    </ColonnaTabella>
                </ContainerGrid>
        </>
    )
}

export const GrigliaVerboEssere = (props) => {
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)
    const [showColumn3, setShowColumn3] = useState(false)
    return (<>
                <ContainerGrid>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
                    <ColonnaTabella span={4}><RigaTabella>{showColumn3 ? <PlusOutlined onClick={()=>setShowColumn3(false)}/> : <CloseOutlined onClick={()=>setShowColumn3(true)}/>}</RigaTabella></ColonnaTabella>
                </ContainerGrid>
                <ContainerGrid>
                    <ColonnaTabella span={4} hide={showColumn0.toString()}>
                        <RigaTabella header="true">SINGOLARE</RigaTabella>
                        <StyledDivider />
                        <RigaTabella parola="true">SUM</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">ES</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">EST</RigaTabella>
                    </ColonnaTabella>
                    <ColonnaTabella span={4} hide={showColumn1.toString()}>
                        <RigaTabella header="true">TRADUZIONE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Io sono</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Tu sei</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Egli è</RigaTabella>
                    </ColonnaTabella>
                    <ColonnaTabella span={4} hide={showColumn2.toString()}>
                        <RigaTabella header="true">PLURALE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">SUMUS</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">ESTIS</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella parola="true">SUNT</RigaTabella>
                    </ColonnaTabella>
                    <ColonnaTabella span={4} hide={showColumn3.toString()}>
                        <RigaTabella header="true">TRADUZIONE</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Noi siamo</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Voi siete</RigaTabella>
                        <StyledDivider/>
                        <RigaTabella traduzione="true">Essi sono</RigaTabella>
                    </ColonnaTabella>
                </ContainerGrid>
        </>
    )
}


export const GrigliaVerbiTransitiviIntransitivi = () => {
    return (
        <>
         <ContainerGrid>
             <GrigliaVerbiTransitivi/>
             <GrigliaVerbiIntransitivi/>
         </ContainerGrid>
        </>
    )
}

export const GrigliaVerbiTransitivi = () =>  {

    const arrayVT = useSelector(selectVerbiTransitivi)
    const ArrayFraseTransitiva = arrayVT.map(
                                            (oggetto, index) => (Object.values(oggetto))
                                     )
    //console.log(ObjectTransitivi)
    //console.log(ObjectTransitivi[0])
    //console.log(ObjectTransitivi[1].map(ObjectParteFrase => <span>{ObjectParteFrase.testo}</span>))
    //console.log(ObjectTransitivi.map((obj, index) => (obj[0], obj[1])))

    return(
        <ColonnaTabella index={0}  span={12}>
                     <Collapse ghost defaultActiveKey={['0', '1', '2']}>
                     <RigaTabella parola="true" style={{color: "darkorange"}}>VERBI TRANSITIVI</RigaTabella>
                         {
                             ArrayFraseTransitiva.map((array, indexArray) => (
                             <StyledPanel
                                 key={indexArray.toString()}
                                 header={<Text color="darkorange" text={array[0]}/>}>
                                 {array[1].map(parteFrase =>
                                            (<Text                      color="black"
                                                                        backgroundColor={"darkorange"}
                                                                        tipo={parteFrase.tipo}
                                                                        parteDiscorso={parteFrase.parteDiscorso}
                                                                        text={parteFrase.testo}/>))


                                     }

                             </StyledPanel>))
                         }
                     </Collapse>
        </ColonnaTabella>
        )
}
export const GrigliaVerbiIntransitivi = () =>  {

    const arrayIT = useSelector(selectVerbiIntransitivi)
    const ArrayFraseIntransitiva = arrayIT.map(
                                            (oggetto, index) => (Object.values(oggetto))
                                     )
    //console.log(arrayVerbiIntransitivi)
    return(
        <ColonnaTabella index={0}  span={12}>
                     <Collapse ghost defaultActiveKey={['0', '1', '2']}>
                     <RigaTabella parola="true" style={{color: "darkgreen"}}>VERBI INTRANSITIVI</RigaTabella>
                         {
                             ArrayFraseIntransitiva.map((array, indexArray) => (
                             <StyledPanel
                                 key={indexArray.toString()}
                                 header={<Text color="darkgreen" text={array[0]}/>}>
                                 {array[1].map(parteFrase =>
                                            (<Text  color="black"
                                                    backgroundColor={"lightgreen"}
                                                    tipo={parteFrase.tipo}
                                                    parteDiscorso={parteFrase.parteDiscorso}
                                                    text={parteFrase.testo}/>))


                                     }

                             </StyledPanel>))
                         }
                     </Collapse>
        </ColonnaTabella>
        )
}
export const GrigliaDominae = (props) => {
    const [isColoredRadice, setIscColoredRadice] = useState(false)
    const [isColoredDesinenza, setIsColoredDesinenza] = useState(false)
    let objColor = {
        coloreRadice: "blue",
        coloreDesinenza: "green"
    }
    function DivRadice(props){
        return (
            <DivRow style = {{marginRight: "10px"}}   color = {objColor.coloreRadice} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }
    function DivDesinenza(props) {
        return (
            <DivRow style={{marginRight: "10px"}} color={objColor.coloreDesinenza} isColored={props.isColored}>{props.testo}</DivRow>
        )
    }
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)


    return(
        <>
        <ContainerGrid>
            <ColonnaTabella span={12}><RigaTabella><CheckboxModal color={objColor.coloreRadice} onChange={() => setIscColoredRadice(!isColoredRadice)}><TextOption color={objColor.coloreRadice}>Radice</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
            <ColonnaTabella span={12}><RigaTabella><CheckboxModal color={objColor.coloreDesinenza} onChange={() => setIsColoredDesinenza(!isColoredDesinenza)}><TextOption color={objColor.coloreDesinenza}>Desinenza</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
            <ColonnaTabella span={3}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
        <ColonnaTabella index={0} hide={showColumn0.toString()} span={3}>
            <RigaTabella header="true">CASI</RigaTabella>
            <RigaTabella rosso="true" caso="true">NOMINATIVO</RigaTabella>
            <RigaTabella rosso="true" caso="true" caso="true">GENITIVO</RigaTabella>
            <RigaTabella rosso="true" caso="true" caso="true">DATIVO</RigaTabella>
            <RigaTabella caso="true">ACCUSATIVO</RigaTabella>
            <RigaTabella caso="true">VOCATIVO</RigaTabella>
            <RigaTabella caso="true">ABLATIVO</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={1} hide={showColumn1.toString()} span={6}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"A"}/>
            </RigaTabella>
            <RigaTabella rosso="true" parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella rosso="true" parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AM"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"A"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"A"}/>
            </RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={2} hide={showColumn2.toString()} span={6}>
            <RigaTabella rosso="true" header="true">PLURALE</RigaTabella>
            <RigaTabella rosso = "true" parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"ARUM"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"IS"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AS"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"DOMIN"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"IS"}/>
            </RigaTabella>
        </ColonnaTabella>
        </ContainerGrid>
        </>
    )
}
export const GrigliaRosam = (props) => {
    const [isColoredRadice, setIscColoredRadice] = useState(false)
    const [isColoredDesinenza, setIsColoredDesinenza] = useState(false)
    let objColor = {
        coloreRadice: "blue",
        coloreDesinenza: "green"
    }
    function DivRadice(props){
        return (
            <DivRow style = {{marginRight: "10px"}}   color = {objColor.coloreRadice} isColored = {props.isColored}>{props.testo}</DivRow>
        )
    }
    function DivDesinenza(props) {
        return (
            <DivRow style={{marginRight: "10px"}} color={objColor.coloreDesinenza} isColored={props.isColored}>{props.testo}</DivRow>
        )
    }
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)


    return(
        <>
        <ContainerGrid>
            <ColonnaTabella span={12}><RigaTabella><CheckboxModal color={objColor.coloreRadice} onChange={() => setIscColoredRadice(!isColoredRadice)}><TextOption color={objColor.coloreRadice}>Radice</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
            <ColonnaTabella span={12}><RigaTabella><CheckboxModal color={objColor.coloreDesinenza} onChange={() => setIsColoredDesinenza(!isColoredDesinenza)}><TextOption color={objColor.coloreDesinenza}>Desinenza</TextOption></CheckboxModal></RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
            <ColonnaTabella span={3}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
        <ColonnaTabella index={0} hide={showColumn0.toString()} span={3}>
            <RigaTabella header="true">CASI</RigaTabella>
            <RigaTabella >NOMINATIVO</RigaTabella>
            <RigaTabella caso="true">GENITIVO</RigaTabella>
            <RigaTabella caso="true">DATIVO</RigaTabella>
            <RigaTabella rosso = "true" caso="true">ACCUSATIVO</RigaTabella>
            <RigaTabella caso="true">VOCATIVO</RigaTabella>
            <RigaTabella caso="true">ABLATIVO</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={1} hide={showColumn1.toString()} span={6}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"A"}/>
            </RigaTabella>
            <RigaTabella  parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella  parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella rosso = "true" parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AM"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"A"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"A"}/>
            </RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={2} hide={showColumn2.toString()} span={6}>
            <RigaTabella header="true">PLURALE</RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"ARUM"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"IS"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AS"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"AE"}/>
            </RigaTabella>
            <RigaTabella parola="true">
                <DivRadice isColored = {isColoredRadice} testo={"ROS"}/>
                <DivDesinenza isColored={isColoredDesinenza} testo={"IS"}/>
            </RigaTabella>
        </ColonnaTabella>
        </ContainerGrid>
        </>
    )
}
export const GrigliaPulchrae = (props) => {
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)


    return(
        <>
        <ContainerGrid>
            <ColonnaTabella span={3}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
        <ColonnaTabella index={0} hide={showColumn0.toString()} span={3}>
            <RigaTabella header="true">CASI</RigaTabella>
            <RigaTabella caso="true">NOMINATIVO</RigaTabella>
            <RigaTabella caso="true">GENITIVO</RigaTabella>
            <RigaTabella caso="true">DATIVO</RigaTabella>
            <RigaTabella caso="true">ACCUSATIVO</RigaTabella>
            <RigaTabella caso="true">VOCATIVO</RigaTabella>
            <RigaTabella caso="true">ABLATIVO</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={1} hide={showColumn1.toString()} span={6}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella parola="true">Pulchr ae</RigaTabella>
            <RigaTabella parola="true">Pulchr a</RigaTabella>
            <RigaTabella parola="true">Pulchr ae</RigaTabella>
            <RigaTabella parola="true">Pulchr am</RigaTabella>
            <RigaTabella parola="true">Pulchr a</RigaTabella>
            <RigaTabella parola="true">Pulchr a</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={2} hide={showColumn2.toString()} span={6}>
            <RigaTabella header="true">PLURALE</RigaTabella>
            <RigaTabella parola="true">Pulchr ae</RigaTabella>
            <RigaTabella parola="true">Pulchr arum</RigaTabella>
            <RigaTabella parola="true">Pulchr is</RigaTabella>
            <RigaTabella parola="true">Pulchr as</RigaTabella>
            <RigaTabella parola="true">Pulchr ae</RigaTabella>
            <RigaTabella parola="true">Pulchr is</RigaTabella>
        </ColonnaTabella>
        </ContainerGrid>
        </>
    )
}
export const GrigliaSchola = (props) => {
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)


    return(
        <>
        <ContainerGrid>
            <ColonnaTabella span={3}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
        <ColonnaTabella index={0} hide={showColumn0.toString()} span={3}>
            <RigaTabella header="true">CASI</RigaTabella>
            <RigaTabella caso="true">NOMINATIVO</RigaTabella>
            <RigaTabella caso="true">GENITIVO</RigaTabella>
            <RigaTabella caso="true">DATIVO</RigaTabella>
            <RigaTabella caso="true">ACCUSATIVO</RigaTabella>
            <RigaTabella caso="true">VOCATIVO</RigaTabella>
            <RigaTabella caso="true">ABLATIVO</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={1} hide={showColumn1.toString()} span={6}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella parola="true">Schol ă</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol am</RigaTabella>
            <RigaTabella parola="true">Schol ă</RigaTabella>
            <RigaTabella parola="true">Schol ā</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={2} hide={showColumn2.toString()} span={6}>
            <RigaTabella header="true">PLURALE</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol arum</RigaTabella>
            <RigaTabella parola="true">Schol is</RigaTabella>
            <RigaTabella parola="true">Schol as</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol is</RigaTabella>
        </ColonnaTabella>
        </ContainerGrid>
        </>
    )
}
export const GrigliaNominativiUno = (props) => {
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)
    const [showColumn3, setShowColumn3] = useState(false)
    const [showColumn4, setShowColumn4] = useState(false)

    return(
        <>
        <ContainerGrid>
            <ColonnaTabella span={3}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={3}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={3}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={3}><RigaTabella>{showColumn3 ? <PlusOutlined onClick={()=>setShowColumn3(false)}/> : <CloseOutlined onClick={()=>setShowColumn3(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={3}><RigaTabella>{showColumn4 ? <PlusOutlined onClick={()=>setShowColumn4(false)}/> : <CloseOutlined onClick={()=>setShowColumn4(true)}/>}</RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
        <ColonnaTabella index={0} hide={showColumn0.toString()} span={3}>
            <RigaTabella header="true">CASI</RigaTabella>
            <RigaTabella verde="true" caso="true">NOMINATIVO</RigaTabella>
            <RigaTabella caso="true">GENITIVO</RigaTabella>
            <RigaTabella caso="true">DATIVO</RigaTabella>
            <RigaTabella caso="true">ACCUSATIVO</RigaTabella>
            <RigaTabella caso="true">VOCATIVO</RigaTabella>
            <RigaTabella blu="true" caso="true">ABLATIVO</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={1} hide={showColumn1.toString()} span={3}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella verde="true" parola="true">Schol ă</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol am</RigaTabella>
            <RigaTabella parola="true">Schol ă</RigaTabella>
            <RigaTabella parola="true">Schol ā</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={2} hide={showColumn2.toString()} span={3}>
            <RigaTabella header="true">PLURALE</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol arum</RigaTabella>
            <RigaTabella parola="true">Schol is</RigaTabella>
            <RigaTabella parola="true">Schol as</RigaTabella>
            <RigaTabella parola="true">Schol ae</RigaTabella>
            <RigaTabella parola="true">Schol is</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={3} hide={showColumn3.toString()} span={3}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella parola="true">Puell ă</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell am</RigaTabella>
            <RigaTabella parola="true">Puell ă</RigaTabella>
            <RigaTabella blu="true" parola="true">Puell ā</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={4} hide={showColumn4.toString()} span={3}>
            <RigaTabella header="true">PLURALE</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell arum</RigaTabella>
            <RigaTabella parola="true">Puell is</RigaTabella>
            <RigaTabella parola="true">Puell as</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell is</RigaTabella>
        </ColonnaTabella>
        </ContainerGrid>
        </>
    )
}

export const GrigliaPuella = (props) => {
    const [showColumn0, setShowColumn0] = useState(false)
    const [showColumn1, setShowColumn1] = useState(false)
    const [showColumn2, setShowColumn2] = useState(false)

    return(
        <>
        <ContainerGrid>
            <ColonnaTabella span={6}><RigaTabella>{showColumn0 ? <PlusOutlined onClick={()=>setShowColumn0(false)}/> : <CloseOutlined onClick={()=>setShowColumn0(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn1 ? <PlusOutlined onClick={()=>setShowColumn1(false)}/> : <CloseOutlined onClick={()=>setShowColumn1(true)}/>}</RigaTabella></ColonnaTabella>
            <ColonnaTabella span={6}><RigaTabella>{showColumn2 ? <PlusOutlined onClick={()=>setShowColumn2(false)}/> : <CloseOutlined onClick={()=>setShowColumn2(true)}/>}</RigaTabella></ColonnaTabella>
        </ContainerGrid>
        <ContainerGrid>
        <ColonnaTabella index={0} hide={showColumn0.toString()} span={6}>
            <RigaTabella header="true">CASI</RigaTabella>
            <RigaTabella caso="true">NOMINATIVO</RigaTabella>
            <RigaTabella caso="true">GENITIVO</RigaTabella>
            <RigaTabella caso="true">DATIVO</RigaTabella>
            <RigaTabella caso="true">ACCUSATIVO</RigaTabella>
            <RigaTabella caso="true">VOCATIVO</RigaTabella>
            <RigaTabella caso="true">ABLATIVO</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={3} hide={showColumn1.toString()} span={6}>
            <RigaTabella header="true">SINGOLARE</RigaTabella>
            <RigaTabella parola="true">Puell ă</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell am</RigaTabella>
            <RigaTabella parola="true">Puell ă</RigaTabella>
            <RigaTabella parola="true">Puell ā</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={4} hide={showColumn2.toString()} span={6}>
            <RigaTabella header="true">PLURALE</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell arum</RigaTabella>
            <RigaTabella parola="true">Puell is</RigaTabella>
            <RigaTabella parola="true">Puell as</RigaTabella>
            <RigaTabella parola="true">Puell ae</RigaTabella>
            <RigaTabella parola="true">Puell is</RigaTabella>
        </ColonnaTabella>
        </ContainerGrid>
        </>
    )
}
export const GrigliaVerbiDiStato = (props) => {
    const arrayVerbiDiStato = useSelector(selectVerbiDiStato)


    const arrayFrasiVerbiDiStato = arrayVerbiDiStato.map(
                                            (oggetto, index) => (Object.values(oggetto))
                                     )

    const arrayImagesVerbiDiStato = [bambinoCasa, caneGiardino, gattoTavolo]
    console.log(arrayFrasiVerbiDiStato)
    return(
        <ColonnaTabella index={0}  span={12}>
                     <Collapse ghost defaultActiveKey={['0', '1', '2']}>
                     <RigaTabella header="true" style={{color: "blue"}}>VERBI DI STATO</RigaTabella>
                         {
                             arrayFrasiVerbiDiStato.map((array, indexArray) => (
                             <StyledPanel
                                 key={indexArray.toString()}
                                 header={<Text color="blue" text={array[0]}/>}>
                                 {props.valueModal==="Testo" && array[1].map(parteFrase =>
                                            (props.valueModal==="Testo" && <Text
                                                                        color="black"
                                                                        backgroundColor={"lightblue"}
                                                                        tipo={parteFrase.tipo}
                                                                        parteDiscorso={parteFrase.parteDiscorso}
                                                                        text={parteFrase.testo}/>)) ||

                                 props.valueModal==="Immagini" &&
                                     <img src={arrayImagesVerbiDiStato[indexArray]} height={130} width={130}/>}

                             </StyledPanel>))
                         }
                     </Collapse>
        </ColonnaTabella>
        )

}
export const GrigliaVerbiDiMoto = (props) => {
    const arrayImagesVerbiDiMoto = [ragazzaMercato, lucaLondra, ragazzaCasa]
    const arrayVerbiDiMoto = useSelector(selectVerbiDiMoto)
    const arrayFrasiVerbiDiMoto = arrayVerbiDiMoto.map(
                                            (oggetto, index) => (Object.values(oggetto))
                                     )


    return(
        <ColonnaTabella index={0}  span={12}>
                     <Collapse ghost defaultActiveKey={['0', '1', '2']}>
                     <RigaTabella header="true" style={{color: "red"}}>VERBI DI MOTO</RigaTabella>
                         {
                             arrayFrasiVerbiDiMoto.map((array, indexArray) => (
                             <StyledPanel
                                 key={indexArray.toString()}
                                 header={<Text isTitle color="red" text={array[0]}/>}>
                                 {props.valueModal==="Testo" && array[1].map(parteFrase =>
                                            (props.valueModal==="Testo" && <Text  color="black"
                                                                        tipo={parteFrase.tipo}
                                                                        parteDiscorso={parteFrase.parteDiscorso}
                                                                        backgroundColor={"lightpink"}
                                                                        text={parteFrase.testo}/>)) ||

                                 props.valueModal==="Immagini" &&
                                     <img src={arrayImagesVerbiDiMoto[indexArray]} height={130} width={130}/>}
                             </StyledPanel>))
                         }
                     </Collapse>
        </ColonnaTabella>
    )
}

function Text(props){
    if(props.parteDiscorso==="P.Verbale" || props.parteDiscorso==="Transitivo" || props.parteDiscorso==="Intransitivo")
    return(
        <span style={{
                    color: props.color,
                    backgroundColor: props.backgroundColor}}>
            {props.text}
        </span>
    )

    else
        return(
            <span style={{
                    color: props.color,
                    }}>
            {" "+props.text+" "}
        </span>
        )
}
export const GrigliaVerbiStatoMoto = (props) => {
    const arrayVerbiDiStato = useSelector(selectVerbiDiStato)
    const arrayVerbiDiMoto = useSelector(selectVerbiDiMoto)
    const numberQuestion = useSelector(selectCurrent)
    const { Panel } = Collapse
    const [valueModal, setValueModal] = useState('Testo')
    console.log(numberQuestion)
    console.log(arrayVerbiDiStato)
    console.log(arrayVerbiDiMoto)
    return(
        <>
        <CheckboxModalVerbi valueModal={valueModal} setValueModal={setValueModal}/>
         <ContainerGrid>
             <GrigliaVerbiDiStato valueModal={valueModal}/>
             <GrigliaVerbiDiMoto valueModal={valueModal}/>
         </ContainerGrid>
        </>
    )
}

const CheckboxModalVerbi = (props) => {

    function onChange(e) {
        props.setValueModal(e.target.value)
    }
    const options = ['Testo', 'Immagini', 'Audio']
    const defaultOptions = ['Testo']
    return (
        <Radio.Group
            defaultValue={'Testo'}
            onChange={onChange}
            buttonStyle="solid"
            style={{backgroundColor: "darkorange"}}
        >
            <RadioButtonSwap style={{backgroundColor: "darkorange"}} value = "Testo">Testo</RadioButtonSwap>
            <RadioButtonSwap style={{backgroundColor: "darkorange"}} value = "Immagini">Immagini</RadioButtonSwap>
            <RadioButtonSwap style={{backgroundColor: "darkorange"}} value = "Audio">Audio</RadioButtonSwap>
        </Radio.Group>
    )
}

export const GrigliaComplementi = () => {

    return (
    <ContainerGrid>
        <ColonnaTabella index={0}  span={6}>
            <RigaTabella blank="true"></RigaTabella>
            <RigaTabella preposizione="true" header="true">IN...</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={1}  span={6}>
            <RigaTabella header="true">+ ACCUSATIVO</RigaTabella>
            <RigaTabella complemento="true"parola="true">Complemento di Moto A Luogo</RigaTabella>
        </ColonnaTabella>
        <ColonnaTabella index={2}  span={6}>
            <RigaTabella header="true">+ ABLATIVO</RigaTabella>
            <RigaTabella complemento="true" parola="true">Complemento di Stato IN Luogo</RigaTabella>
        </ColonnaTabella>
    </ContainerGrid>
    )
}





