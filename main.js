const custom = document.getElementById("roll_button") //custom
const D4 = document.getElementById("D4") //d4
const D6 = document.getElementById("D6") //d6
const D8 = document.getElementById("D8") //d8
const D10 = document.getElementById("D10") //d10
const Dpercent = document.getElementById("D%") //d%


function d4() {  //d4 function
     let resultd4 = Math.floor((Math.random() * 4) + 1)
     alert(resultd4)

}


function d6() {  //d6 function
     let resultd6 = Math.floor((Math.random() * 6) + 1)
     alert(resultd6)

}   


function d8() {  //d8 function
     let resultd8 = Math.floor((Math.random() * 8) + 1)
     alert(resultd8)

}

function d10() {  //d10 function
     let resultd10 = Math.floor((Math.random() * 10) + 1)
     alert(resultd10)

}

function dper() { // d% func
    let resultdper = Math.floor((Math.random() * 100) + 1)
     alert(resultdper)
}

function custom_roll() { // custom sides
    let result = Math.floor((Math.random() * prompt("sides?")) + 1)
    alert(result)
}

function custom_times() { // custom times
    let times = 0
    let times2 = prompt("times?")
    while (times < times2) {

        times += 1
        custom_roll()

    }



}
 // makes the buttons do the functions
custom.onclick = custom_times
D4.onclick = d4
D6.onclick =  d6
D8.onclick = d8
D10.onclick = d10
Dpercent.onclick = dper