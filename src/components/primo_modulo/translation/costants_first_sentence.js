import {useSelector} from "react-redux";
import {selectCurrentSentence} from "../../../features/sentenceSlice";

export const items =

    [
        [
            [
                {columnParent: "column-1", id: "item-1", content: 'LA RAGAZZA'},
                {columnParent: "column-1", id: "item-2", content: 'LA BAMBINA'},
                {columnParent: "column-1", id: "item-3", content: 'LA SIGNORA'},
                {columnParent: "column-1", id: "item-4", content: 'LA MATRONA'}
            ],
            [
                {columnParent: "column-2", id: "item-5", content: 'È'},
                {columnParent: "column-2", id: "item-6", content: 'STAVA'},
                {columnParent: "column-2", id: "item-7", content: 'ERA'},
                {columnParent: "column-2", id: "item-8", content: 'VIENE'}
            ],
            [
                {columnParent: "column-3", id: "item-9", content: 'NELLA SCUOLA'},
                {columnParent: "column-3", id: "item-10", content: 'IN CASA'},
                {columnParent: "column-3", id: "item-11", content: 'DALLA SCUOLA'},
                {columnParent: "column-3", id: "item-12", content: 'DALLA CASA'}
            ]
        ],
        [
            [
                {columnParent: "column-1", id: "item-1", content: 'ALLA PADRONA'},
                {columnParent: "column-1", id: "item-2", content: 'DELLA PADRONA'},
                {columnParent: "column-1", id: "item-3", content: 'LE PADRONE'},
                {columnParent: "column-1", id: "item-4", content: 'PER LA PADRONA'}
            ],
            [
                {columnParent: "column-2", id: "item-5", content: 'LA SERVA'},
                {columnParent: "column-2", id: "item-6", content: 'PER LA SERVA'},
                {columnParent: "column-2", id: "item-7", content: 'CON LA SERVA'},
                {columnParent: "column-2", id: "item-8", content: 'OH SERVA'}
            ],
            [
                {columnParent: "column-3", id: "item-9", content: 'UNA ROSA'},
                {columnParent: "column-3", id: "item-10", content: 'IL FIORE'},
                {columnParent: "column-3", id: "item-11", content: 'IL ROSA'},
                {columnParent: "column-3", id: "item-12", content: 'LE ROSE'}
            ],
            [
                {columnParent: "column-4", id: "item-13", content: 'OFFRE'},
                {columnParent: "column-4", id: "item-14", content: 'OFFRIVA'},
                {columnParent: "column-4", id: "item-15", content: 'OFFRI\''},
                {columnParent: "column-4", id: "item-16", content: 'OFFRIRA\''}
            ],
            [
                {columnParent: "column-5", id: "item-17", content: 'ALLA FIGLIA'},
                {columnParent: "column-5", id: "item-18", content: 'DELLA FIGLIA'},
                {columnParent: "column-5", id: "item-19", content: 'LE FIGLIE'},
                {columnParent: "column-5", id: "item-20", content: 'PER LE FIGLIE'}
            ]
        ],
        /**[
            [
                {columnParent: "column-1", id: "item-1", content: 'ALLA PADRONA'},
                {columnParent: "column-1", id: "item-2", content: 'DELLA PADRONA'},
                {columnParent: "column-1", id: "item-3", content: 'LE PADRONE'},
                {columnParent: "column-1", id: "item-4", content: 'PER LA PADRONA'}
            ],
            [
                {columnParent: "column-2", id: "item-5", content: 'LA SERVA'},
                {columnParent: "column-2", id: "item-6", content: 'PER LA SERVA'},
                {columnParent: "column-2", id: "item-7", content: 'CON LA SERVA'},
                {columnParent: "column-2", id: "item-8", content: 'OH SERVA'}
            ],
            [
                {columnParent: "column-3", id: "item-9", content: 'AMA'},
                {columnParent: "column-3", id: "item-10", content: 'AMAVA'},
                {columnParent: "column-3", id: "item-11", content: 'TIENE'},
                {columnParent: "column-3", id: "item-12", content: 'OFFRE'}
            ],
            [
                {columnParent: "column-4", id: "item-13", content: 'ALLA PADRONA'},
                {columnParent: "column-4", id: "item-14", content: 'DELLA PADRONA'},
                {columnParent: "column-4", id: "item-15", content: 'LE PADRONE\''},
                {columnParent: "column-4", id: "item-16", content: 'PER LA PADRONA\''}
            ],
            [
                {columnParent: "column-5", id: "item-17", content: 'LA FIGLIA'},
                {columnParent: "column-5", id: "item-18", content: 'ALLA FIGLIA'},
                {columnParent: "column-5", id: "item-19", content: 'UNA FIGLIA'},
                {columnParent: "column-5", id: "item-20", content: 'OH FIGLIA'}
            ]
        ],**/
        [
            [
                {columnParent: "column-1", id: "item-1", content: 'L\'USIGNOLO'},
                {columnParent: "column-1", id: "item-2", content: 'GLI USIGNOLI'},
                {columnParent: "column-1", id: "item-3", content: 'LUSCINIA'},
                {columnParent: "column-1", id: "item-4", content: 'A CAUSA DELL\'USIGNOLO'}
            ],
            [
                {columnParent: "column-2", id: "item-5", content: 'CANTA'},
                {columnParent: "column-2", id: "item-6", content: 'CANTAVA'},
                {columnParent: "column-2", id: "item-7", content: 'CANTO\''},
                {columnParent: "column-2", id: "item-8", content: 'CANTANO'}
            ],
            [
                {columnParent: "column-3", id: "item-9", content: 'ALLE SERVE'},
                {columnParent: "column-3", id: "item-10", content: 'PER LE SERVE'},
                {columnParent: "column-3", id: "item-11", content: 'CON LE SERVE'},
                {columnParent: "column-3", id: "item-12", content: 'DELLE SERVE'}
            ],
        ],
        [
            [
                {columnParent: "column-1", id: "item-1", content: 'LA BUONA'},
                {columnParent: "column-1", id: "item-2", content: 'BUONA'},
                {columnParent: "column-1", id: "item-3", content: 'ALLA BUONA'},
                {columnParent: "column-1", id: "item-4", content: 'CON LA BUONA'},
            ],
            [
                {columnParent: "column-2", id: "item-5", content: 'PADRONA'},
                {columnParent: "column-2", id: "item-6", content: 'LA PADRONA'},
                {columnParent: "column-2", id: "item-7", content: 'CON LA PADRONA'},
                {columnParent: "column-2", id: "item-8", content: 'OH PADRONA'},
            ],
            [
                {columnParent: "column-3", id: "item-9", content: 'AMAVANO'},
                {columnParent: "column-3", id: "item-10", content: 'AMANO'},
                {columnParent: "column-3", id: "item-11", content: 'AMERANNO'},
                {columnParent: "column-3", id: "item-12", content: 'AMINO'},
            ],
            [
                {columnParent: "column-4", id: "item-13", content: 'LE SERVE'},
                {columnParent: "column-4", id: "item-14", content: 'DELLA SERVA'},
                {columnParent: "column-4", id: "item-15", content: 'ALLA SERVA'},
                {columnParent: "column-4", id: "item-16", content: 'OH SERVE'},
            ]
        ]
    ]

