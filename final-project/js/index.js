/* event? keydown? on every time
transition between backgrounds 
- transitoin when clicking
- actually change the backgrounds 
First Initials in the Display slice()?
change the font type*/


const firstNameVariable1 = document.getElementById('firstNameInput1')
const firstNameVariable2 = document.getElementById('firstNameInput2')
const lastNameVariable = document.getElementById('lastNameInput')
const dateVariable = document.getElementById('dateInput')
const weddingLocationVariable = document.getElementById('weddingLocationInput')

const firstName = document.getElementById('firstNameOutput')
const lastName = document.getElementById('lastNameOutput')
const date = document.getElementById('dateOutput')
const weddingLocation = document.getElementById('weddingLocationOutput')

document.addEventListener('keyup', (event) => {
  firstName.innerHTML = firstNameVariable1.value + firstNameVariable2.value
  lastName.innerHTML = lastNameVariable.value
  date.innerHTML = dateVariable.value
  weddingLocation.innerHTML = weddingLocationVariable.value
})




