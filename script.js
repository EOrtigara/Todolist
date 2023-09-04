const list = document.querySelectorAll('li');
const inputAdicionarTarefa = document.querySelector("input.adicionar-tarefa");

function onCheckboxChange (listItem) {
  listItem.classList.toggle("tarefa-finalizada")
}

function onTaskCreate (event) {
  if (event.key === "Enter") {
    const taskText = event.target.value.trim()
    if (taskText ===""){
      return
    }
    event.target.value = ""
    const input = document.createElement("input")
    const label = document.createElement('label')
    input.setAttribute("type", "checkbox")
    const listItem = document.createElement("li")
    const listContainer = document.querySelector("ul#lista")
    listContainer.append(listItem)
    listItem.append(input, label)
    label.textContent = taskText
    input.addEventListener('change', function(){
      if(this.checked){
        label.classList.add('selecionado');
      } else{
        label.classList.remove('selecionado');
      }
    })
  }
}

list.forEach(listItem => {
  listItem.firstChild.nextSibling.addEventListener("click", () => {
    onCheckboxChange(listItem)
  })
});

inputAdicionarTarefa.addEventListener("keydown", onTaskCreate)