export const translated =
    [
        [
            {columnParent: "column-1", id: "item-1", content: 'LA RAGAZZA'},
            {columnParent: "column-2", id: "item-5", content: 'È'},
            {columnParent: "column-3", id: "item-9", content: 'NELLA SCUOLA'},
        ],
        [
            {columnParent: "column-2", id: "item-5", content: 'LA SERVA'},
            {columnParent: "column-1", id: "item-2", content: 'DELLA PADRONA'},
            {columnParent: "column-4", id: "item-13", content: 'OFFRE'},
            {columnParent: "column-3", id: "item-9", content: 'UNA ROSA'},
            {columnParent: "column-5", id: "item-17", content: 'ALLA FIGLIA'},
        ],
       /** [
            {id: "item-5", content: 'LA SERVA'},
            {id: "item-2", content: 'DELLA PADRONA'},
            {id: "item-9", content: 'AMA'},
            {id: "item-17", content: 'LA FIGLIA'},
            {id: "item-14", content: 'DELLA PADRONA'},
        ],**/
        [
            {columnParent: "column-1", id: "item-1", content: 'L\'USIGNOLO'},
            {columnParent: "column-2", id: "item-5", content: 'CANTA'},
            {columnParent: "column-3", id: "item-10", content: 'PER LE SERVE'},
        ],
        [
            {columnParent: "column-4", id: "item-13", content: 'LE SERVE'},
            {columnParent: "column-3", id: "item-10", content: 'AMANO'},
            {columnParent: "column-1", id: "item-1", content: 'LA BUONA'},
            {columnParent: "column-2", id: "item-5", content: 'PADRONA'}
        ]

    ]


