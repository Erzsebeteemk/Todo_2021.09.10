




// T: Főgombra kattintva mindig újabb li-t tesz az ul-be, szövege az, amit a felh. beír az input mezőbe.
let hanyadiksor = 1
let osszessor = 1
let szoveg = null

$("#fogomb").click (()  => {

            szoveg      = $("#inputMezo").val()
            hanyadiksor = parseInt(hanyadiksor)+1
            osszessor = hanyadiksor

            $("ul").append(` <li   class="sor"  id="sor${hanyadiksor}"   data-szamozo="${hanyadiksor}">
                                ${szoveg}
                                <button class="ikon"  data-szamozo="${hanyadiksor}" >  <i class="fas fa-space-shuttle"></i>   </button>
                                <button class="torl" id="torl${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Törlés      </button>
                             </li> 
            `)
}
)
                                /*
                                <button class="jegy" id="jegy${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   J     </button>
                                <button class="megn" id="megn${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   M  </button>
                                <button class="rend" id="rend${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   S     </button>
                                <button class="szin" id="szin${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Sz        </button>
                                */



/*
T: minta
T: Dupla katt: piros-fekete betűszín-váltás.
Ne töröld ki, mert ez minta.

let most = null
$("ul").on("dblclick","li",(event) => {
                                        // console.log(event)
most = $(event.target).css("color")
                                        // console.log(most)                                      
if (`${most}` !== "rgb(255, 0, 0)")      {
    $(event.target).css("color", "rgb(255, 0, 0)")  }
                                        //Egy másik módszerrel toggleClass-szal 2 szín között váltogat:    $(event.target).toggleClass("blue")  és ennél a css-ben kell osztályt felvenni.
else if (`${most}` !== "rgb(0, 0, 0)")   {
    $(event.target).css("color", "rgb(0, 0, 0)")  }
}
)
*/




// T: Törlés gombra kattintva az adott sort mindenestől kitörli.
let mittorol = null

$("ul").on("click", ".torl", (event) => {
    mittorol = $(event.currentTarget).attr("data-szamozo")
    $("#sor"+mittorol).remove()
}
)







/*
//..............................................................................................................
// T: Törlés gombra kattintva az adott sort mindenestől kitörli.

let megerositetttorles = (mittorol) => {
    $("#tenylegtorlom").click(() => {
            $("#sor"+mittorol).remove()
            $(".lathato").toggleClass("rejtett")
    }
    )
}



let mittorol = null

$("ul").on("click", ".torl", (event) => {

    mittorol = $(event.currentTarget).attr("data-szamozo")
                                    console.log(mittorol)   //  pl. a 4-dikre kattintok
    $(".lathato").toggleClass("rejtett")


                                    megerositetttorles("mittorol")


}
)


                                    console.log(mittorol)  
// .................................Kérdés: Hogy lehet itt is megjegyeztetni a fenti data-szamozo értékét?................


// ..................................lesz egy függvényem (70-73. sor), aminek a bemenete lesz a mittorol és a 61. sorban fogom meghívni a fg-t.            
//.......................................................................................................................
*/


    



// T: 1 katt: kék-sárga... háttérszín váltás. Listasor háttérszíne.
katt = 0

$("ul").on("click","li",(event) => {
                                    //   console.log(event)
                                    //   console.log(event.target)
        // T: törlés gomb háttérszíne akkor sem változik meg, ha a Törlés gombra kattintunk.
        // event.target tartalmazza-e a torl osztályt?
        //Ha a Törlés gombra kattintok, akkor a valt nevű változóra true értéket ad.                                      
        let valt = $(event.target).hasClass("torl") 
                                    //   console.log(valt)  
        // Ha a valt értéke nem true, akkor fog lefutni az alatta levő rész.                                       
        if (!valt) {

                        katt = katt + 1
                                                            // console.log(katt)
                                if (katt === 1) {
                                    $(event.target).css("background-color", "rgb(54, 105, 173)")    }
                                else if (katt === 2) {
                                    $(event.target).css("background-color", "rgb(255, 204, 0)")     }
                                else if (katt === 3) {
                                    $(event.target).css("background-color", "rgb(255, 119, 0)")     }
                                else if (katt === 4) {
                                    $(event.target).css("background-color", "rgb(212, 230, 135)")   }
                                else if (katt === 5) {
                                $(event.target).css("background-color", "#c5dae4")               }
                                else if (katt === 6) {
                                    $(event.target).css("background-color", "#fbebfe")              }
                                else if (katt === 7) {
                                $(event.target).css("background-color", "rgb(255, 255, 255)")   
                        katt = 0                                                                    }
        }       //ez a kapcsos zárójel a if (!valt) {    -hez tartozik
}
)



