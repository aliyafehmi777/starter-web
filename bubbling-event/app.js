document.querySelector('.box1').addEventListener('click',function(e) {
  console.log('box one');
});
document.querySelector('.box2').addEventListener('click',function(e) {
  
  console.log('box two')
  // e.stopPropagation();

});
document.querySelector('.box3').addEventListener('click',function(e) {
  console.log('box three')
  e.stopPropagation();
  // e.stopImmediatePropagation();
});
// document.querySelector('.box3').addEventListener('mouseover',function(e) {
//   // e.target;
//   console.log('box three')
//   e.stopPropagation();
//   // e.stopImmediatePropagation();
// });