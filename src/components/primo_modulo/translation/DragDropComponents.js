import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {DivDroppable} from "../../css_primo_modulo/components_frase";
import {
    selectCurrentSentence,
    selectIsTranslated, selectOtherTranslations,
    selectSentenceLenght,
    setIsTranslated
} from "../../../features/sentenceSlice";
//import {items, translated, columns, columnsVoid, getDndStuff} from "./costants_first_sentence";
import {GetDndStuff} from "./costants_first_sentence";
import useSound from "use-sound";
import CorrectAnswer from "../../../audio/CorrectAnswer.mp3";


const onDragEnd = (result, col, setCol, colVoid, setColVoid, translated) => {
    console.log(result)
    if(!result.destination) return;
    const {source, destination} = result
    console.log("SORGENTE", source)
    console.log("DESTINAZIONE", destination)
    //console.log(colVoid)


    /**
     * GESTISCO I DRAG DALLE COLUMN VUOTE A QUELLE PIENE
     */

    if(source.droppableId !== destination.droppableId &&
        source.droppableId.includes("void") &&
        !destination.droppableId.includes("void")
    ){
        console.log("ciao")
        const sourceColumnVoid = colVoid[source.droppableId]
        const destColumn = col[destination.droppableId]
        const sourceItemsVoid = [...sourceColumnVoid.items]
        const destItems = [...destColumn.items]

        const [removed] = sourceItemsVoid.splice(source.index, 1)
        console.log("REMOVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEED", removed)
        if (removed.columnParent === destination.droppableId) {


            destItems.splice(destination.index, 0, removed)

            setColVoid({
                ...colVoid,
                [source.droppableId]: {
                    ...sourceColumnVoid,
                    items: sourceItemsVoid
                }
            })
            setCol({
                ...col,
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            })
        }

    }
    /**
     * GESTISCO I DRAG DALLE COLUMN VUOTE A QUELLE VUOTE
     */
    else if(source.droppableId !== destination.droppableId && source.droppableId.includes("void") && destination.droppableId.includes("void")){
        const sourceColumnVoid = colVoid[source.droppableId]
        const destColumnVoid = colVoid[destination.droppableId]
        const sourceItemsVoid = [...sourceColumnVoid.items]
        const destItemsVoid = [...destColumnVoid.items]

        const [removed] = sourceItemsVoid.splice(source.index, 1)
        destItemsVoid.splice(destination.index, 0, removed)
        setColVoid({
                ...colVoid,
                [source.droppableId]: {
                    ...sourceColumnVoid,
                    items: sourceItemsVoid
                },
                [destination.droppableId]:{
                    ...destColumnVoid,
                    items: destItemsVoid
                }
        })
    }

   /**
     * GESTISCO I DRAG DALLE COLUMN PIENE ALLE COLUMN VUOTE
    */
    else if(source.droppableId !== destination.droppableId && destination.droppableId.includes("void")){
        //console.log(colVoid[destination.droppableId].items.length)
        const sourceColumn = col[source.droppableId]
        const destColumn = colVoid[destination.droppableId]
        //console.log(destColumn)
        const sourceItems = [...sourceColumn.items]
        const destItems = [...destColumn.items]

        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed)

        setCol({
                ...col,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                }
            })
        setColVoid({
            ...colVoid,
            [destination.droppableId]:{
                ...destColumn,
                items: destItems
            }
        })
    }

}



function OnDragUpdate(colVoid, translatedColumn){
    let array = []
    //const [play] = useSound(CorrectAnswer, {volume: 0.25})
    const dispatch = useDispatch();
    const currentSentence = useSelector(selectCurrentSentence)
    const lengthSentence = useSelector(selectSentenceLenght)
    Object.entries(colVoid).map((columnVoid, indexColumnVoid) => {
        //console.log(indexColumnVoid)
        if(columnVoid[1].items.length === 1) {
            console.log(columnVoid[1].items[0])
            array.push(columnVoid[1].items[0])
        }
        if(array.length >= lengthSentence){

        }
    })
    if( JSON.stringify(array) === JSON.stringify(translatedColumn)) {
            console.log("TRADUZIONE CORRETTA")
            //play()
            dispatch(setIsTranslated({numberSentence: currentSentence, valueOfBool: true}))


        }
    else{
        dispatch(setIsTranslated({numberSentence: currentSentence, valueOfBool: false}))
    }
}

