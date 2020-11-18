import React, {useState, useEffect} from "react";
import CorrectAnswer from "../../audio/CorrectAnswer.mp3"
import {Button, Tooltip, message, List, Switch, Result, Checkbox} from 'antd';
import { Link } from 'react-router-dom';
import {ButtonIndietro, StyledButton, StyledPrimoEsercizio} from "../css_primo_modulo/components_frase";
import {TabellaEst} from "../components_primo_esercizio/FeedbackPrimaFrase/FeedbackPrimaDomanda";
import {
    DomandaNominativi,
    TabellaPredicatoVerbale,
    TabelleNominativi
} from "../components_primo_esercizio/FeedbackPrimaFrase/FeedbackSecondaDomanda";
import {TabellaComplementiLuogo} from "../components_primo_esercizio/FeedbackPrimaFrase/FeedbackTerzaDomanda";
import {ComplementoStatoInLuogo, ModalGrigliaComplementi} from "../components_primo_esercizio/FeedbackPrimaFrase/FeedbackQuartaDomanda";
import {TabellaFiliam} from "../components_primo_esercizio/Feedbacks/FeedbackFiliam";
import {TabellaAncilla} from "../components_primo_esercizio/Feedbacks/FeedbackAncilla";
import {TabellaCanit} from "../components_primo_esercizio/Feedbacks/FeedbackCanit";
import {TabellaAmat} from "../components_primo_esercizio/Feedbacks/FeedbackAmat";
import {TabellaCercaDiz} from "../components_primo_esercizio/Feedbacks/FeedbackCercaDiz";
import {ParolaTerzoErrore, SottoFraseTerzo, StyledModal, TextOption} from "../css_primo_modulo/components_primo_modulo";
import {
    success,
    warning,
    error,
    ModalCorrectAnswer,
    FineEsercizio,
    ModalAmbiguousTranslation, FineEsercizioAmbiguo
} from "../message_components/message_to_answers";
import { useSelector, useDispatch } from 'react-redux';
import { setTag, selectCurrentSentence, selectSentence, removeTag, selectArrayTag, addTag} from "../../features/sentenceSlice";
import {ShowModalPredicatoVerbale} from "../../app/constants";
import {selectModalPuella, selectModalSchola, selectModalAncilla, selectModalLuscinia} from "../../features/modalSlice";
import {
    nextQuestion,
    prevQuestion,
    selectFraseEsempio,
    setShowError,
    setShowModal,
    setShowResult,
    setStartExercise,
    setShowContainerModals,
    setZeroCurrentQuestion,
    setShowClickableSentence,
    selectShowModalOne,
    selectTagForDispatchForBack,
    selectShowModalThree,
    selectShowResult,
    selectSetQuestions,
    selectShowClickableSentence,
    setStartTranslation,
    selectStartTranslation,
    setIsAmbig,
    selectDisplayQuestion, selectIsAmbig,
} from "../../features/questionsSlice";
import {selectStartExercise, selectCurrent, selectQuestions, selectQuestion, selectTagForDispatch, selectSottoDomanda, selectSopraDomanda,
    selectShowErrorZero,
    selectShowErrorOne,
    selectShowErrorTwo,
    selectShowErrorThree,
    selectShowErrorFour,
    selectShowErrorFive,
    selectShowErrorSix,
    selectShowErrorSeven,
    selectContainerModals,
    selectLengthSetQuestion} from "../../features/questionsSlice";
import {

        ButtonIniziaEsercizio,
        Domanda,
        Opzione,
        ContenitoreOpzioni,
        BoxQuiz,
        StyledContainerCheckboxQuestion
} from "../css_primo_modulo/components_primo_modulo"

