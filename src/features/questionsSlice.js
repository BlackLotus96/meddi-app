import {createSlice} from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import {useSelector} from "react-redux";


export const sliceQuestion = createSlice({
    name: 'setQuestions',
    initialState:{
        startExercise: false,
        startTranslation: false,
        numberOfSetQuestions: 0,
        current: 0, //quando arrivo all'ultima domanda riazzero current
        showContainerModals: false,
        showResult: false,
        showClickableSentence: false,
        isAmbig: false,
        displayQuestion: true,
        questions: [
            [
                {
                    domanda: "Il Verbo est è...",
                    opzioneA: "Singolare",
                    opzioneB: "Plurale",
                    risposta: "Singolare",
                    showError: false,
                    tagForDispatch: {
                        word: "est",
                        answer: "Singolare"
                    }
                },
                {
                    domanda: "Il predicato est di che tipo è?",
                    opzioneA: "Predicato Nominale",
                    opzioneB: "Predicato Verbale",
                    risposta: "Predicato Verbale",
                    showError: false,
                    showModal: false,
                    domandaSbagliata: {
                        sottoDomanda: "Quanti nominativi ci sono?",
                        opzioneA: "1",
                        opzioneB: "2",
                        risposta: "1",

                    },
                    tagForDispatch: {
                        word: "est",
                        answer: "Predicato Verbale"
                    }
                },
                {
                    domanda: "Il verbo est (essere) è ...",
                    opzioneA: "Verbo di Moto",
                    opzioneB: "Verbo di Stato",
                    risposta: "Verbo di Stato",
                    showError: false,
                    showModal: false,
                    tagForDispatch: {
                        word: "est",
                        answer: "Verbo di Stato"
                    }
                },
                {
                    domanda: "Che complemento è \"in scholā\" ?",
                    opzioneA: "Stato in Luogo",
                    opzioneB: "Moto a Luogo",
                    consiglio: " \"est\" è un verbo di STATO",
                    risposta: "Stato in Luogo",
                    showError: false,
                    showModal: false,
                    domandaSbagliata: {
                        sopraDomanda: "Nella frase:",
                        fraseEsempio: [
                                        {parteFrase:"'' La ragazza",parteLogica: "SOGGETTO", color: ""},
                                        {parteFrase:"sta",parteLogica: "PREDICATO VERBALE", color: "red"},
                                        {parteFrase:"in palestra ''", parteLogica:  "STATO IN LUOGO", color: "red"}
                                        ],
                        sottoDomanda: "che verbo è \"sta\" ?",
                        consiglio: "\"sta\" è come \"est\"",
                        opzioneA: "Verbo di Moto",
                        opzioneB: "Verbo di Stato",
                        risposta: "Verbo di Stato",
                    },
                   tagForDispatch: {
                        word: "in_scholā",
                        answer: "Stato in Luogo"
                    }
                },
                {
                    domanda: "Che caso è \"Puellă\" ?",
                    opzioneA: "Nominativo",
                    opzioneB: "Ablativo",
                    risposta: "Nominativo",
                    showError: false,
                    tagForDispatch: {
                        word: "Puellă",
                        answer: "Nominativo"
                    }
                },
                {
                    domanda: "Che caso è \"Scholā\" ?",
                    opzioneA: "Nominativo",
                    opzioneB: "Ablativo",
                    risposta: "Ablativo",
                    showError: false,
                    tagForDispatch: {
                        word: "in_scholā",
                        answer: "Ablativo"
                    }
                }

            ],
            [
                {
                    domanda: "Il verbo \"praebet\" è:",
                    opzioneA: "Singolare",
                    opzioneB: "Plurale",
                    risposta: "Singolare",
                    showError: false,
                    tagForDispatch: {
                                word: "praebet",
                                answer: "Singolare"
                            },

                },
                {
                    domanda: "Che persona è il verbo \"praebet\" ?",
                    opzioneA: "2 Persona",
                    opzioneB: "3 Persona",
                    risposta: "3 Persona",
                    showError: false,
                    tagForDispatch: {
                                word: "praebet",
                                answer: "3 Persona"
                            },

                },
                {
                    domanda: "\"praebet\" è Transitivo o Intransitivo?",
                    opzioneA: "Transitivo",
                    opzioneB: "Intransitivo",
                    risposta: "Transitivo",
                    showError: false,
                    tagForDispatch: {
                                word: "praebet",
                                answer: "Transitivo"
                            },

                },
                {
                    domanda: "Che caso è \"rosam\"? ",
                    opzioneA: "Accusativo",
                    opzioneB: "Vocativo",
                    risposta: "Accusativo",
                    showError: false,
                    tagForDispatch: {
                                word: "rosam",
                                answer: "Accusativo"
                            }
                },
                {
                    domanda: "Dato il verbo SINGOLARE, qual è il soggetto?",
                    opzioneA: "Dominae",
                    opzioneB: "Ancillă",
                    risposta: "Ancillă",
                    showError: false,
                    tagForDispatch: {
                                word: "ancillă",
                                answer: "Soggetto"
                            },


                },
                {
                    domanda: "Che caso è \"Dominae\"?",
                    opzioneA: "Genitivo Singolare",
                    opzioneB: "Dativo Singolare",
                    risposta: "",
                    showGenitivo: false,
                    showDativo: false,
                    tagForDispatch: {
                                word: "Dominae",
                                answer: "Dativo Singolare"
                            }
                },
                {
                    domanda: "Che caso è \"filiae\"?",
                    opzioneA: "Genitivo Singolare",
                    opzioneB: "Dativo Singolare",
                    risposta: "",
                    showGenitivo: false,
                    showDativo: false,
                    tagForDispatch: {
                                word: "filiae",
                                answer: "Dativo Singolare"
                            }
                },

            ],
            [
                {
                    domanda: "Il verbo \"canit\" è:",
                    opzioneA: "Singolare",
                    opzioneB: "Plurale",
                    risposta: "Singolare",
                    showError: false,
                    tagForDispatch: {
                                word: "canit",
                                answer: "Singolare"
                            },

                },
                {
                    domanda: "Che persona è il verbo \"canit\" ?",
                    opzioneA: "2 Persona",
                    opzioneB: "3 Persona",
                    risposta: "3 Persona",
                    showError: false,
                    tagForDispatch: {
                                word: "canit",
                                answer: "3 Persona"
                            },

                },
                {
                    domanda: "\"Canit\" è Transitivo o Intransitivo?",
                    opzioneA: "Transitivo",
                    opzioneB: "Intransitivo",
                    risposta: "Transitivo",
                    showError: false,
                    tagForDispatch: {
                                word: "canit",
                                answer: "Transitivo"
                            },

                },
                {
                    domanda: "Qual è il soggetto?",
                    opzioneA: "Luscinia",
                    opzioneB: "Ancillis",
                    risposta: "Luscinia",
                    showError: false,
                    tagForDispatch: {
                                word: "Luscinia",
                                answer: "Soggetto"
                            },

                },
                {
                    domanda: "Che caso è \"ancillis\"?",
                    opzioneA: "Ablativo Plurale",
                    opzioneB: "Dativo Plurale",
                    risposta: "",
                    showAblativo: false,
                    showDativo: false,
                    tagForDispatch: {
                                word: "ancillis",
                                answer: ""
                            }

                },

            ],
            [
                {
                    domanda: "Il verbo \"amant\" è:",
                    opzioneA: "Singolare",
                    opzioneB: "Plurale",
                    risposta: "Plurale",
                    showError: false,
                    tagForDispatch: {
                                word: "amant",
                                answer: "Plurale"
                            },

                },
                {
                    domanda: "Che persona è il verbo \"amant\" ?",
                    opzioneA: "2 Persona",
                    opzioneB: "3 Persona",
                    risposta: "3 Persona",
                    showError: false,
                    tagForDispatch: {
                                word: "amant",
                                answer: "3 Persona"
                            },

                },
                {
                    domanda: "\"amant\" è Transitivo o Intransitivo?",
                    opzioneA: "Transitivo",
                    opzioneB: "Intransitivo",
                    risposta: "Transitivo",
                    showError: false,
                    tagForDispatch: {
                                word: "amant",
                                answer: "Transitivo"
                            },
                },
                {
                    domanda: "Quale è il soggetto?",
                    opzioneA: "ancillae",
                    opzioneB: "dominam",
                    risposta: "ancillae",
                    showError: false,
                    tagForDispatch: {
                                word: "ancillae",
                                answer: "Soggetto"
                            },
                },
                {
                    domanda: "Che caso è \"dominam\"? ",
                    opzioneA: "Accusativo",
                    opzioneB: "Vocativo",
                    risposta: "Accusativo",
                    showError: false,
                    tagForDispatch: {
                                word: "dominam",
                                answer: "Accusativo"
                            }
                },
                {
                    domanda: "Che caso è \"bonam\"? ",
                    opzioneA: "Accusativo",
                    opzioneB: "Vocativo",
                    risposta: "Accusativo",
                    showError: false,
                    tagForDispatch: {
                                word: "Bonam",
                                answer: "Accusativo"
                            }
                },
                {
                    domanda: "Ci sono due parole vicine con desinenze uguali; di solito una dei due è un aggettivo: qual è?",
                    opzioneA: "Bonam",
                    opzioneB: "dominam",
                    risposta: "Bonam",
                    showError: false,
                    tagForDispatch: {
                                word: "Bonam",
                                answer: "Aggettivo"
                            }
                },
                {
                    domanda: "...quindi dominam è?",
                    opzioneA: "Sostantivo",
                    opzioneB: "Aggettivo",
                    risposta: "Sostantivo",
                    showError: false,
                    tagForDispatch: {
                                word: "dominam",
                                answer: "Sostantivo"
                            }
                }
            ]

        /**[

            {
                domanda: "Dominae, che caso è?",
                opzioneA: "Nominativo, Plurale",
                opzioneB: "Genitivo, Singolare",
                risposta: "Nominativo, Plurale",
                showError: false,

            },
            {
                domanda: "Pulchrae, che caso è?",
                opzioneA: "Nominativo, Plurale",
                opzioneB: "Genitivo, Singolare",
                risposta: "Nominativo, Plurale",
                showError: false,
            },
            {
                domanda: "Chi è il soggetto(nominativo)?",
                opzioneA: "Dominae",
                opzioneB: "Pulchrae",
                risposta: "Dominae",
                showError: false,
            },
            {
                domanda: "Qual è la parte nominale?(aggettivo)?",
                opzioneA: "Dominae",
                opzioneB: "Pulchrae",
                risposta: "Pulchrae",
                showError: false,
            },
            {
                domanda: "fine",
                showResult: false

            }
        ]**/
        ]
    },
    reducers: {
        nextQuestion: (state, action) => {
            if (state.current <= state.questions[action.payload.numberOfSetQuestions].length) {
                state.current ++
            }
        },
        prevQuestion: (state, action) => {
            if (state.current > 0) {
                state.current --
            }
        },

        nextSetQuestion: (state) => {
            state.numberOfSetQuestions ++
        },
        prevSetQuestion: (state) => {
            if (state.numberOfSetQuestions > 0) {
                state.numberOfSetQuestions--
            }
        },

        setZeroCurrentQuestion: (state) => {
            state.current = 0
        },

        //dispatch(setShowError({numberQuestion: variabile,
        //                        valueOfBool: valore}))
        setShowError: (state, action) => {
            state.questions[action.payload.numberSentence][action.payload.numberQuestion].showError = action.payload.valueOfBool
        },

        setDisplayQuestion: (state, action) =>{
            state.displayQuestion = action.payload.valueOfBool
        },

        setShowModal: (state, action) => {
            state.questions[action.payload.numberSentence][action.payload.numberQuestion].showModal = action.payload.valueOfBool
        },
        setStartExercise: (state, action)=>{
            state.startExercise = action.payload.valueOfBool
        },
        setStartTranslation: (state, action)=>{
            state.startTranslation = action.payload.valueOfBool
        },
        setShowContainerModals: (state, action) => {
            state.showContainerModals = action.payload.valueOfBool
        },
        setShowResult: (state, action) =>{
            state.showResult = action.payload.valueOfBool
        },
        setShowClickableSentence: (state, action) =>{
            state.showClickableSentence = action.payload.valueOfBool
        },
        setIsAmbig:(state, action) =>{
            state.isAmbig = action.payload.valueOfBool
        }

    }
})




