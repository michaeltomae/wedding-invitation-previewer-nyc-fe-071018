/* event? keydown? on every time
transition between backgrounds 
- transitoin when clicking
- actually change the backgrounds 
First Initials in the Display slice()?
change the font type*/
  const lastNameVariable = document.getElementById('last')
  const h2 = document.getElementById('lastName')


document.addEventListener('keyup', (event) => {
  const value = lastNameVariable.value
  h2.innerHTML = value
  console.log(value)
})




