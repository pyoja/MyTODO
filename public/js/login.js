function SubmitLogin() {
  const txtEmail = document.getElementById("txtEmail").value;
  const txtPassword = document.getElementById("txtPassword").value;

  if (!txtEmail.includes("@")) {
    alert("유효한 이메일 주소를 입력해주세요.");
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
        window.location.href = "/index"; // 성공 시 홈 페이지로 리다이렉트
      } else {
        alert(result.message);
      }
    },
    error: function (xhr, status, error) {
      alert("Ajax Error: " + error);
    },
  });
}
