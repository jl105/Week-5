// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
console.log(body.childNodes[1]);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
console.log(p.previousSibling.previousSibling.childNodes[5]);