import {TabellaDominae} from "../components_primo_esercizio/Feedbacks/FeedbackDominae";
import {TabellaRosam} from "../components_primo_esercizio/Feedbacks/FeedbackRosam";
//import {TabellaDominae} from "../components_primo_esercizio/components_utilities/FeedbackSecondaDomanda";
import {TabellaPulchrae} from "../components_primo_esercizio/components_utilities/FeedbackTerzaDomanda";
import {ModalPuella} from "../components_primo_esercizio/FeedbackPrimaFrase/FeedbackQuintaDomanda";
import {ModalSchola} from "../components_primo_esercizio/FeedbackPrimaFrase/FeedbackSestaDomanda";
import {ButtonSuccessivo, ButtonPrecedente} from "./FrasePrimoModulo";
import {TabellaPraebet} from "../components_primo_esercizio/Feedbacks/FeedbackPraebet";
import {
    InformazioneTabellaTransitivi,
    TabellaVerbiTransitiviIntransitivi
} from "../components_primo_esercizio/Feedbacks/FeedbackIntransitivo";
import useSound from "use-sound";
import puellaestinschola from "../../audio/puellaestinschola.m4a";
import {TabellaLuscinia} from "../components_primo_esercizio/Feedbacks/FeedbackLuscinia";
import {TabellaBonam} from "../components_primo_esercizio/Feedbacks/FeedbackBonam";
import {TabellaSostAdj} from "../components_primo_esercizio/Feedbacks/FeedbackSostAdj";

function IniziaEsercizio(props){
    const question = useSelector(selectQuestion)
    const startExercise = useSelector(selectStartExercise)
    const dispatch = useDispatch()
    const showQuestion = useSelector(selectDisplayQuestion)
    const numberSentence = useSelector(selectCurrentSentence)
    function onChange(checked){
        dispatch(setShowContainerModals({valueOfBool: checked}))
    }


    return (

            <StyledPrimoEsercizio  >
                {ListaFeedbacks()}
                <ButtonPrecedente/>

                {startExercise ? <ButtonIniziaEsercizio type="button" onClick={() => dispatch(setStartExercise({valueOfBool: false}))} className="button-inizio">
                    Nascondi Esercizio
                </ButtonIniziaEsercizio> :
                <ButtonIniziaEsercizio type="button" onClick={() => dispatch(setStartExercise({valueOfBool: true}))} className="button-inizio">
                    Mostra Esercizio
                </ButtonIniziaEsercizio>}
                <ButtonSuccessivo/>

                {/**<Switch checkedChildren="Nascondi link tabelle" unCheckedChildren="Mostra link tabelle" onChange={onChange} defaultChecked={false}/>**/}
            </StyledPrimoEsercizio>

    )

}





export function DomandaPostErrore(props){
    const sottoDomanda = useSelector(selectSottoDomanda)
    const objectFraseEsempio = useSelector(selectFraseEsempio)
    console.log(objectFraseEsempio)

    const sopraDomanda = useSelector(selectSopraDomanda)
    const question = useSelector(selectQuestion)

    function FraseTooltip() {
        if (objectFraseEsempio==="")
            return ""
        return(
                <SottoFraseTerzo >

                    {objectFraseEsempio.map((ObjectParteFrase, index) =><Tooltip key={index} title={ObjectParteFrase.parteLogica}>
                    <ParolaTerzoErrore value={ObjectParteFrase.parteFrase}>{ObjectParteFrase.parteFrase+" "}</ParolaTerzoErrore>
                                                                    </Tooltip>)}
                </SottoFraseTerzo>
        )
    }




    return (

        <BoxQuiz>
            <Domanda>{sopraDomanda} {<FraseTooltip />} {sottoDomanda}</Domanda>
            <ContenitoreOpzioni>
                <Opzione value={question.domandaSbagliata.opzioneA} onClick={props.gestisciDomanda}>{question.domandaSbagliata.opzioneA}</Opzione>
                <Opzione value={question.domandaSbagliata.opzioneB} onClick={props.gestisciDomanda}>{question.domandaSbagliata.opzioneB}</Opzione>
            </ContenitoreOpzioni>
        </BoxQuiz>
    )
}




