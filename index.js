/*
1 meter = 3.281 feet --> mult/div 3.281
1 liter = 0.264 gallon --> div/mult 3.789
1 kilogram = 2.204 pound --> mult/div 2.204
*/

const inputEl = document.getElementById("input-el")
let conversionsContainer = document.getElementById("conversions-container")

let conversions = [
    {
        title: "Length (Meter/Feet)",
        orderOperands: [3.28084, 0.3048],
        units: ["meters", "feet"],
    },
    {
        title: "Volume (Liters/Gallons)",
        orderOperands: [0.264172, 3.78541],
        units: ["liters", "gallons"],
    },
    {
        title: "Weight (Kilograms/Pounds)",
        orderOperands: [2.20462, 0.453592],
        units: ["kilograms", "pounds"],
    }
]

// const operators = {
//     '*': function(a, b){return a * b},
//     '/': function(a, b){return a / b}
// }

function convertUnits() {
    conversionsContainer.innerHTML = ""
    const inputVal = inputEl.value
    
    for (let i = 0; i < conversions.length; i++) {
        currConversion = conversions[i]
        
        // console.log(operators[firstOperator](20, currOperand))
        currOperandOne = currConversion.orderOperands[0]
        firstConversion = (inputVal * currOperandOne.toFixed(3)).toFixed(3)
        
        currOperandTwo = currConversion.orderOperands[1]
        secondConversion = (inputVal * currOperandTwo).toFixed(3)
        
        firstUnit = currConversion.units[0]
        secondUnit = currConversion.units[1]
        
        conversionsContainer.innerHTML += `
        <div class="conversion-card">
            <h3>${currConversion.title}</h3>
            <p>
                ${inputVal} ${firstUnit} = ${firstConversion} ${secondUnit}
                | ${inputVal} ${secondUnit} = ${secondConversion} ${firstUnit}
            </p>
        </div
        `
    }
}