//   // document.getElementById("myForm").submit();
//   let btnSubmit = document.getElementById('btnSubmit');
//   btnSubmit.addEventListener('click', () =>{
//     console.log("ggjgj");
// //      preventDefault()
// //      result.innerText=inputsubmit.value;
//  });



   function submitButton(){

    const x= document.getElementById("frm1")
    console.log(x.elements)
    const onlyInputs = document.querySelectorAll('#frm1 input');

    onlyInputs.forEach(input =>{
    console.log(input.value);
    });


     var hidepass = document.getElementById("form_values");
      console.log(hidepass.style.display)
      for (let i = 0; i < hidepass.length ;i++) {
      if(hidepass.style.display == "block"){
        hidepass.style = "display:none"
      }
      else{
      hidepass.style = "display:block"
    }
        return false
    }
}


  // const x = document.forms["form_values"];
  // let text = "";
  //  for (let i = 0; i < x.length ;i++) {
  // text += x.elements[i].value + "<br>";
  //  }
  // document.getElementById("demo").innerHTML = text;



 /* <p onclick="this.form.submit()">I want this to be clicked to submit the form</p>
 // $('p').click(function(){$('form).submit()});*/
 
  // }
// let btn = document.querySelector('#btnsubmit');

// btnsubmit.addEventListener('click',function() {
//    console.log('It was clicked!');
// });


// const body = document.body
// const div = document.createElement("div")

// div.textContent = "hello"
// body.append(div)





// function onclick() {
 
//   return false
// }




const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;