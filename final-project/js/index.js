/* event? keydown? on every time
transition between backgrounds 
- transitoin when clicking
- actually change the backgrounds 
First Initials in the Display slice()?
change the font type*/


document.addEventListener('keydown', (event) => {
  const lastNameVariable = document.getElementById('last')
  const h2 = document.getElementById('lastName')
  const value = lastNameVariable.value
  h2.innerHTML = value
})




