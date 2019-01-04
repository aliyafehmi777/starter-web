let main = document.body;

console.log(main);


// document.getElementById
let a = document.getElementById("container-wrapper");

// Change style
a.style.color = "green";
a.style.background = "#d0c0c0";
a.style.textAlign = 'center';
a.style.fontSize = "3.5rem";
a.style.fontWeight = "bold";
a.style.padding = "2rem";

// Change content
a.textContent = 'Heading Hello'
a.innerText = "This is Heading One";

let b = document.getElementById("para1");
b.style.color = "#000";
b.style.background = "#d3d3e0";
b.style.textAlign = 'center';
b.style.fontSize = "2rem";
b.style.fontWeight = "bold";
b.style.padding = "1.5rem";

// // document.getElementsByClassName
let items = document.getElementsByClassName('item-list');
console.log(items);

// document.querySelector Example
// let n = document.querySelectorAll("#container2");
// console.log(n);
// let input = document.querySelector("#form");
// input.style.background = '#d3d3e0';
// input.style.padding = '2rem';
// input.style.height = '3rem';


// let x = document.querySelector(".container2");
// x.style.color = "blue";
// x.style.fontSize = "1.5rem";
// // x.style.textAlign = "center";
// x.style.padding = "1rem";
// x.style.decoration ="none";
// // x.style ="none";

// let m = document.querySelector('li')
// m.style.color = 'red'
// m.style.background = 'gray'

// let y = document.querySelector('li:last-child');
// y.style.color ="red";
// y.style.background = "gray";

// let z = document.querySelector('li:nth-child(2)');
// z.style.color ="black";
// z.style.fontWeight ="bold";

// // Element.hasAttribute(name)
let x = document.querySelector('input');
let q = x.hasAttribute("type");
console.log(q);


// // Element.getAttribute(name)
let c = document.querySelector('input');
let d = c.getAttribute("type");
console.log(d);

// // Element.setAttribute(name)
let g = document.querySelector('input');
let h = g.setAttribute("id",1234);
console.log(g);

// // Element.setAttribute(name)
let ab = document.querySelector('input');
let u = ab.setAttribute("save","Save");
console.log(ab);

// // Element.removeAttribute(name)
let l = document.querySelector('input');
let i = l.removeAttribute("save");
console.log(l);







