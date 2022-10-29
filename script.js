const form = document.querySelector("form")
const ul = document.querySelector('#items-list')

form.onsubmit = function(event){
  event.preventDefault()

  const listItem = form.querySelector('input')
  const listValue = listItem.value

  if(listValue == "") return

  // .createElement()
  // const li = document.createElement('li')
  // li.textContent = listValue
  // const button = document.createElement('button')
  // button.setAttribute('class', 'close')
  // button.textContent = "x"
  // li.appendChild(button)
  // ul.appendChild(li)

  // Template Literals
  ul.innerHTML += `<li><span>${listValue}</span><button class="close">x</button></li>`

  // Clone Node
  // Receber o elemento de referência no início do código
  // No nosso caso, é o li declarado no começo.
  // const li = ul.querySelector('li').cloneNode()
  // Após isso aplicamos um append para trazer o elemento

  // const li = ul.querySelector('li').cloneNode(true)
  // li.querySelector('span').textContent = listValue
  // ul.appendChild(li)

  listItem.value = ""

}
ul.onclick = function(event){
  if (event.target.classList.contains('close')){
    if(confirm("Deseja deletar esse item?")){
      event.target.parentElement.remove()
    }
  }
}
// Para mais de um evento
// form.addEventListener('submit', function (event){})


