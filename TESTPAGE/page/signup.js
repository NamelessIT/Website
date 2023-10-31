const button = document.querySelector(".login");

button.addEventListener("click", function(event) {
  login();
});

function login() {
  // Ngăn chặn trình duyệt gửi form đi
  event.preventDefault();

  // Lấy thông tin tài khoản và mật khẩu
  const username = document.getElementById("USERNAME");
  const password = document.getElementById("PASSWORD");

  // Kiểm tra xem thông tin tài khoản và mật khẩu có hợp lệ hay không
  if (username.value === "admin" && password.value === "123456") {
    // Đăng nhập thành công
    location.href = "../index.html";
  } else {
    // Đăng nhập thất bại
    showErrorToast();
  }
}