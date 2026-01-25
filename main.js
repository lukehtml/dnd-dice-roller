const custom = document.getElementById("roll_button") // custom
const D4 = document.getElementById("D4") // d4
const D6 = document.getElementById("D6") // d6
const D8 = document.getElementById("D8") // d8
const D10 = document.getElementById("D10") // d10
const Dpercent = document.getElementById("Dpercent") // d%
const D20 = document.getElementById("D20") // d20
const result = document.getElementById("text") // output div/span

function d4() {
    let resultd4 = Math.floor(Math.random() * 4) + 1
    result.innerText = `result: ${resultd4}`
}

function d6() {
    let resultd6 = Math.floor(Math.random() * 6) + 1
    result.innerText = `result: ${resultd6}`
}

function d8() {
    let resultd8 = Math.floor(Math.random() * 8) + 1
    result.innerText = `result: ${resultd8}`
}

function d10() {
    let resultd10 = Math.floor(Math.random() * 10) + 1
    result.innerText = `result: ${resultd10}`
}

function dper() {
    let resultdper = Math.floor(Math.random() * 100) + 1
    result.innerText = `result: ${resultdper}`
}

function d20() {
    let resultd20 = Math.floor(Math.random() * 20) + 1
    result.innerText = `result: ${resultd20}`
}

function custom_roll(sides) {
    return Math.floor(Math.random() * sides) + 1
}

function custom_times() {
    let sides = Number(prompt("sides?"))
    let times = Number(prompt("times?"))
    if (isNaN(sides) || sides < 1 || isNaN(times) || times < 1) {
        result.innerText = "Invalid input!"
        return
    }

    let rolls = []
    for (let i = 0; i < times; i++) {
        rolls.push(custom_roll(sides))
    }

    result.innerText = `result: ${rolls.join(", ")}`
}

// hook buttons
custom.onclick = custom_times
D4.onclick = d4
D6.onclick = d6
D8.onclick = d8
D10.onclick = d10
Dpercent.onclick = dper
D20.onclick = d20
