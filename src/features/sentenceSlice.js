import {createSlice, current} from '@reduxjs/toolkit';
import {createSelector} from "reselect";
import {selectQuestions} from "./questionsSlice";


export const sliceSentence = createSlice({
    name: 'setSentences',
    initialState: {
        current: 0,
        sentences: [
            {
                sentence:"Puellă in scholā est",
                arrayTag: [],
                sentenceLength: 3,
                isTranslated: false,
                objectWords:{
                    Puellă:{
                        isComplement: false,
                        tag: {
                                "Nominativo":{
                                                nomeTag: "Nominativo",
                                                color: "morfologica",
                                                visible: false,
                                             }
                            },
                        color:{
                            isColored: false,
                            nameColor: "blue"
                        }

                    },
                    in_scholā:{
                        isComplement: true,
                        tag:{
                            "Ablativo":{
                                                nomeTag: "Ablativo",
                                                color: "morfologica",
                                                visible: false,
                                                rightPart: true,

                                            },
                            "Stato in Luogo":{
                                                nomeTag: "Stato in Luogo",
                                                color: "sintattica",
                                                visible: false,

                                            }

                        },
                        partsOfComplement:{
                            in:{
                                parteDiscorso:"Preposizione",
                                tag:{
                                    "Preposizione": false
                                }
                            },
                            scholā:{
                                tag:{
                                   "Ablativo": false
                                },
                                parteDiscorso:"Ablativo",

                            }
                        }
                    },
                    est:{
                        isComplement: false,
                        tag:{
                                "Singolare":    {
                                                    nomeTag: "Singolare",
                                                    color: "morfologica",
                                                    visible: false,

                                                },
                                "Predicato Verbale": {
                                                    nomeTag: "Predicato Verbale",
                                                    color: "sintattica",
                                                    visible: false,

                                                    },
                                "Verbo di Stato": {
                                                    nomeTag:"Verbo di Stato",
                                                    color: "POS",
                                                    visible: false,

                                                 }

                        },
                        parteDiscorso:"Predicato Verbale",
                    }
                }},
            {
                sentence: "Dominae ancillă rosam praebet filiae",
                arrayTag: [],
                otherTranslations: [
                                        "La serva offre una rosa alla padrona della figlia",
                                        "La serva della figlia offre una rosa alla padrona",
                                    ],
                sentenceLength: 5,
                isTranslated: false,
                objectWords: {
                    Dominae:{
                        isComplement: false,
                        tag:{
                            "Dativo Singolare":{
                                            nomeTag: "Dativo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Complemento di Termine":{
                                            nomeTag: "Complemento di Termine",
                                            color: "POS",
                                            visible: false
                            },
                             "Genitivo Singolare":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                        },

                    },
                    ancillă:{
                        isComplement: false,
                        tag:{
                            "Nominativo Singolare":{
                                            nomeTag: "Nominativo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "sintattica",
                                            visible: false
                            }
                        },

                    },
                    rosam:{
                        isComplement: false,
                        tag:{
                            "Accusativo":{
                                            nomeTag: "Accusativo",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Complemento Oggetto":{
                                            nomeTag: "Complemento Oggetto",
                                            color: "sintattica",
                                            visible: false
                            }
                        },
                    },
                    praebet:{
                        isComplement: false,
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "POS",
                                            visible: false
                            },
                            "Singolare":{
                                            nomeTag: "Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "POS",
                                            visible: false
                            }

                        },
                    },
                    filiae:{
                        isComplement: false,
                        tag: {
                            "Dativo Singolare":{
                                            nomeTag: "Dativo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Complemento di Termine":{
                                            nomeTag: "Complemento di Termine",
                                            color: "sintattica",
                                            visible: false
                            },
                             "Genitivo Singolare":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                        }
                    }
            }},
            {
                sentence: "Lusciniă canit ancillis",
                arrayTag: [],
                otherTranslations: [
                                        "L'usignolo canta alle ancelle"
                                    ],
                sentenceLength: 3,
                isTranslated: false,
                objectWords:{
                    Luscinia:{
                        isComplement: false,
                        tag:{
                            "Nominativo Singolare":{
                                            nomeTag: "Nominativo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "sintattica",
                                            visible: false
                            }
                        }
                    },
                    canit:{
                        isComplement: false,
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "POS",
                                            visible: false
                            },
                            "Singolare":{
                                            nomeTag: "Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "POS",
                                            visible: false
                            }
                        }
                    },
                    ancillis:{
                        isComplement: false,
                        tag:{
                            "Dativo Plurale":{
                                            nomeTag: "Dativo Plurale",
                                            color: "morfologica",
                                            visible: false,
                            },
                            "Complemento di Vantaggio":{
                                            nomeTag: "Complemento di Vantaggio",
                                            color: "sintattica",
                                            visible: false
                            },
                             "Ablativo Plurale":{
                                            nomeTag: "Ablativo Plurale",
                                            color: "morfologica",
                                            visible: false,
                            },
                            "Complemento Causa":{
                                            nomeTag: "Complemento Causa",
                                            color: "sintattica",
                                            visible: false
                            },
                        }
                    }
                }
            },
            {
                sentence: "Bonam dominam amant ancillae",
                arrayTag: [],
                sentenceLength: 4,
                isTranslated: false,
                objectWords: {
                    Bonam: {
                        tag: {
                            "Accusativo": {
                                            nomeTag: "Accusativo",
                                            color: "morfologica",
                                            visible: false,
                            },
                            "Aggettivo": {
                                            nomeTag: "Aggettivo",
                                            color: "POS",
                                            visible: false,
                            },
                            "Femminile": {
                                            nomeTag: "Femminile",
                                            color: "morfologica",
                                            visible: false,
                            }

                        }
                    },
                    dominam: {
                        tag:{
                             "Accusativo":{
                                            nomeTag: "Accusativo",
                                            color: "morfologica",
                                            visible: false,
                            },
                            "Sostantivo":{
                                            nomeTag: "Sostantivo",
                                            color: "POS",
                                            visible: false,
                            },
                            "Femminile":{
                                            nomeTag: "Femminile",
                                            color: "morfologica",
                                            visible: false,
                            },
                        }

                    },
                    ancillae: {
                        tag: {
                            "Nominativo Singolare":{
                                            nomeTag: "Nominativo Singolare",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "sintattica",
                                            visible: false
                            }
                        }
                    },
                    amant: {
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "POS",
                                            visible: false
                            },
                            "Plurale":{
                                            nomeTag: "Plurale",
                                            color: "morfologica",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "POS",
                                            visible: false
                            }
                        }
                    },
                }
            }
        ]
    },
    reducers: {
        nextSentence: state => {
            if (state.current < state.sentences.length -1) {
                state.current ++
            }
        },
        prevSentence: state => {
            if (state.current > 0) {
                state.current --
            }
        },
        setTag: (state, action) => {
            state.sentences[action.payload.numberSentence].objectWords[action.payload.word].tag[action.payload.answer].visible = action.payload.valueOfBool


        },
        setIsTranslated:(state, action) => {
            state.sentences[action.payload.numberSentence].isTranslated = action.payload.valueOfBool
        },
        addTag:(state, action) => {
            state.sentences[action.payload.numberSentence].arrayTag.push([{word: action.payload.word, answer: action.payload.answer}])

        },
        removeTag:(state, action) =>{
            state.sentences[action.payload.numberSentence].arrayTag.pop()
        }


    }
})





export const {
    nextSentence,
    prevSentence,
    setTag,
    addTag,
    removeTag,
    setIsTranslated
} = sliceSentence.actions

export const selectCurrentSentence = state => state.sentencer.current

export const selectSentences = state => state.sentencer.sentences



export const selectSentence = createSelector(
    selectCurrentSentence, selectSentences,
    (current, sentences) => sentences[current]

)

export const selectOtherTranslations = createSelector(
    selectSentence,
    (sentence) => {
        if (sentence.hasOwnProperty("otherTranslations")){
            return sentence.otherTranslations
        }
        else
            return [""]
    }
)

export const selectArrayTag = createSelector(
    selectSentence,
    (sentence) => sentence.arrayTag
)

export const selectSentenceLenght = createSelector(
    selectSentence,
    (sentence) => sentence.sentenceLength
)

export const selectIsTranslated = createSelector(
    selectSentence,
    (sentence) => sentence.isTranslated
)

export const selectObjectWords = createSelector(
    selectSentence,
    (sentence) => sentence.objectWords
)

export default sliceSentence.reducer;

