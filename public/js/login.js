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
        window.location.href = "/"; // 로그인 성공 시 홈페이지로 리다이렉트
      } else {
        alert(result.message); // 서버에서 전달한 에러 메시지 출력
      }
    },
    error: function (xhr) {
      if (xhr.status === 401) {
        alert(xhr.responseJSON.message); // 401 에러 메시지 처리
      } else {
        alert("Ajax Error: " + xhr.statusText); // 기타 AJAX 에러 처리
      }
    },
  });
}
