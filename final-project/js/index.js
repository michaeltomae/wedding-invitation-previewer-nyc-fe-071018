/* event? keydown? on every time
transition between backgrounds 
- transitoin when clicking
- actually change the backgrounds 
First Initials in the Display slice()?
change the font type*/


const lastNameVariable = document.getElementById('lastNameInput')
const dateVariable = document.getElementById('dateInput')
const weddingLocationVariable = document.getElementById('weddingLocationInput')

const h2 = document.getElementById('lastName')

document.addEventListener('keyup', (event) => {
  const value = lastNameVariable.value
  h2.innerHTML = value
  console.log(value)
})




