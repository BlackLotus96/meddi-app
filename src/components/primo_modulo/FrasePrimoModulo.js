import React, {useRef} from "react";
import {
    ButtonPrecSucc
} from "../css_primo_modulo/components_frase";

import 'antd/dist/antd.css';

import {
    StyledContainerFrase,
    StyledButton,
    StyledFrase,
    ParolaTag,
    StyledTag,
    ContainerTag,
    StyledTextButton,
} from "../css_primo_modulo/components_frase";

import {ParolaStyle} from "../css_primo_modulo/components_primo_modulo";
import { useSelector, useDispatch } from 'react-redux';
import {setModalPredicatoVerbale, setModalPuella, setModalSchola, setModalAncilla, setModalLuscinia} from "../../features/modalSlice";
import {
    nextSentence,
    prevSentence, selectCurrentSentence,
    selectSentenceLenght,
    selectSentence, setTag,

} from "../../features/sentenceSlice";
import {
    selectCurrent,
    setStartExercise,
    nextSetQuestion,
    prevSetQuestion,
    setZeroCurrentQuestion,
    selectShowClickableSentence,
    selectShowErrorZero, setShowError, setShowModal, selectQuestion, selectStartExercise, setStartTranslation
} from "../../features/questionsSlice";
import {AudioComponent} from "../../../src/components/components_primo_esercizio/AudioComponents/AudioComponent"
import {DndComponentOptions} from "./translation/DragDropComponents";
import {ContainerQuestions} from "./ContainerQuestions";


