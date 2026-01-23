const custom = document.getElementById("roll_button")
const D4 = document.getElementById("D4")
function d4() {
     let resultd4 = Math.floor((Math.random() * 4) + 1)
     alert(resultd4)

}




function custom_roll() {
    let result = Math.floor((Math.random() * prompt("sides?")) + 1)
    alert(result)
}

function custom_times() {
    let times = 0
    let times2 = prompt("times?")
    while (times < times2) {

        times += 1
        custom_roll()

    }



}

custom.onclick = custom_times
D4.onclick = d4
