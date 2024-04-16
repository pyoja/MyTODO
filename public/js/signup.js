document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPassword").value;
    const confirmPassword = document.getElementById("txtConfirmPassword").value;
    const name = document.getElementById("txtName").value;

    if (!email.includes("@")) {
      alert("이메일에 '@'가 필요합니다.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("회원가입 성공!");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
