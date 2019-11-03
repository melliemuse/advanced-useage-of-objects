// Lightning Exercises

// Lightning Exercise 2: Copy the code below and paste it above your object.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorsBill = {
    officeName: 'Private Practice Inc',
    streetAddress: '1000 Spence Lane',
    doctorName: 'The Doctor',
    patientName: 'Melody',
    visitDate: '1/3/2019',
    amountBilled: '$20',
    dueDate: '2/3/2019'
}

// Use square bracket notation to output the value of those three properties to the console in Chrome.

doctorsBill.dateVisited = dateVisited
console.log(doctorsBill['dateVisited'])

doctorsBill.owed = owed
console.log(doctorsBill['owed'])

doctorsBill.patient = patient
console.log(doctorsBill['patient'])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome


    for (const value of Object.values(doctorsBill)) {
        console.log(value)
    }

