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

const MDsignup = document.querySelector(".signup");

MDsignup.addEventListener("click", function(event) {
  signup();
});

function signup() {
  // Ngăn chặn trình duyệt gửi form đi
  event.preventDefault();

  var modal = document.getElementById("signupModal");
  var closeBtn = modal.querySelector(".close");

// Khi người dùng click vào "Sign up"
  modal.style.display = "block";


// Khi người dùng click vào nút đóng modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Khi người dùng click bất kỳ đâu bên ngoài modal, modal cũng sẽ đóng
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

// Khi click vào mắt ở phần password của đăng nhập sẽ thấy nội dung của Login
  document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("PASSWORD");
    const eyeIcon = document.querySelector("#eyes i.fa-eye");

    eyeIcon.addEventListener("click", function() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      }
    });
  });

// // Khi click vào mắt ở phần password của đăng nhập sẽ thấy nội dung của Signup
document.addEventListener("DOMContentLoaded", function() {
  const eyeIcons = document.querySelectorAll("#eyes i.fa-eye");

  eyeIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      const passwordInputId = icon.parentElement.getAttribute("data-target");
      const passwordInput = document.getElementById(passwordInputId);

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });
});


//Cảnh báo khi bỏ trống ô thông tin
document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.getElementById("signup-form");
  const errorMessage = document.getElementById("error-message");

  signupForm.addEventListener("submit", function(e) {
    const usernameInput = document.getElementById("USERNAME-Sign");
    const passwordSignInput = document.getElementById("PASSWORD-Sign");
    const passwordCftInput = document.getElementById("PASSWORD-CFT");

    if (usernameInput.value === "" || passwordSignInput.value === "" || passwordCftInput.value === "") {
      errorMessage.textContent = "Vui lòng điền đầy đủ thông tin.";
      errorMessage.style.display = "block";
      e.preventDefault(); // Ngăn chặn việc gửi biểu mẫu nếu có lỗi
    } else {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
  });
});