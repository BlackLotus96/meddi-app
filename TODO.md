DA FARE
=======

* Riorganizzare la struttura dati in modo che permetta **più alternative ambigue valide allo stesso tempo**. 
(esistono frasi ambigue con più traduzioni)
* usare **parole minuscole**, le maiuscole solo per i nomi propri o i luoghi
* Per rendere l'app internazionalizzabile:
  * Usare **chiavi e valori in inglese** in modo da poter in seguito condividere l'app nel mondo.
  * Aggiungere un **layer di traduzione** dei termini da inglese a italiano per l'interfaccia
  * Anche per la traduzione della frase, mantenersi **flessibili rispetto alla traduzione verso altre lingue diverse dall'Italiano**

Ad esempio (ma bisogna **controllare la terminologia usata**)

~~~~
"dominae":[
    {   "case":   "genitive",
        "type":   "name",
        "gender": "female",
        "number": "singular",
        "declination": "first",
        "root":   "domin",
        "suffix": "ae",
        "meanings": [ "of a lady" ],
        "correct": true
    },
    {   "case":   "dative",
        "type":   "name",
        "gender": "female",
        "number": "singular",
        "declination": "first",
        "root":   "domin",
        "suffix": "ae",
        "meanings": [ "to a lady" ],
        "correct": false
    },
    {   "case":   "nominative",
        "type":   "name",
        "gender": "female",
        "number": "plural",
        "declination": "first",
        "root":   "domin",
        "suffix": "ae",
        "meanings": [ "ladies" ],
        "correct": false
    },
    {   "case":   "vocative",
        "type":   "name",
        "gender": "female",
        "number": "plural",
        "declination": "first",
        "root":   "domin",
        "suffix": "ae",
        "meanings": [ "oh, ladies" ],
        "correct": false
    }
    ]
~~~~

* Per la traduzione iniziamo con una tabella di corrispondenza per ciascuna lingua 
* **vedere come si fa in genere nelle app in React**

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
