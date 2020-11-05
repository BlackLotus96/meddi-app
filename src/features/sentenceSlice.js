import {createSlice, current} from '@reduxjs/toolkit';
import {createSelector} from "reselect";
import {selectQuestions} from "./questionsSlice";


export const sliceSentence = createSlice({
    name: 'setSentences',
    initialState: {
        current: 0,
        sentences: [
            {
                arrayTag: [],
                sentence:"Puellă est in scholā",
                sentenceLength: 3,
                isTranslated: false,
                objectWords:{
                    Puellă:{
                        isComplement: false,
                        tag: {
                                "Nominativo":{
                                                nomeTag: "Nominativo",
                                                color: "darkmagenta",
                                                visible: false,
                                             }
                            },
                        color:{
                            isColored: false,
                            nameColor: "blue"
                        }

                    },
                    est:{
                        isComplement: false,
                        tag:{
                                "Singolare":    {
                                                    nomeTag: "Singolare",
                                                    color: "red",
                                                    visible: false,

                                                },
                                "Predicato Verbale": {
                                                    nomeTag: "Predicato Verbale",
                                                    color: "green",
                                                    visible: false,

                                                    },
                                "Verbo di Stato": {
                                                    nomeTag:"Verbo di Stato",
                                                    color: "blue",
                                                    visible: false,

                                                 }

                        },
                        parteDiscorso:"Predicato Verbale",
                    },
                    in_scholā:{
                        isComplement: true,
                        tag:{
                            "Ablativo":{
                                                nomeTag: "Ablativo",
                                                color: "darkmagenta",
                                                visible: false,
                                                rightPart: true,

                                            },
                            "Stato in Luogo":{
                                                nomeTag: "Stato in Luogo",
                                                color: "orange",
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
                    }
                }},
            {
                arrayTag: [],
                sentence: "Dominae ancillă rosam praebet filiae",
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
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Complemento di Termine":{
                                            nomeTag: "Complemento di Termine",
                                            color: "orange",
                                            visible: false
                            },
                             "Genitivo Singolare":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                        },

                    },
                    ancillă:{
                        isComplement: false,
                        tag:{
                            "Nominativo Singolare":{
                                            nomeTag: "Nominativo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "orange",
                                            visible: false
                            }
                        },

                    },
                    rosam:{
                        isComplement: false,
                        tag:{
                            "Accusativo":{
                                            nomeTag: "Accusativo",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Complemento Oggetto":{
                                            nomeTag: "Complemento Oggetto",
                                            color: "orange",
                                            visible: false
                            }
                        },
                    },
                    praebet:{
                        isComplement: false,
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Singolare":{
                                            nomeTag: "Singolare",
                                            color: "orange",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "orange",
                                            visible: false
                            }

                        },
                    },
                    filiae:{
                        isComplement: false,
                        tag: {
                            "Dativo Singolare":{
                                            nomeTag: "Dativo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Complemento di Termine":{
                                            nomeTag: "Complemento di Termine",
                                            color: "orange",
                                            visible: false
                            },
                             "Genitivo Singolare":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                        }
                    }
            }},
            /**{
                arrayTag: [],
                sentence: "Dominae ancillă amat dominae filiam",
                sentenceLength: 5,
                isTranslated: false,
                objectWords: {
                    Dominae:{
                        isComplement: false,
                        id: 1,
                        tag:{
                            "Dativo Singolare":{
                                            nomeTag: "Dativo Singolare",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Complemento di Termine":{
                                            nomeTag: "Complemento di Termine",
                                            color: "orange",
                                            visible: false
                            },
                             "Genitivo Singolare":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Complemento Specificazione":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                        },

                    },
                    ancillă:{
                        isComplement: false,
                        tag:{
                            "Nominativo Singolare":{
                                            nomeTag: "Nominativo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "orange",
                                            visible: false
                            }
                        },
                    },
                    amat:{
                        isComplement: false,
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Singolare":{
                                            nomeTag: "Singolare",
                                            color: "orange",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "orange",
                                            visible: false
                            }

                        },
                    },
                    dominae:{
                        isComplement: false,
                        id: 2,
                        tag:{
                            "Dativo Singolare":{
                                            nomeTag: "Dativo Singolare",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Complemento di Termine":{
                                            nomeTag: "Complemento di Termine",
                                            color: "orange",
                                            visible: false
                            },
                             "Genitivo Singolare":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Complemento Specificazione":{
                                            nomeTag: "Genitivo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                        },

                    },
                    filiam:{
                        isComplement: false,
                        tag:{
                            "Accusativo":{
                                            nomeTag: "Accusativo",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Complemento Oggetto":{
                                            nomeTag: "Complemento Oggetto",
                                            color: "orange",
                                            visible: false
                            }
                        },
                    }
                }
            },  **/
            {
                sentence: "Luscinia canit ancillis",
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
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "orange",
                                            visible: false
                            }
                        }
                    },
                    canit:{
                        isComplement: false,
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Singolare":{
                                            nomeTag: "Singolare",
                                            color: "orange",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "orange",
                                            visible: false
                            }
                        }
                    },
                    ancillis:{
                        isComplement: false,
                        tag:{
                            "Dativo Plurale":{
                                            nomeTag: "Dativo Plurale",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Complemento di Vantaggio":{
                                            nomeTag: "Complemento di Vantaggio",
                                            color: "orange",
                                            visible: false
                            },
                             "Ablativo Plurale":{
                                            nomeTag: "Ablativo Plurale",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Complemento Causa":{
                                            nomeTag: "Complemento Causa",
                                            color: "darkmagenta",
                                            visible: false
                            },
                        }
                    }
                }
            },
            {
                sentence: " Bonam dominam amant ancillae",
                arrayTag: [],
                sentenceLength: 4,
                isTranslated: false,
                objectWords: {
                    Bonam: {
                        tag: {
                            "Accusativo": {
                                            nomeTag: "Accusativo",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Aggettivo": {
                                            nomeTag: "Aggettivo",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Femminile": {
                                            nomeTag: "Femminile",
                                            color: "darkmagenta",
                                            visible: false,
                            }

                        }
                    },
                    dominam: {
                        tag:{
                             "Accusativo":{
                                            nomeTag: "Accusativo",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Sostantivo":{
                                            nomeTag: "Sostantivo",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                            "Femminile":{
                                            nomeTag: "Femminile",
                                            color: "darkmagenta",
                                            visible: false,
                            },
                        }

                    },
                    ancillae: {
                        tag: {
                            "Nominativo Singolare":{
                                            nomeTag: "Nominativo Singolare",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Soggetto":{
                                            nomeTag: "Soggetto",
                                            color: "orange",
                                            visible: false
                            }
                        }
                    },
                    amant: {
                        tag:{
                            "3 Persona":{
                                            nomeTag: "3 Persona",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Predicato Verbale":{
                                            nomeTag: "Predicato Verbale",
                                            color: "darkmagenta",
                                            visible: false
                            },
                            "Plurale":{
                                            nomeTag: "Plurale",
                                            color: "orange",
                                            visible: false
                            },
                            "Transitivo":{
                                            nomeTag: "Transitivo",
                                            color: "orange",
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

