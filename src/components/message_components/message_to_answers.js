import {Button, message, Modal, Result} from "antd";
import {StyledModal, StyledResult} from "../css_primo_modulo/components_primo_modulo";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    nextQuestion,
    selectShowResult,
    selectStartTranslation,

    setShowResult,
    setStartTranslation,
    setZeroCurrentQuestion,
    setDisplayQuestion, setStartExercise,
} from "../../features/questionsSlice";
import {selectCurrentSentence} from "../../features/sentenceSlice";


export const success = () => {
            message.success({
                      content: "Corretto!",
                      duration: 0.5,
                      style: {
                      marginTop: '0vh',
                      backgroundColor: "darkgreen"
                },
              });
        }
export const error = () => {
    message.error({
              content: "Attenzione!",
              duration: 0.5,
              style: {
              marginTop: '0vh',
              backgroundColor: "darkred"
        },
      });
}

const TitleModalCorrectAnswer = () => {
    return (
        <p style={{textAlign: "center"}}>Bravo!</p>
    )
}
export const FineEsercizio = () => {
    const dispatch = useDispatch()
    const showTranslation = useSelector(selectStartTranslation)
    const [showPopupTranslation, setShowPopupTranslation] = useState(true)
    const scrollToRef = () => window.scrollTo({
            top: 400,
            behavior: 'smooth'
        })
    function OnClick(){

        setShowPopupTranslation(false)
        dispatch(setZeroCurrentQuestion())
        dispatch(setStartExercise({valueOfBool: false}))
        scrollToRef()


    }
    return (
            <StyledModal
                visible={showPopupTranslation}
                width={300}
                transparent
                bodyStyle={{height: 330}}
                footer={null}
                answer = "true"
            >
                <StyledResult
                    status="success"
                    title="Analisi completato!"
                    extra={[
                        <Button onClick={OnClick} type="primary" key="console">
                            Inizia Traduzione!
                        </Button>,
                    ]}
                />
            </StyledModal>
        )

    }

export const ModalCorrectAnswer = () => {
    const showResult = useSelector(selectShowResult)
    const dispatch = useDispatch()
    const numberSentence = useSelector(selectCurrentSentence)
    function OnClick(){

        dispatch(setShowResult({valueOfBool: false}))

    }
    return (
            <StyledModal
                visible={showResult}
                width={300}
                transparent
                bodyStyle={{height: 330}}
                footer={null}
                answer = "true"
            >
                <StyledResult
                    status="success"
                    title="Risposta Corretta!"
                    extra={[
                        <Button onClick={OnClick} type="primary" key="console">
                            Prossima Domanda
                        </Button>,
                    ]}
                />
            </StyledModal>
        )

    }