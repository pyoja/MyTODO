document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.querySelector("#btnLogin");
  const btnSignup = document.querySelector("#btnSignup");

  btnLogin.addEventListener("click", function () {
    alert("로그인 성공");
  });

  btnSignup.addEventListener("click", function () {
    window.location.href = "/signup";
  });
});
