// var email = document.forms["form"]["email"];
// var password = document.forms["form"]["password"];
// var BusinessName = document.forms["form"]["BusinessName"];

// var email_error = document.getElementById("email_error");
// var pass_error = document.getElementById("password_error");
// var show_error = document.getElementById("show_error");

// email.addEventListener("textInput", email_verify);
// password.addEventListener("textInput", passwoed_verify);
// BusinessName.addEventListener("textInput", BusinessName_verify);

// function validated() {
//   if (email.value.length < 9) {
//     email.style.border = "1px solid red";
//     email_error.style.display = "block";
//     email.focus();
//     return false;
//   }

//   if (password.value.length < 9) {
//     password.style.border = "1px solid red";
//     password_error.style.display = "block";
//     password.focus();
//     return false;
//   }
// }
// function email_verify() {
//   if (email.value.length >= 8) {
//     email.style.border = "1px solid silver";
//     email_error.style.display = "none";
//     return false;
//   }
// }
// function password_verify() {
//   if (password.value.length >= 5) {
//     password.style.border = "1px solid silver";
//     password_error.style.display = "none";
//     return false;
//   }
// }
// if (BusinessName.value.length < 9) {
//   BusinessName.style.border = "1px solid red";
//   show_error.style.display = "none";
//   BusinessName.focus();
//   return false;
// }

// function BusinessName_verify() {
//   if (BusinessName.value.length >= 8) {
//     BusinessName.style.border = "1px solid silver";
//     BusinessName_error.style.display = "none";
//     return false;
//   }
// }

var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];
var BusinessName = document.forms["form"]["BusinessName"];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("password_error");
var show_error = document.getElementById("show_error");

// email.addEventListener("textInput", email_verify);
// password.addEventListener("textInput", password_verify);

function validated() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
  }

  if (BusinessName.value.length < 9) {
    BusinessName.style.border = "1px solid red";
    show_error.style.display = "block";
  }
  if (password.value.length < 9) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
  }
  return false;
}
// function email_verify() {
//   if (email.value.length >= 8) {
//     email.style.border = "1px solid silver";
//     email_error.style.display = "none";
//     return false;
//   }
// }
// function password_verify() {
//   if (password.value.length >= 5) {
//     password.style.border = "1px solid silver";
//     pass_error.style.display = "none";
//     return false;
//   }
// }
