document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector("#loginButton");
  const signupButton = document.querySelector("#signupButton");

  loginButton.addEventListener("click", function () {
    alert("로그인 성공");
  });

  signupButton.addEventListener("click", function () {
    alert("회원가입 성공");
  });
});
