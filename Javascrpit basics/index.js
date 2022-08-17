/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>User interface</h1>
    </header>

    <section class="container">
      <form id="my-form">
        <h1>Add User</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email">
        </div>
        <input class="btn" type="submit" value="Submit">
      </form>

      <ul id="users"></ul>

      <!-- <ul class="items">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
      </ul>
    </section> -->
    

    <script src="index.js"></script>
  </body>
</html>*/

/*var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 
 /* console.log('api ');
  let myBtn = document.getElementById("my Btn");

  let content = document.getElementById("content");

  function getData(){
  console.log("started getData")
  url =  "https://jsonplaceholder.typicode.com/todos";
  fetch(url).then((Response))=>{
    console.log("inside")
    return Response.text();
} than((data)) ;
  console.log('outside')
  console.log(data);
}

 
 console.log("before runnig getdata")
 getData()
 console.log("after running getdata")
    

 const testapi = fetch("https://jsonplaceholder.typicode.com/todos");


for ( var i = 0; i < testapi.length ; i++) {
testapi
.then(data => data.json())
.then(data => document.getElementById('test').innerHTML = "<h1>" + data.results[0].gender + "</h1>" + "<p>" + data.results[0].name.first + "</p>" + document.getElementById("myImg").setAttribute('src',data.results[0].picture.medium))

.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}*/

/*let tasks = [1,2,3,4,5]
    
function perform2(x){
    let d = $.Deferred();
    
    $.post("https://jsonplaceholder.typicode.com/todos", JSON.stringify({min: x, max: x}), function(res){
        d.resolve(res.random);
    })
    
    return d;
}*/


alert("HELLO")



fetch("https://jsonplaceholder.typicode.com/todos/").then((data)=>{
  // console.log("data: ",data);  //json format

   return data.json();  //convert to object
}).then((objectData)=>{
    console.log(objectData);
    console.log(objectData[0]);

   let tableData="";
   objectData.map((value)=>{
    tableData+=`<tr>
    <td>${value.userId}</td>
    <td>${value.Id}</td>
    <td>${value.title}</td>
    <td>${value.completed}</td>
</tr>`;
   });
   document.getElementById("table_body").innerHTML=tableData;
  })
   
  /* userId.map((values)=>{
      tableData+=`<tr>
     <td>${userId}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td>${completed}</td>
    </tr>`;
    });
  
   document.getElementById("table_body").
   innerHTML=tableData;
}).catch((err)=>{
   console.log(err);
})*/



/*fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .then((userId) => console.log(userId))*/


  /*fetch("https://jsonplaceholder.typicode.com/todos/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({a: 1, b: 2})
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })*/


/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))*/
