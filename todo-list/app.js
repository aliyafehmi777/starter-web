let form = document.querySelector('#form');
let taskList = document.querySelector('.collection-items');
let clearBtn = document.querySelector('#btn-1');
let taskInput = document.querySelector('#task');


loadEventListener();

function loadEventListener(){
  form.addEventListener('submit', addTask);
  // taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
}

function addTask(e){
  if(taskInput.value ===''){
    alert('Add a task');
  }else{

    let ul = document.querySelector('.collection-items');
    let li = document.createElement('li');
    li.className ='collection-item';
    ul.append(li);
    li.appendChild(document.createTextNode(taskInput.value));
    taskInput.value ='';
    // console.log(li);
li.style.display="flex";
li.style.justifyContent="space-between";
    let icon = document.createElement('h2');
    icon.textContent="X"
    icon.className = 'close cross';
    // icon.id ="close";
    li.appendChild(icon);
    
    e.preventDefault();
  }
}
        document.body.addEventListener('click', remove)
        function remove(e){
          if (e.target.parentElement.querySelector(".close")){
            console.log(e.target);
            e.target.parentElement.remove();
          }
        }

function clearTasks(e){
  
  while (taskList.firstChild) {
     taskList.removeChild(taskList.firstChild);
  }
}



// // Bubbling and Capturing
// document.querySelector('.one').addEventListener("click",function(){
//   console.log('one');
// })
// document.querySelector('.two').addEventListener("click",function(){
//   console.log('two');
// })
// document.querySelector('.three').addEventListener("click",function(){
//   console.log('three');
// })


// document.querySelector('.one').addEventListener("click",function(){
//   console.log('one');
// },true)
// document.querySelector('.two').addEventListener("click",function(){
//   console.log('two');
// }, true)
// document.querySelector('.three').addEventListener("click",function(){
//   console.log('three');
// }, true)

