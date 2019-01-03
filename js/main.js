let main = document.body;

console.log(main);


// document.getElementById
let a = document.getElementById("container-wrapper");

// Change style
a.style.color = "green";
a.style.background = "#d0c0c0";
a.style.textAlign = 'center';
a.style.fontSize = "3rem";
a.style.fontWeight = "bold";
a.style.padding = "1.5rem";

// Change content
a.textContent = 'Heading Hello'
a.innerText = "This is Heading One";

let b = document.getElementById("para1");
b.style.color = "black";
b.style.background = "#d3d3e0";
b.style.textAlign = 'center';
b.style.fontSize = "1.8rem";
b.style.fontWeight = "bold";
b.style.padding = "1.5rem";



// document.querySelector Example
// let n = document.querySelectorAll("#container2");
// console.log(n);
let input = document.querySelector("#form");
input.style.background = '#d3d3e0';
input.style.padding = '2rem';
input.style.height= '3rem';
input.textAlign = "center";



let x = document.querySelector(".container2");
x.style.color = "blue";
x.style.fontSize = "1.5rem";
// x.style.textAlign = "center";
x.style.padding = "1rem";
// x.style ="none";
// console.log(x);
let m = document.querySelector('li')
m.style.color = 'red'
m.style.background = 'gray'

let y = document.querySelector('li:last-child');
y.style.color ="red";
y.style.background = "gray";


let z = document.querySelector('li:nth-child(2)');
z.style.color ="black";