//const question = useSelector((state) => state.questionReducer.questions[currentQuestionNumber])
export const {
    nextQuestion,
    prevQuestion,
    nextSetQuestion,
    prevSetQuestion,
    setZeroCurrentQuestion,
    setShowError,
    setShowModal,
    setShowResult,
    setStartExercise,
    setShowContainerModals,
    setShowClickableSentence,
    setStartTranslation,
    setIsAmbig,
    setDisplayQuestion,
} = sliceQuestion.actions
export const selectQuestions = state => state.questioner.questions

export const selectShowClickableSentence = state => state.questioner.showClickableSentence

export const selectCurrent = state => state.questioner.current // the actual number of question

export const selectSetQuestions = state => state.questioner.numberOfSetQuestions // the actual number of set of questions

export const selectStartExercise = state => state.questioner.startExercise // the boolean to start every exercise

export const selectContainerModals = state => state.questioner.showContainerModals //the boolean to show the container of modals link

export const selectShowResult = state => state.questioner.showResult //

export const selectStartTranslation = state => state.questioner.startTranslation

export const selectDisplayQuestion = state => state.displayQuestion

export const selectIsAmbig = state => state.questioner.isAmbig

export const selectQuestion = createSelector(
    selectCurrent, selectSetQuestions, selectQuestions,
    (current, setQuestions, questions) => questions[setQuestions][current]

)


