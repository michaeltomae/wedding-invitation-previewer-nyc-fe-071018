/* event? keydown? on every time
transition between backgrounds 
- transitoin when clicking
- actually change the backgrounds 
First Initials in the Display slice()?
change the font type*/


const lastNameVariable = document.getElementById('lastNameInput')
const dateVariable = document.getElementById('dateInput')
const weddingLocationVariable = document.getElementById('weddingLocationInput')

const lastName = document.getElementById('lastNameOutput')
const date = document.getElementById('dateOutput')
const weddingLocation = document.getElementById('weddingLocationOutput')


document.addEventListener('keyup', (event) => {
  const value = lastNameVariable.value
  lastName.innerHTML = value
  console.log(value)
})