function ButtonBack(props) {
    //SetColorsToFalse()
    const numberQuestion = useSelector(selectCurrent)
    const numberSentence = useSelector(selectCurrentSentence)
    const showSentence = useSelector(selectShowClickableSentence)
    const dispatch = useDispatch();
    //const TagForDispatch = useSelector(selectTagForDispatch)
    //console.log(TagForDispatch)
    //const word = TagForDispatch.word
    //const answer = TagForDispatch.answer
    //console.log(word, answer)
    const arrayTag = useSelector(selectArrayTag)
    console.log(arrayTag[arrayTag.length-1])
    const tagToRemove = arrayTag[arrayTag.length-1]
    console.log(tagToRemove)
    const TagForDispatch = useSelector(selectTagForDispatchForBack)
    function handleOnClick() {
    dispatch(prevQuestion({numberSentence: numberSentence}))
    /**

    const word = TagForDispatch.word
    const answer = TagForDispatch.answer
        //console.log(word, answer, "165")
        if (numberSentence === 0) {
            //console.log(word, answer, "168", numberQuestion)
                dispatch(removeTag({numberSentence: numberSentence}))
                dispatch(setTag({numberSentence: numberSentence, valueOfBool: false, word: tagToRemove[0].word, answer: tagToRemove[0].answer}))

        }

        if (numberSentence === 1){
                dispatch(removeTag({numberSentence: numberSentence}))
                dispatch(setTag({numberSentence: numberSentence, valueOfBool: false, word: tagToRemove[0].word, answer: tagToRemove[0].answer}))

        }
        if (numberSentence === 2){
                dispatch(removeTag({numberSentence: numberSentence}))
                dispatch(setTag({numberSentence: numberSentence, valueOfBool: false, word: tagToRemove[0].word, answer: tagToRemove[0].answer}))

        }
        **/
    }
    return(
        numberQuestion === 0 && <ButtonIndietro disabled className="btn btn-back"onClick={handleOnClick}>Indietro</ButtonIndietro> ||
        <ButtonIndietro  className="btn btn-back"onClick={handleOnClick}>Indietro</ButtonIndietro>

    )
}