export const columns ={
    0:{
        ["column-1"]: {
            name: 'PUELLA',
            items: items[0][0],
            translatePlace: false
        },
        ["column-2"]: {
            name: 'EST',
            items: items[0][1],
            translatePlace: false
        },
        ["column-3"]: {
            name: 'IN SCHOLA',
            items: items[0][2],
            translatePlace: false
        }
    },
    1:{
        ["column-1"]: {
            name: 'DOMINAE',
            items: items[1][0],
            translatePlace: false
        },
        ["column-2"]: {
            name: 'ANCILLA',
            items: items[1][1],
            translatePlace: false
        },
        ["column-3"]: {
            name: 'ROSAM',
            items: items[1][2],
            translatePlace: false
        },
        ["column-4"]: {
            name: 'PRAEBET',
            items: items[1][3],
            translatePlace: false
        },
        ["column-5"]: {
            name: 'FILIAE',
            items: items[1][4],
            translatePlace: false
        }

    },
    /**2:{
        ["column-1"]: {
            name: 'DOMINAE',
            items: items[2][0],
            translatePlace: false
        },
        ["column-2"]: {
            name: 'ANCILLA',
            items: items[2][1],
            translatePlace: false
        },
        ["column-3"]: {
            name: 'AMAT',
            items: items[2][2],
            translatePlace: false
        },
        ["column-4"]: {
            name: 'DOMINAE',
            items: items[2][3],
            translatePlace: false
        },
        ["column-5"]: {
            name: 'FILIAM',
            items: items[2][4],
            translatePlace: false
        }
    },**/
    2:{
        ["column-1"]: {
            name: 'LUSCINIA',
            items: items[2][0],
            translatePlace: false
        },
        ["column-2"]: {
            name: 'CANIT',
            items: items[2][1],
            translatePlace: false
        },
        ["column-3"]: {
            name: 'ANCILLIS',
            items: items[2][2],
            translatePlace: false
        }
    },
    3:{
        ["column-1"]: {
            name: 'BONAM',
            items: items[3][0],
            translatePlace: false
        },
        ["column-2"]: {
            name: 'DOMINAM',
            items: items[3][1],
            translatePlace: false
        },
        ["column-3"]: {
            name: 'AMANT',
            items: items[3][2],
            translatePlace: false
        },
        ["column-4"]: {
            name: 'ANCILLAE',
            items: items[3][3],
            translatePlace: false
        },
    }
}
export const columnsVoid = {
    0:{
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
    },
    1:{
        ["column-void-1"]:{
            columnParent: "column-2",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-2"]:{
            columnParent: "column-1",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-3"]:{
            columnParent: "column-4",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-4"]:{
            columnParent: "column-3",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-5"]:{
            columnParent: "column-5",
            name: '',
            items: [],
            translatePlace: true
        }
    },
    /**2:{
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
        },
        ["column-void-4"]:{
            columnParent: "column-4",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-5"]:{
            columnParent: "column-5",
            name: '',
            items: [],
            translatePlace: true
        }
    },**/
    2: {
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
    },
    3: {
        ["column-void-1"]:{
            columnParent: "column-4",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-2"]:{
            columnParent: "column-3",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-3"]:{
            columnParent: "column-1",
            name: '',
            items: [],
            translatePlace: true
        },
        ["column-void-4"]:{
            columnParent: "column-2",
            name: '',
            items: [],
            translatePlace: true
        }
    }
}
    export function GetDndStuff(){
    const numberSentence = useSelector(selectCurrentSentence)
    console.log("NUMBERSENTENCE", numberSentence)
        return [items[numberSentence], translated[numberSentence], columns[numberSentence], columnsVoid[numberSentence]]

    }