// T: Színminta az inputmező felett (ikonhoz, betűszínhez kapcsolódik.
let szinekikon = ["red", "blue", "green", "white", "yellow", "pink", "black"] 


szinekikon.forEach(function (szinikon) {
    $(".kontenerikon").append("<div class='szinboxikon'> </div>")
    $(".kontenerikon div:last-of-type").css("background-color", szinikon)
}
)





// T: Ikonra kattintva a listaelem betűszíne változik meg (input feletti színsáv szerint).
kattikon = 0
let mitszinezikon = null

$("ul").on("click",".ikon",(event) => {
                                        console.log(event)
    kattikon = kattikon + 1
                                       console.log(kattikon)

    mitszinezikon = $(event.currentTarget).attr("data-szamozo")
                                        console.log(mitszinezikon)

            if (kattikon === 1) {
                $("#sor"+mitszinezikon).css("color", "red")  }       
//                $(li).css("color", "red")    }
            else if (kattikon === 2) {
                $("#sor"+mitszinezikon).css("color", "blue")  }       
//                $(event.target).css("background-color", "rgb(255, 204, 0)")     }
            else if (kattikon === 3) {
                $("#sor"+mitszinezikon).css("color", "green")  }       
//                $(event.target).css("background-color", "rgb(255, 119, 0)")     }
            else if (kattikon === 4) {
                $("#sor"+mitszinezikon).css("color", "white")  }       
//                $(event.target).css("background-color", "rgb(212, 230, 135)")   }
            else if (kattikon === 5) {
                $("#sor"+mitszinezikon).css("color", "yellow")  }       
//               $(event.target).css("background-color", "#c5dae4")               }
            else if (kattikon === 6) {
                $("#sor"+mitszinezikon).css("color", "pink")  }       
 //               $(event.target).css("background-color", "#fbebfe")              }
            else if (kattikon === 7) {
                $("#sor"+mitszinezikon).css("color", "black")         
//            $(event.target).css("background-color", "rgb(255, 255, 255)")   
    kattikon = 0                                                                    }
}
)



  


// T: Színminta az inputmező alatt.
let szinek = ["rgb(54, 105, 173)", "rgb(255, 204, 0)", "rgb(255, 119, 0)", "rgb(212, 230, 135)", "#c5dae4", "#fbebfe", "rgb(255, 255, 255)"] 


szinek.forEach(function (szin) {
    $(".kontener").append("<div class='szinbox'> </div>")
    $(".kontener div:last-of-type").css("background-color", szin)
//    $(".kontener div:last-of-type").css("display", inline)
}
)



/* Ez a kettő ugyanaz Függvény definiálás      =>   ill.  function  -nal
$("#ujelem").click( () => {
............................
}
)

$("#ujelem").click( function () {
............................
}
)
*/



// T: InputMező üres lesz, ha egy gombra (#ujelem) rákattintunk.
$("#ujelem").click( () => {
    $("#inputMezo").val("")
}
)



// T: Véletlenszerűen megváltoztatja a színét az oldalnak, ha egy gomboot (#veletlenhatter) megnyomok. JQuery-val.
function veletlen(number) {
    return Math.floor(Math.random() * (number+1)  )
}

$("#veletlenhatter").click( function() {
        console.log("háttérgomb")
    const ujvaltozat = 'rgb(' + veletlen(255) + ',' + veletlen(255) + ',' + veletlen(255) + ')'
$("body").css("background-color", ujvaltozat)
}
)


/*
Mit csináltam tartalmilag?
Először definiálok egy véletlen nevű fg-t, ahol number a bemenet. Ez a fg. kiad egy 0-266 közötti számot
Math.floor a szám egész része, Math(random) 0=<ilyen számot vletlenszerűen generál=<1, szorozza a numberral (majd 255 lesz a beadott number a fg meghívásakor)
így a végén 0 és 255 közötti vagy azzal egyenlő véletlen szám lesz a return visszaadása a fg-nek.
#veletlenhatter id-jű gombra kattintva meghívódik az előbb definiált fg, majd a body háttérszín eszerint változik.
!!!!!!!!!!!!!!!!!!!ujváltozat ne legyen idézőjelben !!!!!!!!!!!!!!!!!!!!!!!//
*/