function OpzioneQuiz(props) {

    /**
     * NUMERO DOMANDA E OGGETTO DOMANDE
     */
    const numberQuestion = useSelector(selectCurrent)
    const numberOfSetQuestions = useSelector(selectSetQuestions)
    //const questions = useSelector(selectQuestions)
    /**
     * INTERRUTTORI ERRORI
     */


    const dispatch = useDispatch();

    const question = useSelector(selectQuestion)
    const sentence = useSelector(selectSentence)
    const arrayTag = useSelector(selectArrayTag)
    console.log("arrayTag:", arrayTag)
    //console.log(sentence)
    const TagForDispatch = useSelector(selectTagForDispatch)
    //console.log(TagForDispatch)
    const word = TagForDispatch.word
    const answer = TagForDispatch.answer
    console.log(word)
    console.log(answer)
    const numberSentence = useSelector(selectSetQuestions)
    const lunghezzaSetQuestion = useSelector(selectLengthSetQuestion)
    const numeroDomandaAttuale = useSelector(selectCurrent)
    const [play] = useSound(CorrectAnswer, {volume: 0.25})
    //console.log(numeroDomandaAttuale, lunghezzaSetQuestion)
    /**
     * Aggiornare al cambio frase:
     *  numberSentence di 1
     *  riazzerare il current numberQuestion
     *  verificare che cambi question
     *
     */
    function handleOnClick(e){

        if (numberSentence === 0) {

            if (e.currentTarget.value === question.risposta) {
                if (numeroDomandaAttuale < lunghezzaSetQuestion-1) {
                    play()
                    //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1, "CIAOOOOOOOOOO")
                    success()
                    dispatch(setShowResult({valueOfBool: true}))
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: answer
                    }))
                    //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1)

                }
                if (numeroDomandaAttuale === lunghezzaSetQuestion-1){
                    play()
                    success()
                    dispatch(setStartTranslation({valueOfBool: true}))
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: answer
                    }))
                }
            dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
            }
            else  {

                    error()
                    dispatch(setShowError({
                        numberSentence: numberSentence,
                        numberQuestion: numberQuestion,
                        valueOfBool: true
                    }))

            }

        }
        if (numberSentence === 1) {
            if (e.currentTarget.value === question.risposta) {

                if (numeroDomandaAttuale < lunghezzaSetQuestion-1) {
                        play()
                        //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1, "CIAOOOOOOOOOO")
                        success()
                        dispatch(setShowResult({valueOfBool: true}))
                        dispatch(setTag({
                            numberSentence: numberSentence,
                            valueOfBool: true,
                            word: word,
                            answer: answer
                        }))
                        //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1)
                        //dispatch(nextQuestion({numberOfSetQuestions: numberOfSetQuestions}))

                    }
                if (numeroDomandaAttuale === lunghezzaSetQuestion-1){
                    play()
                    success()
                    dispatch(setStartTranslation({valueOfBool: true}))
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: answer
                    }))
                }
                dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
            }
            else  {

                 if(e.currentTarget.value === "Genitivo Singolare" && numberQuestion === 5) {
                     console.log(1)
                    warning()
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: "Dominae",
                        answer: "Genitivo Singolare"
                    }))
                    dispatch(setShowResult({valueOfBool: true}))
                    dispatch(setIsAmbig({valueOfBool: true}))
                    dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
                }
                 else if (e.currentTarget.value === "Dativo Singolare" && numberQuestion === 5){
                     console.log(2)
                     warning()
                     dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: "Dominae",
                        answer: "Dativo Singolare"
                    }))
                    dispatch(setShowResult({valueOfBool: true}))
                    dispatch(setIsAmbig({valueOfBool: true}))
                    dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
                 }
                 else if (e.currentTarget.value === "Dativo Singolare" && numberQuestion === 6){
                     console.log(2)
                     warning()
                     dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: "filiae",
                        answer: "Dativo Singolare"
                    }))
                    dispatch(setStartTranslation({valueOfBool: true}))
                    dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
                 }
                 else if(e.currentTarget.value === "Genitivo Singolare" && numberQuestion === 6) {
                     console.log(1)
                    warning()
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: "filiae",
                        answer: "Genitivo Singolare"
                    }))
                    dispatch(setStartTranslation({valueOfBool: true}))
                    dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
                }


                 else{
                    error()
                    dispatch(setShowError({
                        numberSentence: numberSentence,
                        numberQuestion: numberQuestion,
                        valueOfBool: true
                    }))
                 }
            }
        }
         if (numberSentence === 2) {
            if (e.currentTarget.value === question.risposta) {

                if (numeroDomandaAttuale < lunghezzaSetQuestion-1) {
                        play()
                        //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1, "CIAOOOOOOOOOO")
                        success()
                        dispatch(setShowResult({valueOfBool: true}))
                        dispatch(setTag({
                            numberSentence: numberSentence,
                            valueOfBool: true,
                            word: word,
                            answer: answer
                        }))
                        //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1)
                        //dispatch(nextQuestion({numberOfSetQuestions: numberOfSetQuestions}))

                    }
                if (numeroDomandaAttuale === lunghezzaSetQuestion-1){
                    play()
                    success()
                    dispatch(setStartTranslation({valueOfBool: true}))
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: answer
                    }))
                }
                dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))
            }
            else  {

                 if(e.currentTarget.value === "Ablativo Plurale") {
                     console.log(1)
                    warning()
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: "Ablativo Plurale"
                    }))
                    dispatch(setStartTranslation({valueOfBool: true}))
                }
                 else if (e.currentTarget.value === "Dativo Plurale"){
                     console.log(2)
                     warning()
                     dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: "Dativo Plurale"
                    }))
                    dispatch(setStartTranslation({valueOfBool: true}))
                 }

                 else{
                    error()
                    dispatch(setShowError({
                        numberSentence: numberSentence,
                        numberQuestion: numberQuestion,
                        valueOfBool: true
                    }))
                 }
            }
        }
         if (numberSentence === 3) {
            if (e.currentTarget.value === question.risposta) {

                if (numeroDomandaAttuale < lunghezzaSetQuestion-1) {
                        play()
                        //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1, "CIAOOOOOOOOOO")
                        success()
                        dispatch(setShowResult({valueOfBool: true}))
                        dispatch(setTag({
                            numberSentence: numberSentence,
                            valueOfBool: true,
                            word: word,
                            answer: answer
                        }))
                        //console.log(numeroDomandaAttuale, lunghezzaSetQuestion-1)
                        //dispatch(nextQuestion({numberOfSetQuestions: numberOfSetQuestions}))

                    }
                if (numeroDomandaAttuale === lunghezzaSetQuestion-1){
                    play()
                    success()
                    dispatch(setStartTranslation({valueOfBool: true}))
                    dispatch(setTag({
                        numberSentence: numberSentence,
                        valueOfBool: true,
                        word: word,
                        answer: answer
                    }))
                }
                /**dispatch(addTag({   numberSentence: numberSentence,
                                     word: word,
                                     answer: e.currentTarget.value}))**/
            }
            else  {
                error()
                dispatch(setShowError({
                    numberSentence: numberSentence,
                    numberQuestion: numberQuestion,
                    valueOfBool: true
                }))

            }
        }

    }


    return (
        <>

            <Opzione value={question.opzioneA}
                     id = {question.opzioneA}
                     className="option"
                     onClick={handleOnClick}>
                <TextOption>{question.opzioneA}</TextOption>
            </Opzione>
             <Opzione value={question.opzioneB}
                      id = {question.opzioneB}
                      className="option"
                      onClick={handleOnClick}>
                <TextOption>{question.opzioneB}</TextOption>
            </Opzione>


        </>
    )
}