export const selectLengthSetQuestion = createSelector(
    selectCurrent, selectSetQuestions, selectQuestions,
    (current, setQuestions, questions) => questions[setQuestions].length

)

export const selectTagForDispatch = createSelector(
    selectQuestion,
    (question) => {
        if(question.hasOwnProperty("tagForDispatch")){
            return question.tagForDispatch
        }
        else{
            return {word: "", answer: ""}
        }
    }
)

export const selectTagForDispatchForBack = createSelector(
    selectQuestions, selectSetQuestions, selectCurrent,
        (questions, setQuestions, current) => {
        if (current >= 1) {
            return questions[setQuestions][current-1].tagForDispatch
        }
    }
)

export const selectSopraDomanda = createSelector(
    selectQuestion,
    (question) => {
        if(question.domandaSbagliata.hasOwnProperty("sopraDomanda")){
            return question.domandaSbagliata.sopraDomanda
        }
        else{
            return ""
        }
    }
)

export const selectFraseEsempio = createSelector(
    selectQuestion,
    (question) =>{
        if(question.domandaSbagliata.hasOwnProperty("fraseEsempio")){
            let parteFrase = question.domandaSbagliata.fraseEsempio.map((objectParteFrase)=>objectParteFrase)
            return parteFrase
        }
        else{
            return ""
        }
    }
)
export const selectSottoDomanda = createSelector(
     selectQuestion,
    (question) => {
        if(question.domandaSbagliata.hasOwnProperty("sottoDomanda")){
            return question.domandaSbagliata.sottoDomanda
        }
        else{
            return ""
        }
    }
)
export const selectProva = createSelector(
    selectSetQuestions, selectQuestions,
        (setQuestions, questions)=>{
            return questions[setQuestions]
        }
)

