import {createSlice, current} from '@reduxjs/toolkit';
import {createSelector} from "reselect";
import {selectQuestions} from "./questionsSlice";


export const sliceSentence = createSlice({
    name: 'setSentences',
    initialState: {
        current: 0,
        sentences: [{

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
        sentence: "Dominae ancillă rosam praebet",
        sentenceLength: 4,
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
            }
    }}
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
        }


    }
})
































export const {
    nextSentence,
    prevSentence,
    setTag,
    setIsTranslated
} = sliceSentence.actions



































export const selectCurrentSentence = state => state.sentencer.current

export const selectSentences = state => state.sentencer.sentences



export const selectSentence = createSelector(
    selectCurrentSentence, selectSentences,
    (current, sentences) => sentences[current]

)

export const selectSentenceLenght = createSelector(
    selectSentence,
    (sentence) => sentence.sentenceLength
)

export const selectIsTranslated = createSelector(
    selectSentence,
    (sentence) => sentence.isTranslated
)

export default sliceSentence.reducer;