function ListaFeedbacks(){
    const showErrorZero = useSelector(selectShowErrorZero)
    const showErrorOne = useSelector(selectShowErrorOne)
    const showErrorTwo = useSelector(selectShowErrorTwo)
    const showErrorThree = useSelector(selectShowErrorThree)
    const showModalThree = useSelector(selectShowModalThree)
    const showResult = useSelector(selectShowResult)
    const showErrorFour = useSelector(selectShowErrorFour)
    const showErrorFive = useSelector(selectShowErrorFive)
    const showErrorSix = useSelector(selectShowErrorSix)
    const showErrorSeven = useSelector(selectShowErrorSeven)
    const numberSentence = useSelector(selectCurrentSentence)
    const showModalPuella = useSelector(selectModalPuella)
    const showModalSchola = useSelector(selectModalSchola)
    const showModalLuscinia = useSelector(selectModalLuscinia)
    const showTranslation = useSelector(selectStartTranslation)
    const showModalAncilla = useSelector(selectModalAncilla)
    const isAmbig = useSelector(selectIsAmbig)
    //const showPredicatoVerbale = useSelector(selectModalPredicatoVerbale)

    if (numberSentence === 0) {

        return (
            <>
                {showErrorZero ? <TabellaEst/> : null}
                {showErrorOne ? <DomandaNominativi/> : null}
                {showErrorTwo ? <TabellaComplementiLuogo/> : null}
                {showErrorThree ? <ComplementoStatoInLuogo/> : null}
                {ShowModalPredicatoVerbale ? <TabellaPredicatoVerbale/> : null}
                {showModalPuella || showErrorFour ? <ModalPuella/> : null}
                {showModalSchola || showErrorFive? <ModalSchola/> : null}
                {showModalThree ? <ModalGrigliaComplementi/> : null}
                {showTranslation ? <FineEsercizio/> : null}
                {showResult || isAmbig ? <ModalCorrectAnswer/> : null}
            </>
        )
    }
    else if (numberSentence === 1){
        return (
            <>
                {showErrorZero ? <TabellaPraebet/> : null}
                {showErrorOne ? <TabellaPraebet/> : null}
                {showErrorTwo ?<TabellaVerbiTransitiviIntransitivi/> : null}
                {showErrorThree ? <TabellaRosam/> : null}
                {showModalAncilla ? <TabellaAncilla/> : null}
                {showErrorFour ? <TabellaDominae/> : null}
                {showTranslation ? <FineEsercizioAmbiguo/> : null}
                {showResult || isAmbig ? <ModalCorrectAnswer/> : null}
            </>
        )
    }
    /**
    else if (numberSentence === 2){
        return (
            <>
                {showErrorZero ? <TabellaAmat/> : null}
                {showErrorOne ? <TabellaAmat/> : null}
                {showErrorTwo ?<TabellaVerbiTransitiviIntransitivi/> : null}
                {showErrorThree ? <TabellaDominae/> : null}
                {showErrorSix ? <TabellaFiliam/> : null}
                {showModalAncilla ? <TabellaAncilla/> : null}
                {showTranslation ? <FineEsercizio/> : null}
                {showResult || isAmbig ? <ModalCorrectAnswer/> : null}
            </>
        )
    }**/
    else if (numberSentence === 2){
        return (
            <>
                {showErrorZero ? <TabellaCanit/> : null}
                {showErrorOne ? <TabellaCanit/> : null}
                {showErrorTwo ? <InformazioneTabellaTransitivi/> : null}
                {showErrorThree ? <TabellaAncilla/> : null}
                {showModalLuscinia ? <TabellaLuscinia/> : null}
                {showTranslation ? <FineEsercizioAmbiguo/> : null}
                {showResult ? <ModalCorrectAnswer/> : null}
            </>
        )
    }
    else if (numberSentence === 3){
        return (
            <>
                {showErrorZero ? <TabellaAmat/> : null}
                {showErrorOne ? <TabellaAmat/> : null}
                {showErrorTwo ? <TabellaVerbiTransitiviIntransitivi/> : null}
                {showErrorThree ? <TabellaDominae/> : null}
                {showErrorFour ? <TabellaDominae/> : null}
                {showErrorFive ? <TabellaBonam/> : null}
                {showErrorSix  ? <TabellaCercaDiz/> : null}
                {showErrorSeven  ? <TabellaSostAdj/> : null}
                {showTranslation ? <FineEsercizio/> : null}
                {showResult ? <ModalCorrectAnswer/> : null}
            </>
        )
    }

}