export const selectVerbsModalThree = createSelector(
    selectSetQuestions, selectQuestions,
        (setQuestions, questions)=>{
        if(questions[setQuestions][2].hasOwnProperty("verbiDiStato") && questions[setQuestions][2].hasOwnProperty("verbiDiMoto")){
            return [questions[setQuestions][2].verbiDiStato, questions[setQuestions][2].verbiDiMoto]
        }
        else
            return ["",""]
    }
)

/**
 *
 *SELECTORS PER MOSTRARE I MODALI
 */
export const selectShowModalOne = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][1].showModal
)
export const selectShowModalTwo = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][2].showModal
)
export const selectShowModalThree = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][3].showModal
)

/**
 *
 * SELECTORS PER MOSTRARE LE DOMANDE
 */
export const selectShowErrorZero = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][0].showError
)


export const selectShowErrorOne = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][1].showError
)
export const selectShowErrorTwo = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][2].showError
)
export const selectShowErrorThree = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][3].showError
)
export const selectShowErrorFour = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => questions[numberSetQuestions][4].showError
)
export const selectShowErrorFive = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => {
        if( questions[numberSetQuestions].length >= 6){
            return questions[numberSetQuestions][5].showError
        }
        else return ""
    }
)
export const selectShowErrorSix = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => {
        if( questions[numberSetQuestions].length >= 7){
            return questions[numberSetQuestions][6].showError
        }
        else return ""
    }
)
export const selectShowErrorSeven = createSelector(
    selectQuestions, selectSetQuestions,
    (questions, numberSetQuestions) => {
        if( questions[numberSetQuestions].length >= 8){
            return questions[numberSetQuestions][7].showError
        }
        else return ""
    }
)


export default sliceQuestion.reducer;


