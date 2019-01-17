// let form = document.querySelector('#form');
// let taskList = document.querySelector('.collection-items');
// let clearBtn = document.querySelector('#btn-1');
// let taskInput = document.querySelector('#task');


// loadEventListener();

// function loadEventListener() {
//   form.addEventListener('submit', addTask);
//   // taskList.addEventListener('click', removeTask);
//   clearBtn.addEventListener('click', clearTasks);
// }

// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Add a task');
//   } else {

//     let ul = document.querySelector('.collection-items');
//     let li = document.createElement('li');
//     li.className = 'collection-item';
//     ul.append(li);
//     li.appendChild(document.createTextNode(taskInput.value));
//     taskInput.value = '';
//     // console.log(li);
//     li.style.display = "flex";
//     li.style.justifyContent = "space-between";
//     let icon = document.createElement('h2');
//     icon.textContent = "X"
//     icon.className = 'close cross';
//     // icon.id ="close";
//     li.appendChild(icon);

//     e.preventDefault();
//   }
// }
// document.body.addEventListener('click', remove)
// function remove(e) {
//   if (e.target.parentElement.querySelector(".close")) {
//     console.log(e.target);
//     e.target.parentElement.remove();
//   }
// }

// function clearTasks(e) {

//   while (taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }
// }

function Todo(item){
  this.item = item;

}
let taskInput = document.querySelector('#task')

 Todo.prototype.AddItem = document.querySelector('.btn').addEventListener('click', function(addTask){

   if (taskInput.value === '') {
    alert('Add a task');
  } else {

    let ul = document.querySelector('.collection-items');
    let li = document.createElement('li');
    li.className = 'collection-item';
    ul.append(li);
    li.appendChild(document.createTextNode(taskInput.value));
    taskInput.value = '';
    // console.log(li);
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    let icon = document.createElement('h2');
    icon.textContent = "X"
    icon.className = 'close cross';
    // icon.id ="close";
    li.appendChild(icon);

    addTask.preventDefault();

  }
 });



const data = document.querySelector('.btn');
document.body.addEventListener("submit", function(addTask){
 
  const item = new Todo('item one');
})