DA FARE
=======

* Riorganizzare la struttura dati in modo che permetta più alternative ambigue valide allo stesso tempo. 
(esistono frasi ambigue con più traduzioni) 
* Per rendere l'app internazionalizzabile:
  * Usare chiavi e valori in inglese in modo da poter in seguito condividere l'app nel mondo.
  * Aggiungere un layer di traduzione dei termini da inglese a italiano per l'interfaccia
  * Anche per la traduzione della frase, mantenersi flessibili rispetto alla traduzione verso altre lingue diverse dall'Italiano

Ad esempio (ma bisogna controllare la terminologia usata)

~~~~
"Dominae":[
    {   "case":   "genitive",
        "type":   "name",
        "gender": "female",
        "number": "singular",
        "declination": "first",
        "root":   "Domin",
        "suffix": "ae",
        "correct": true
    },
    {   "case":   "dative",
        "type":   "name",
        "gender": "female",
        "number": "singular",
        "declination": "first",
        "root":   "Domin",
        "suffix": "ae",
        "correct": false
    },
    {   "case":   "nominative",
        "type":   "name",
        "gender": "female",
        "number": "plural",
        "declination": "first",
        "root":   "Domin",
        "suffix": "ae",
        "correct": false
    },
    {   "case":   "vocative",
        "type":   "name",
        "gender": "female",
        "number": "plural",
        "declination": "first",
        "root":   "Domin",
        "suffix": "ae",
        "correct": false
    }
    ]
~~~~

Per la traduzione basta una tabella di corrispondenza per ciascuna lingua (vedere come si fa in genere nelle app in React)

~~~~
"it" : {
  "nominative" : "nominativo",
  "genitive"   : "genitivo",
  "accusative" : "accusativo",
  "ablative"   : "ablativo",
  "vocative"   : "vocativo",
  "case"       : "caso",
  "declination":"declinazione",
  "first"      : "prima",
  "root"       : "radice",
  "suffix"     : "desinenza",
  "number":    : "numero",
  "gender":    : "genere"
  }
~~~~
