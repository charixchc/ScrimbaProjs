let inputVal = 0
let feet = 0
let gallons = 0
let pounds = 0
let meters = 0
let liters = 0
let kilograms = 0
function save() {
    inputVal = document.getElementById("result-el").value
    console.log(inputVal)
}

function convert() {
    inputVal = document.getElementById("result-el").value
    feet = (inputVal * 3.281).toFixed(3)
    gallons = (inputVal / 3.785).toFixed(3)
    pounds = (inputVal * 2.205).toFixed(3)
    meters = (inputVal / 3.281).toFixed(3)
    liters = (inputVal * 3.785).toFixed(3)
    kilograms = (inputVal / 2.205).toFixed(3)
    document.getElementById("length-el").textContent = inputVal + " meters = " + feet + " feet | " + inputVal + " feet = " + meters + " meters"
    document.getElementById("vol-el").textContent = inputVal + " liters = " + gallons + " gallons | " + inputVal + " gallons = " + liters + " liters"
    document.getElementById("mass-el").textContent = inputVal + " kilos = " + pounds + " pounds | " + inputVal + " pounds = " + kilograms + " kilos"
}
