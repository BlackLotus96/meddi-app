  import { createSlice } from '@reduxjs/toolkit';
  import {slice} from "./counterSlice";
  import {createSelector} from "reselect";
  import {selectQuestions, selectSetQuestions} from "./questionsSlice";
  //import {items} from "../components/primo_modulo/translation/costants_first_sentence";

export const sliceModal = createSlice({
  name: 'modal',
  initialState: {
        modalPredicatoVerbale: false,
        modalPuella: false,
        modalSchola: false,
        modalAncilla: false,
        modalLuscinia: false,
        verbiTransitivi: [
                        {
                            header: "Mangiare",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"La ragazza"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"mangia",
                                            tipo:"Transitivo"
                                        },
                                        {
                                            parteDiscorso: "Complemento Oggetto",
                                            testo:"una mela"
                                        }
                                    ],

                        },
                        {
                            header: "Dare",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"Il cane"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"da",
                                            tipo:"Transitivo"
                                        },
                                        {
                                            parteDiscorso: "Complemento Oggetto",
                                            testo:"un morso"
                                        }
                                    ],

                        },
                        {
                            header: "Comporre",
                            frase: [
                                        {   parteDiscorso: "Sogg.",
                                            testo:"Il musicista"
                                        },
                                        {   parteDiscorso: "P.Verbale",
                                            testo:"compone",
                                            tipo:"Transitivo"
                                        },
                                        {   parteDiscorso: "Complemento Oggetto",
                                            testo:"una canzone"
                                        }
                                    ],
                        }
                        ],
        verbiIntransitivi: [
                        {
                            header: "Arrossire",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"Laura"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"arrossisce",
                                            tipo:"Intransitivo"
                                        },
                                        {
                                            parteDiscorso: "Complemento di Causa",
                                            testo:"per un complimento"
                                        }
                                    ],

                        },
                        {
                            header: "Rinunciare",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"Il calciatore"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"rinuncia",
                                            tipo:"Intransitivo"
                                        },
                                        {
                                            parteDiscorso: "Complemento di Termine",
                                            testo:"al suo stipendio"
                                        }
                                    ],

                        },
                        {
                            header: "Ridere",
                            frase: [
                                        {   parteDiscorso: "Sogg.",
                                            testo:"Giulio"
                                        },
                                        {   parteDiscorso: "P.Verbale",
                                            testo:"ride",
                                            tipo:"Intransitivo"
                                        },
                                        {   parteDiscorso: "Complemento di Specificazione",
                                            testo:"della battuta"
                                        },
                                        {   parteDiscorso: "Complemento di Specificazione",
                                            testo:"di Marco"
                                        }
                                    ],
                        }
                        ],
        verbiDiStato: [
                        {
                            header: "Essere",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"Il bambino"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"è",
                                            tipo:"stato"
                                        },
                                        {
                                            parteDiscorso: "Stato in Luogo",
                                            testo:"in casa"
                                        }
                                    ],

                        },
                        {
                            header: "Stare",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"Il cane"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"sta",
                                            tipo:"stato"
                                        },
                                        {
                                            parteDiscorso: "Stato in Luogo",
                                            testo:"in giardino"
                                        }
                                    ],

                        },
                        {
                            header: "Rimanere",
                            frase: [
                                        {   parteDiscorso: "Sogg.",
                                            testo:"Il gatto"
                                        },
                                        {   parteDiscorso: "P.Verbale",
                                            testo:"rimane",
                                            tipo:"stato"
                                        },
                                        {   parteDiscorso: "Stato in Luogo",
                                            testo:"sul tavolo"
                                        }
                                    ],
                        }
                        ],
        verbiDiMoto: [ {
                            header: "Andare",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"La ragazza"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"è andata",
                                            tipo:"moto"
                                        },
                                        {
                                            parteDiscorso: "Stato in Luogo",
                                            testo:"al mercato"
                                        }
                                    ]
                        },
                        {
                            header: "Partire",
                            frase: [
                                        {
                                            parteDiscorso: "Sogg.",
                                            testo:"Luca"
                                        },
                                        {
                                            parteDiscorso: "P.Verbale",
                                            testo:"parte",
                                            tipo:"moto"
                                        },
                                        {
                                            parteDiscorso: "Stato in Luogo",
                                            testo:"a Londra"
                                        }
                                    ]
                        },
                        {
                            header: "Correre",
                            frase: [
                                        {   parteDiscorso: "Sogg.",
                                            testo:"La ragazza"
                                        },
                                        {   parteDiscorso: "P.Verbale",
                                            testo:"corre",
                                            tipo:"moto"
                                        },
                                        {   parteDiscorso: "Stato in Luogo",
                                            testo:"verso casa"
                                        }
                                    ]
                        }
                    ],

  },
  reducers: {
    setModalPredicatoVerbale: (state, action) => {
        state.modalPredicatoVerbale = action.payload.valueOfBool
    },
    setModalPuella: (state, action) => {
        state.modalPuella = action.payload.valueOfBool
    },
    setModalSchola: (state, action) => {
        state.modalSchola = action.payload.valueOfBool
    },
    setModalAncilla: (state, action) => {
        state.modalAncilla = action.payload.valueOfBool
    },
    setModalLuscinia: (state, action) => {
        state.modalLuscinia = action.payload.valueOfBool
    }
  },
});

export const { setModalPredicatoVerbale, setModalPuella, setModalSchola, setModalAncilla, setModalLuscinia} = sliceModal.actions;

export const selectModalPredicatoVerbale = state => state.modaler.modalPredicatoVerbale
export const selectModalPuella = state => state.modaler.modalPuella
export const selectModalAncilla = state => state.modaler.modalAncilla
export const selectModalLuscinia = state => state.modaler.modalLuscinia
export const selectModalSchola = state => state.modaler.modalSchola
export const selectVerbiDiStato = state => state.modaler.verbiDiStato
export const selectVerbiDiMoto = state => state.modaler.verbiDiMoto
export const selectVerbiTransitivi = state => state.modaler.verbiTransitivi
export const selectVerbiIntransitivi = state => state.modaler.verbiIntransitivi



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default sliceModal.reducer;
