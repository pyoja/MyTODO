function SubmitLogin() {
  const txtEmail = document.getElementById("txtEmail").value;
  const txtPassword = document.getElementById("txtPassword").value;

  if (!txtEmail) {
    alert("이메일 주소를 입력해주세요.");
    return;
  }
  if (!txtEmail.includes("@")) {
    alert("유효한 이메일 주소를 입력해주세요.");
    return;
  }

  if (!txtPassword) {
    alert("비밀번호를 입력해주세요.");
    return;
  }

  $.ajax({
    url: "/login",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({
      email: txtEmail,
      password: txtPassword,
    }),
    success: function (result) {
      if (result.success) {
        alert("로그인 성공!");
        window.location.href = "/home";
      } else {
        alert(result.message);
      }
    },
    error: function (xhr) {
      if (xhr.status === 401) {
        alert(xhr.responseJSON.message);
      } else {
        alert("Ajax Error: " + xhr.statusText);
      }
    },
  });
}
