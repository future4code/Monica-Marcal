
const taskList = document.getElementById('semana')

function addTask(){
  const task = document.getElementById('task')
  const taskValue = task.value
  if(taskValue) {
    taskList.innerHTML += `<div class=\"semana"><div id=\"domindo\"><div id=\"segunda\"><div id=\"terca\"><div id=\"quarta\"><div id=\"quinta\"><div id=\"sexta\"><div id=\"sabado\">${taskValue}</div>`
  } else {
    alert('escolha um dia da semana!') 
  }
  task.value = ''
}