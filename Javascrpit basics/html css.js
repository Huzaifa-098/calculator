/*console.log(window);

alert(1) ;

//single element
console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));*/

//multiple Element
/*console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));*/


/*const ul = document.querySelector('.item');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>hello</h1>'; */

/*const btn = document.querySelector('.btn');
//btn.style.background = 'red'; 
btn.addEventListener('click', (e) => {           //mouseover mouseout 
  //console.log('click'); 
  e.preventDefault();
 // console.log(e);
 //console.log(e.target.className);
 //console.log(e.target.id);
document.querySelector('#my-form').style.background =
 '#ccc';
document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items')
.lastElementChild.innerHTML= '<h1>Hello</h1>';
}); */

/*const myForm = document.querySelector('#my-form');
const nameinput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

  //console.log(nameinput.value);
  if(nameinput.value === '' || emailInput.value === '') {
   // alert("please enter fields") ;
   msg.classList.add('error');
   msg.innerHTML = 'please enter all fields';

   setTimeout(() => msg.remove(), 3000)

  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`$
    {nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    // Clear field
    nameinput.value = '';
    emailInput.value = '';
   //console.log('sucess');

  }
}*/