// DA TIRARE FUORI
export function ContenitoreDomandaOpzione(props) {

    return (

        <BoxQuiz>
            <Domanda>{props.question.domanda}</Domanda>
            <ContenitoreOpzioni className="box-opzioni">
                <OpzioneQuiz  question={props.question}/>
            </ContenitoreOpzioni>

            <ButtonBack />
        </BoxQuiz>


    )
}

/**
export function ContainerModals(){
    const numberQuestion = useSelector(selectCurrent)
    const showErrorZero = useSelector(selectShowErrorZero)
    const showModalOne = useSelector(selectShowModalOne)
    const showErrorTwo = useSelector(selectShowErrorTwo)
    const showModalThree = useSelector(selectShowModalThree)
    const numberSentence = useSelector(selectSetQuestions)
    const containerModals = useSelector(selectContainerModals)

    const dispatch = useDispatch()
    function onClickFirstModal(){
        dispatch(setShowError({numberSentence: 0, numberQuestion: 0, valueOfBool: true}))
    }
    function onClickSecondModal(){
        dispatch(setShowModal({numberSentence: 0, numberQuestion: 1, valueOfBool: true}))
    }
    function onClickThirdModal(){
        dispatch(setShowError({numberSentence: 0, numberQuestion: 2, valueOfBool: true}))
    }
    function onClickFourthModal(){
        dispatch(setShowModal({numberSentence: 0, numberQuestion: 3, valueOfBool: true}))
    }
    return (
        containerModals && <ul>
            {numberQuestion >= 1 && (<li><Button onClick={onClickFirstModal} type="link">Tabella Verbo Essere</Button></li>)}
            { showErrorZero ? <TabellaEst/> : null}
            {numberQuestion >= 2 && (<li><Button onClick={onClickSecondModal} type="link">Declinazione Puella e Schola</Button></li>)}
            { showModalOne ? <TabelleNominativi/> : null}
            {numberQuestion >= 3 && (<li><Button onClick={onClickThirdModal} type="link">Verbi di Stato e di Moto</Button></li>)}
            { showErrorTwo ? <TabellaComplementiLuogo/> : null}
            {numberQuestion >= 4 && (<li><Button onClick={onClickFourthModal} type="link">Complementi con In</Button></li>)}
            { showModalThree ? <ModalGrigliaComplementi/> : null}
        </ul>
    )
}


**/
export default IniziaEsercizio