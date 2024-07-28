const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const comfirmPassword = document.getElementById("connfirmPassword");
const formControl = document.getElementsByClassName("form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  const data = [];
  student = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: comfirmPassword.value,
  };
  addToLocalStorage(data);
  clear();
  readFromLocalStorage();
});

// Adding to local storage
function addToLocalStorage(data) {
  if (
    username.value == "" ||
    password.value == "" ||
    email.value == "" ||
    comfirmPassword.value == ""
  ) {
    return false;
  } else {
    if (localStorage.getItem("users") != null) {
      const stored = JSON.parse(localStorage.getItem("users"));
      stored.push(student);
      localStorage.setItem("users", JSON.stringify(stored));
    } else {
      data.push(student);

      localStorage.setItem("users", JSON.stringify(data));
    }
  }
}

function clear() {
  username.value = "";
  email.value = "";
  password.value = "";
  comfirmPassword.value = "";
}

// checking Inputs
function checkInputs() {
  if (password.value !== comfirmPassword.value) {
    alert("Passwords do not match!");
    clear();
    username.focus();
    return false;
  } else if (
    username.value == "" ||
    email.value == "" ||
    password.value == "" ||
    comfirmPassword.value == ""
  ) {
    alert("Please fill in all fields!");
    clear();
    username.focus();
    return false;
  } else {
    window.location.href = "index.html";
  }
}

// showPassword funciton
const showPassword = document.getElementById("showPassword");
showPassword.addEventListener("change", () => {
  if (showPassword.checked) {
    password.type = "text";
    comfirmPassword.type = "text";
  } else {
    password.type = "password";
    comfirmPassword.type = "password";
  }
});

//reading Data from local storage
function readFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("users"));
  // console.log(data);
  data.forEach((user, index) => {
    if (user.username === "") {
      data.splice(index, 1); // Remove the user from the array
      return;
    }
  });

  // Update the local storage with the modified data
  localStorage.setItem("users", JSON.stringify(data));
}
