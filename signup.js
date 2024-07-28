// login Form
const pass = document.getElementById("pass");
const user = document.getElementById("user");
const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (user.value === "admin" && pass.value === "himad") {
    alert("Login Successful");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
    pass.value = "";
    user.value = "";
    user.focus();
  }
});
