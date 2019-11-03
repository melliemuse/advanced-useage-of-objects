
const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector('#app')
allCars.forEach(car => {
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})

// Lightning Exercises
// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"
// Use square bracket notation to output the value of those three properties to the console in Chrome.

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.