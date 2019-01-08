// Adding and removing items on button click

document.querySelector('.btn1').addEventListener('click',
function onClick(){
  let a = document.createElement('li');
  a.textContent = "new item";
  items.appendChild(a);
});
document.querySelector('#btn2').addEventListener('click', onClick);
function onClick(){
  document.querySelectorAll('.items');
  items.lastChild.remove()
};


