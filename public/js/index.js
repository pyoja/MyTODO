document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.querySelector("#btnLogin");
  const btnSignup = document.querySelector("#btnSignup");

  btnLogin.addEventListener("click", function () {
    window.location.href = "/login";
  });

  btnSignup.addEventListener("click", function () {
    window.location.href = "/signup";
  });
});
