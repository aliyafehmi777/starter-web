// Creating an element by using createElement

let a = document.createElement("div");
console.log(a);

// Creating an element by using createTextNode

a = document.createTextNode("Hello");

// Creating the message
let div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML = "<strong>Hi!</strong>Aliya";
console.log(div);

// appendChild() and insertBefore() methods
let x = document.createElement('li');
x.innerHTML = "Order List";
list.appendChild(x);
list.insertBefore(x, list.children[0]);


// prepend/append/before/after
list.before('Before');
list.after('After');
let prepend = document.createElement('li');
prepend.innerHTML ="Prepand";
list.prepend(prepend);

// cloneNode Methods
let div2 = div.cloneNode(true);
console.log(div2);