/***
 *
 * CIAOOOOOOOOOOOOOOOOOOOOOOOOOO TUTA VIOLA <3 <3 <3 <3 <3 <3 <3 <3 <3 <3
 */


export function DndComponentOptions(props) {
    //console.log(getDndStuff(0))
    let items, translated, columns, columnsVoid;
    [items, translated, columns, columnsVoid] = GetDndStuff()

    const [col, setCol] = useState(columns)
    const [colVoid, setColVoid] = useState(columnsVoid)
    const [translatedColumn, setTranslated] = useState(translated)
    //const [isCorrect, setIsCorrect] = useState(false)

    //const [isDropDisabled, setIsDropDisabled] = useState(false)
    return(

        <div style={{display: 'flex', justifyContent: 'center', fontFamily: "OpenDyslexic-Regular",  alignItems:'center', flexDirection: 'column'}}>
        <DragDropContext
                         onDragUpdate={OnDragUpdate(colVoid, translatedColumn)}
                         onDragEnd={(result) => onDragEnd(result, col, setCol, colVoid, setColVoid, translatedColumn)}>
            <div style={{display: 'flex'}} className="row">
            {Object.entries(col).map(([id, column]) => {
                return (
                    <div key={id}>
                        <h1 style={{display: 'flex', justifyContent: 'center'}}>{column.name}</h1>
                        <div style={{margin: 30}}>
                            <Droppable droppableId={id} key={id}>

                                {(provided, snapshot) => {
                                    return (

                                        <DivDroppable
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            snapshot = {snapshot}
                                            translatePlace = {column.translatePlace}

                                            >
                                            {column.items.map((item, index) =>{
                                                return (
                                                    <Draggable  key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div ref={provided.innerRef}
                                                                     {...provided.draggableProps}
                                                                     {...provided.dragHandleProps}
                                                                     style={{
                                                                         userSelect: 'none',
                                                                         padding: 20,
                                                                         marginTop:4,
                                                                         marginBottom:4,
                                                                         borderRadius: "10px",
                                                                         minHeight: '50px',
                                                                         backgroundColor: snapshot.isDragging ? 'green ' : 'white',
                                                                         color: 'black',
                                                                         ...provided.draggableProps.style
                                                                     }}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </DivDroppable>
                                    )
                                }}
                            </Droppable>
                        </div>
                    </div>
                )
            })}
            </div>

        <div style={{display: 'flex'}} className="row">
        {Object.entries(colVoid).map(([id, columnVoid]) => {
                return (
                    <div key={id}>
                        <h2>{columnVoid.name}</h2>
                        <div style={{margin: 30}}>
                            <Droppable  droppableId={id} key={id}>

                                {(provided, snapshot) => {

                                    return (

                                        <DivDroppable
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            snapshot = {snapshot}
                                            translatePlace = {columnVoid.translatePlace}

                                            >
                                            {columnVoid.items.map((item, index) =>{
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div ref={provided.innerRef}
                                                                     {...provided.draggableProps}
                                                                     {...provided.dragHandleProps}
                                                                     style={{
                                                                         userSelect: 'none',
                                                                         padding: 16,
                                                                         marginTop: 8,
                                                                         borderRadius: "10px",
                                                                         minHeight: '50px',
                                                                         backgroundColor: snapshot.isDragging ? 'green' : 'white',
                                                                         color: 'black',
                                                                         ...provided.draggableProps.style
                                                                     }}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </DivDroppable>
                                    )
                                }}
                            </Droppable>

                        </div>
                    </div>


                )
            })}
            </div>

        </DragDropContext>
        </div>
    )
}