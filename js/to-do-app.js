let form = document.querySelector('#form');
let taskList = document.querySelector('.collection-items');
let clearBtn = document.querySelector('#btn-1');
let taskInput = document.querySelector('#task');

loadEventListener();

function loadEventListener(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
}

function addTask(e){
  if(taskInput.value ===''){
    alert('Add a task');
  }else{

    let ul = document.querySelector('.collection-items');
    let li = document.createElement('li');
    li.className ='collection-items';
    ul.append(li);
    li.appendChild(document.createTextNode(taskInput.value));
    taskInput.value ='';
    // console.log(li);
    
    e.preventDefault();
  }
}
function removeTask(e){
  if(e.target.parentElement.classList.contains('btn-1')){
    if(confirm('Are you sure?'))
    e.target.parentElement.parentElement.remove();
  }
}
function clearTasks(e){
  
  while (taskList.firstChild) {
     taskList.removeChild(taskList.firstChild);
  }
}