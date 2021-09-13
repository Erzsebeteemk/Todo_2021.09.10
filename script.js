




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
                                <button class="ikon">  <i class="fas fa-space-shuttle"></i>   </button>
                                <button class="torl" id="torl${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Törlés      </button>
                                <button class="jegy" id="jegy${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   J     </button>
                                <button class="megn" id="megn${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   M  </button>
                                <button class="rend" id="rend${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   S     </button>
                                <button class="szin" id="szin${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Sz        </button>
                             </li> 
            `)
}
)




// T: Dupla katt: piros-fekete betűszín-váltás.
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




// T: 1 katt: kék-sárga... háttérszín váltás
katt = 0

$("ul").on("click","li",(event) => {
                                        // console.log(event)
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
}
)




// T: Törlés gombra kattintva az adott sort mindenestől kitörli.
let mittorol = null

$("ul").on("click", ".torl", (event) => {
                                            console.log(event)
    mittorol = $(event.currentTarget).attr("data-szamozo")
                                            console.log(mittorol)
    $("#sor"+mittorol).remove()         
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

// Mit csináltam tartalmilag?
//Először definiálok egy véletlen nevű fg-t, ahol number a bemenet. Ez a fg. kiad egy 0-266 közötti számot
//Math.floor a szám egész része, Math(random) 0=<ilyen számot vletlenszerűen generál=<1, szorozza a numberral (majd 255 lesz a beadott number a fg meghívásakor)
//így a végén 0 és 255 közötti vagy azzal egyenlő véletlen szám lesz a return visszaadása a fg-nek.
//#veletlenhatter id-jű gombra kattintva meghívódik az előbb definiált fg, majd a body háttérszín eszerint változik.
//   !!!!!!!!!!!!!!!!!!!!!!ujváltozat ne legyen idézőjelben !!!!!!!!!!!!!!!!!!!!!!!!
