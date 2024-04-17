function submitSignup() {
  const txtEmail = document.getElementById("txtEmail").value;
  const txtPassword = document.getElementById("txtPassword").value;
  const txtConfirmPassword =
    document.getElementById("txtConfirmPassword").value;
  const txtName = document.getElementById("txtName").value;

  if (!txtEmail.includes("@")) {
    alert("올바른 이메일 형식이 아닙니다.");
    return;
  }

  if (txtPassword !== txtConfirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  $.ajax({
    url: "/signup",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: {
      email: txtEmail,
      password: txtPassword,
      name: txtName,
    },
    cache: false,
    success: function (result) {
      if (result.success) {
        alert("회원가입 성공!");
        window.history.back();
      } else {
        alert(result.message);
      }
    },
    error: function (a, b, c) {
      alert("Ajax Error");
    },
  });
}
