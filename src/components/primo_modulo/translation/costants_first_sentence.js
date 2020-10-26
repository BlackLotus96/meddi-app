export const items =

    [
        [
            {id: "item-1", content: 'LA RAGAZZA'},
            {id: "item-2", content: 'LA BAMBINA'},
            {id: "item-3", content: 'LA SIGNORA'},
            {id: "item-4", content: 'LA MATRONA'}
        ],
        [
            {id: "item-5", content: 'È'},
            {id: "item-6", content: 'STAVA'},
            {id: "item-7", content: 'ERA'},
            {id: "item-8", content: 'VIENE'}
        ],
        [
            {id: "item-9", content: 'NELLA SCUOLA'},
            {id: "item-10", content: 'IN CASA'},
            {id: "item-11", content: 'DALLA SCUOLA'},
            {id: "item-12", content: 'DALLA CASA'}
        ]
    ]

export const translated =
    [
        {id: "item-1", content: 'LA RAGAZZA'},
        {id: "item-5", content: 'È'},
        {id: "item-9", content: 'NELLA SCUOLA'},
    ]

export const columns =
    {
        ["column-1"]: {
            name: 'PUELLA',
            items: items[0],
            translatePlace: false
        },
        ["column-2"]: {
            name: 'EST',
            items: items[1],
            translatePlace: false
        },
        ["column-3"]: {
            name: 'IN SCHOLA',
            items: items[2],
            translatePlace: false
        }

    }

export const columnsVoid =
    {
        ["column-void-1"]:{
            columnParent: "column-1",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-2"]:{
            columnParent: "column-2",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-3"]:{
            columnParent: "column-3",
            name: '',
            items: [],
            translatePlace: true
        }
    }

    export function getDndStuff(numberSentence){

    }