const divideIfComplement = (objectWords, word) => {

        if (objectWords[word].isComplement === true){
            word = word.replace('_', ' ')
            return word
        }
        else
            return word

    }

    function Parola(props){
        let sentence = useSelector(selectSentence)
        const numberSentence = useSelector(selectCurrentSentence)

        let objectWords = sentence.objectWords
        const dispatch = useDispatch()
        console.log("OBJECTWORDS", objectWords)
        function handleOnClick(e){
            //console.log(e.currentTarget.value)
            if(numberSentence===0) {
                if (e.currentTarget.value === "Singolare") {
                    dispatch(setShowError({numberSentence: 0, numberQuestion: 0, valueOfBool: true}))
                } else if (e.currentTarget.value === "Predicato Verbale") {
                    dispatch(setModalPredicatoVerbale({valueOfBool: true}))
                } else if (e.currentTarget.value === "Verbo di Stato") {
                    dispatch(setShowError({numberSentence: 0, numberQuestion: 2, valueOfBool: true}))
                } else if (e.currentTarget.value === "Stato in Luogo") {
                    dispatch(setShowModal({numberSentence: 0, numberQuestion: 3, valueOfBool: true}))
                } else if (e.currentTarget.value === "Nominativo") {
                    dispatch(setModalPuella({valueOfBool: true}))
                } else if (e.currentTarget.value === "Ablativo") {
                    dispatch(setModalSchola({valueOfBool: true}))
                }
            }
            else if(numberSentence===1){
                if (e.currentTarget.value === "Singolare"){
                    dispatch(setShowError({numberSentence: 1, numberQuestion: 0, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "3 Persona"){
                    dispatch(setShowError({numberSentence: 1, numberQuestion: 1, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Transitivo"){
                    dispatch(setShowError({numberSentence: 1, numberQuestion: 2, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Soggetto"){
                    dispatch(setShowError({numberSentence: 1, numberQuestion: 4, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Accusativo"){
                    dispatch(setShowError({numberSentence: 1, numberQuestion: 3, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Dativo Singolare" && props.index === 0){
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: true,
                        word: "Dominae",
                        answer: "Genitivo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: false,
                        word: "Dominae",
                        answer: "Dativo Singolare"
                    }))
                }
                else if (e.currentTarget.value === "Genitivo Singolare" && props.index === 0){
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: true,
                        word: "Dominae",
                        answer: "Dativo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: false,
                        word: "Dominae",
                        answer: "Genitivo Singolare"
                    }))
                }
                else if (e.currentTarget.value === "Dativo Singolare" && props.index === 4){
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: true,
                        word: "filiae",
                        answer: "Genitivo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: false,
                        word: "filiae",
                        answer: "Dativo Singolare"
                    }))
                }
                else if (e.currentTarget.value === "Genitivo Singolare" && props.index === 4){
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: true,
                        word: "filiae",
                        answer: "Dativo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 1,
                        valueOfBool: false,
                        word: "filiae",
                        answer: "Genitivo Singolare"
                    }))
                }

            }
            /**else if(numberSentence===2){
                if (e.currentTarget.value === "Singolare"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 0, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "3 Persona"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 1, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Transitivo"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 2, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Soggetto"){
                    dispatch(setModalAncilla({valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Accusativo"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 6, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Dativo Singolare" && props.index === 0){
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: true,
                        word: "Dominae",
                        answer: "Genitivo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: false,
                        word: "Dominae",
                        answer: "Dativo Singolare"
                    }))
                }
                else if (e.currentTarget.value === "Genitivo Singolare" && props.index === 0){
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: true,
                        word: "Dominae",
                        answer: "Dativo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: false,
                        word: "Dominae",
                        answer: "Genitivo Singolare"
                    }))
                }
                else if (e.currentTarget.value === "Dativo Singolare" && props.index === 3){
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: true,
                        word: "dominae",
                        answer: "Genitivo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: false,
                        word: "dominae",
                        answer: "Dativo Singolare"
                    }))
                }
                else if (e.currentTarget.value === "Genitivo Singolare" && props.index === 3){
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: true,
                        word: "dominae",
                        answer: "Dativo Singolare"
                    }))
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: false,
                        word: "dominae",
                        answer: "Genitivo Singolare"
                    }))
                }
            }**/
            else if(numberSentence===2){
                if (e.currentTarget.value === "Singolare"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 0, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "3 Persona"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 1, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Transitivo"){
                    dispatch(setShowError({numberSentence: 2, numberQuestion: 2, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Soggetto"){
                    console.log("EHY SONO SOGGETTO")
                    dispatch(setModalLuscinia({valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Ablativo Plurale"){
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: true,
                        word: "ancillis",
                        answer: "Dativo Plurale"
                    }))
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: false,
                        word: "ancillis",
                        answer: "Ablativo Plurale"
                    }))
                }
                else if (e.currentTarget.value === "Dativo Plurale"){
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: true,
                        word: "ancillis",
                        answer: "Ablativo Plurale"
                    }))
                    dispatch(setTag({
                        numberSentence: 2,
                        valueOfBool: false,
                        word: "ancillis",
                        answer: "Dativo Plurale"
                    }))
                }
            }
            else if(numberSentence===3){
                 if (e.currentTarget.value === "Plurale"){
                    dispatch(setShowError({numberSentence: 3, numberQuestion: 0, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "3 Persona"){
                    dispatch(setShowError({numberSentence: 3, numberQuestion: 1, valueOfBool: true}))
                }
                else if (e.currentTarget.value === "Transitivo"){
                    dispatch(setShowError({numberSentence: 3, numberQuestion: 2, valueOfBool: true}))
                }
            }

        }
        //console.log(objectWords[props.word].color.isColored)
        return(
            <ParolaTag>
                {
                    <ParolaStyle>
                            {divideIfComplement(objectWords, props.word)}
                    </ParolaStyle>


                }

                <ContainerTag className="container-tag">
                        {

                           Object.entries(props.objectWords[props.word].tag).map((arrayTag, index)=>
                               <StyledButton key = {index}
                                          visible = {arrayTag[1].visible}
                                          color = {arrayTag[1].color}
                                          shape = {"round"}
                                          rightPart = {arrayTag[1].rightPart}
                                          value = {arrayTag[1].nomeTag}
                                          id = {arrayTag[1].color}
                                          onClick={handleOnClick}

                                          >
                                   <StyledTextButton  color = {arrayTag[1].color}>{arrayTag[1].nomeTag}</StyledTextButton>
                               </StyledButton>

                           )
                        }

                </ContainerTag>
            </ParolaTag>
        )

    }

    export function ButtonPrecedente(props){
        const numberSentence = useSelector(selectCurrentSentence)
        const dispatch = useDispatch();
        function handlePrecedente(){
            dispatch(prevSentence())
            dispatch(setZeroCurrentQuestion())
            dispatch(prevSetQuestion())
            dispatch(setStartExercise({valueOfBool: false}))
            dispatch(setStartTranslation({valueOfBool: false}))
        }
        return(
            numberSentence >= 1 && <ButtonPrecSucc style={{borderRadius: 10}}
                            id="button-precedente"
                            onClick={handlePrecedente}
                        > Frase Precedente </ButtonPrecSucc> ||
            numberSentence === 0 && <ButtonPrecSucc style={{borderRadius: 10}}
                            id="button-precedente"
                            disabled
                            onClick={handlePrecedente}
                        > Frase Precedente </ButtonPrecSucc>
        )

    }

    export function ButtonSuccessivo(props){

        const dispatch = useDispatch();
        function handleSuccessivo(){
            dispatch(nextSentence())
            dispatch(nextSetQuestion())
            dispatch(setZeroCurrentQuestion())
            dispatch(setStartExercise({valueOfBool: false}))
            dispatch(setStartTranslation({valueOfBool: false}))
        }
        return(
            <ButtonPrecSucc style={{borderRadius: 10}}
                            id="button-successivo"
                            onClick={handleSuccessivo}
            >Frase Successiva</ButtonPrecSucc>

        )

    }



    export function SentenceClickable(props){
        let sentence = useSelector(selectSentence)
        let sentenceLength = useSelector(selectSentenceLenght)
        //console.log(sentence)
        let objectWords = sentence.objectWords
        //console.log(objectWords)
        let entries = Object.entries(objectWords)
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
        const myRef = useRef(null)
        const executeScroll = () => scrollToRef(myRef)
        return(

           <DndComponentOptions/>
        )
    }
    function GetFrasePrimoModulo(props) {

        /**const audio = new Audio(puellaestinschola)
        const playSound = audioFile => {
            audioFile.play()

        }**/
        /** from SLICESENTENCE
         * currentSentenceNumber = numero frase attuale
         * sentence = l'oggetto frase attuale
         * entries = l'array [[{chiave: {valori}}][{}][{}]]
         */
        let sentence = useSelector(selectSentence)
        //console.log(sentence)
        let objectWords = sentence.objectWords
        //console.log(objectWords)
        let entries = Object.entries(objectWords) //to have access to the word easily
        console.log(entries)
        /** from QUESTIONSSLICE
         * current
         */
        const question = useSelector(selectQuestion)
        const startExercise = useSelector(selectStartExercise)
        const numberSentence = useSelector(selectCurrentSentence)


        return (
            <StyledContainerFrase >
                <AudioComponent  width={40} heigth={40} fontsize={40}/>
                <StyledFrase  id="frase">
                    <div style={{fontSize: 50}}>{numberSentence+1 + ")"}</div>
                    {

                        entries.map(( arrayWord, index) =>
                            (

                                <Parola
                                        link="link"
                                        index={index}
                                        objectWords = {objectWords}
                                        word={arrayWord[0]}/>

                            ))

                    }
                </StyledFrase>
               {startExercise ? <ContainerQuestions  question={question}/> : null}

            </StyledContainerFrase>

        )
    }

    export default GetFrasePrimoModulo