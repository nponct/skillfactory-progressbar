const buttons = document.querySelectorAll('button')
const ranger = document.querySelector('p')

function handleClick(fn) {
	// Почитать про for of и почему buttons - объект
	for(const button of buttons){
  	button.addEventListener('click', function(){
    	fn(button.innerText)
    })
  }
}

function addValue(value){
  let innerValue = Number(ranger.innerText)
  innerValue += Number(value)
  console.log(ranger.style = `width: ${innerValue}px`)
  return ranger.innerText = innerValue
}

handleClick(addValue)

