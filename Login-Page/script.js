window.onload = function () {
  var login = document.querySelector(".login");
  var register = document.querySelector(".register");
  var loginForm = document.querySelector(".login-form");
  var registerForm = document.querySelector(".register-form");
  login.addEventListener("click", function () {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });
  register.addEventListener("click", function () {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  });
};
