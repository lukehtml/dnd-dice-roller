const button = document.getElementById("roll_button")
function e() {
    let result = Math.floor((Math.random() * prompt("sides?")) + 1)
    alert(result)
}

function e2() {
    let times = 0
    let times2 = prompt("times?")
    while (times < times2) {

        times += 1
        e()

    }



}

button.onclick = e2
