import React, {useEffect, useState} from 'react';
import frasi from "../frasi.json";
import $ from "jquery"



    function riempiArrayFrasi(frase){
        let arrayParole = []
        let arrayClassiParola = []
        let arrInfoParola = []
        let stringaClassi = ""
        //console.log(frase)
        for (let parteFrase in frase) {
            if (parteFrase !== "frase") {
                //console.log(parteFrase)
                arrayParole.push(parteFrase)
            }
        }

        for (let index in arrayParole){
            //console.log("PAROLA: " + arrayParole[index])
            for (let info in frase[arrayParole[index]]){
                //console.log(info+" CLASSE: "+frase[arrayParole[index]][info])
                arrInfoParola.push(frase[arrayParole[index]][info])
            }
            arrayClassiParola.push(arrInfoParola)
            arrInfoParola = []

        }
        return(
            [arrayClassiParola, arrayParole]
        )
    }

    function Checkbox({frase}) {
        let arrayClassiParola=riempiArrayFrasi(frase)[0]
        let arrayParole=riempiArrayFrasi(frase)[1]
        let arrayClassiPossibili = []
        let setClassi = new Set()
        //console.log(setClassi)
        for (let arrayClassi of arrayClassiParola) {
            //console.log(arrayClassi)
            for (let classi of arrayClassi){
                setClassi.add(classi)
                //console.log(classi)
            }
        }
        arrayClassiPossibili = Array.from(setClassi)
        //console.log(arrayClassiPossibili)
        return (
            arrayClassiPossibili.map((classe, index) => {
                if (classe === "nominativo" || classe === "predicatoNominale" || classe === "predicatoVerbale" || classe === "genitivo" || classe === "prima") {
                    return (
                    <div className={classe+"-checkbox"}>
                        <input onChange={() => gestisciCheckbox({arrayClassiPossibili, classe})} defaultChecked={false} type="checkbox" id={classe+"-checkbox"}/>
                        {classe}
                    </div>
                    )
                }
            })
        )}

    function gestisciCheckbox({arrayClassiPossibili, classe}){
        if ($("#"+classe+"-checkbox").is(":checked")) {
          $("."+classe).addClass("active")
        }
        else {
            $("."+classe).removeClass("active")
        }
        return
    }
    function Frase({frase, numeroFrase, arrayClassi}) {

        let arrayClassiParola=riempiArrayFrasi(frase)[0]
        let arrayParole=riempiArrayFrasi(frase)[1]
        //console.log(arrayClassiParola)
        //console.log(arrayParole)
        //console.log(arrayParole)
        //console.log(arrayClassiParola)
        //arrayClassi=arrayClassiParola
        //console.log(arrayClassi)
        return (
            arrayParole.map((parola, index) =>(

                <div key={index} className = {arrayClassiParola[index].toString().replace(/,/g, " ")} >
                    {parola}
                </div>

                )
            ))
    }




    function GetFrase(props) {
        const [dizionario, setDizionario] = useState(frasi)
        const [numeroFrase, setNumeroFrase] = useState(0)
        const [arrayClassi, setArrayClassi] = useState([])
        return (

            <div className="container" key={numeroFrase}>
                <div className="frase" id="frase">
                    <Frase frase={dizionario[numeroFrase]} numeroFrase={numeroFrase}/>
                </div>
                <div className="button-container">
                    <button type="button" className="btn btn-primary" onClick={() => setNumeroFrase(numeroFrase-1)}> Precedente</button>
                    <button type="button" className="btn btn-primary" onClick={() => setNumeroFrase(numeroFrase+1)}> Successivo</button>
                </div>
                <div className="custom-checkbox">
                    <Checkbox frase={dizionario[numeroFrase]} numeroFrase={numeroFrase}/>
                </div>
            </div>
        )
    }



export default GetFrase;
