// var BusinessName1 = document.forms["form"]["BusinessName1"];

// var show_error = document.getElementById("show_error");

// var WellLocation1 = document.forms["form"]["WellLocation1"];

// var WellLocation = document.getElementById("WellLocation");

// var Blankbox1 = document.forms["form"]["Blankbox1"];
// var Blankbox = document.getElementById("Blankbox");

const form = document.querySelector("form");
const CaseNo = document.getElementById("CaseNo");
const LeaseNo = document.getElementById("LeaseNo");
const CaseDate = document.getElementById("CaseDate");
const CaseNoError = document.getElementById("caseError");
const LeaseNoError = document.getElementById("leaseError");
const CaseDateError = document.getElementById("CaseDateError");

CaseNo.addEventListener("input", (event) => {
  console.log("caseNO", CaseNo.validity.valid);
  if (CaseNo.validity.valid) {
    CaseNoError.textContent = "";
    CaseNoError.className = "error";
  } else {
    showError();
  }
});

LeaseNo.addEventListener("input", (event) => {
  console.log("LeaseNo", LeaseNo.validity.valid);
  if (LeaseNo.validity.valid) {
    LeaseNoError.textContent = "";
    LeaseNoError.className = "error";
  } else {
    showError();
  }
});

CaseDate.addEventListener("input", (event) => {
  console.log("caseDate", CaseDate.validity.valid);
  if (CaseDate.validity.valid) {
    CaseDateError.textContent = "";
    CaseDateError.className = "error";
  } else {
    showError();
  }
});

// LeaseNo.addEventListener("input", (event) => {
//   console.log("LeaseNo", LeaseNo.validity.valid);
//   if (LeaseNo.validity.valid) {
//     LeaseNoError.textContent = "";
//     LeaseNoError.className = "error";
//   } else {
//     showError();
//   }
// });

function showError() {
  if (CaseNo.validity.valueMissing) {
    CaseNoError.textContent = "You need to enter an e-mail address.";
  } else if (CaseNo.validity.typeMismatch) {
    CaseNoError.textContent = "Entered value needs to be an e-mail address.";
  } else if (CaseNo.validity.tooShort) {
    CaseNoError.textContent = `Email should be at least ${CaseNo.minLength} characters; you entered ${CaseNo.value.length}.`;
  }

  if (LeaseNo.validity.valueMissing) {
    LeaseNoError.textContent = "You need to enter an e-mail address.";
  } else if (LeaseNo.validity.typeMismatch) {
    LeaseNo.textContent = "Entered value needs to be an e-mail address.";
  } else if (LeaseNo.validity.tooShort) {
    LeaseNoError.textContent = `Email should be at least ${LeaseNo.minLength} characters; you entered ${LeaseNo.value.length}.`;
  }
  if (CaseDate.validity.valueMissing) {
    CaseDateError.textContent = "You need to enter an e-mail address.";
  } else if (CaseDate.validity.typeMismatch) {
    CaseDate.textContent = "Entered value needs to be an e-mail address.";
  } else if (CaseDate.validity.tooShort) {
    CaseDateError.textContent = `Email should be at least ${CaseDate.minLength} characters; you entered ${CaseDate.value.length}.`;
  }
  CaseNoError.className = "error active";
  LeaseNoError.className = "error active";
  CaseDateError.className = "erroe active";
}

// function showError() {
//   if (LeaseNo.validity.valueMissing) {
//     LeaseNoError.textContent = "You need to enter an e-mail address.";
//   } else if (LeaseNo.validity.typeMismatch) {
//     LeaseNo.textContent = "Entered value needs to be an e-mail address.";
//   } else if (LeaseNo.validity.tooShort) {
//     LeaseNoError.textContent = `Email should be at least ${LeaseNo.minLength} characters; you entered ${LeaseNo.value.length}.`;
//   }

//   LeaseNoError.className = "error active";
// }

form.addEventListener("submit", (event) => {
  if (!CaseNo.validity.valid) {
    showError();

    event.preventDefault();
  }
});

// form.addEventListener("submit", (event) => {
//   if (!LeaseNo.validity.valid) {
//     showError();

//     event.preventDefault();
//   }
// });
