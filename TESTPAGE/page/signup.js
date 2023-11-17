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
    currentUser = 'admin';
    localStorage.setItem('loggedInUser', 'admin');
    location.href = "../index.html";
  }
  else if(username.value==='user1' && password.value==='123'){
    currentUser = 'user1';
    localStorage.setItem('loggedInUser', 'user1');
    location.href = "../index.html";
  }
  else {
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
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
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
function Validator(options){

  // Hàm thực hiện validate
  function Validate(inputElement, rule){
    var errorMessage = rule.test(inputElement.value);
    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

          if(errorMessage){
            errorElement.innerText = errorMessage; 
            inputElement.parentElement.classList.add('invalid');
          }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
          }
  }

  // lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  
  if(formElement){
    
    options.rules.forEach(function(rule){

      var inputElement = formElement.querySelector(rule.selector);
      
      
      if(inputElement){
        // Xử lí trường hợp blur khỏi input
        inputElement.onblur = function(){
          Validate(inputElement, rule);
          
        }

        // Xủ lý khi nhập vào input
        inputElement.oninput = function(){
          var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
        }
      }

    });

  }

}
// Định nghĩa rules
// Nguyên tắc rules:
// 1. Khi có lỗi => message lỗi
// 2. Khi hợp lệ => undefined
Validator.isEmail = function(selector, message){
  return {
    selector: selector,
    test: function(value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || 'Vui lòng nhập email';
    }
  };
}

Validator.isRequired = function(selector, message){
  return {
    selector: selector,
    test: function(value) {
      return value.trim() ? undefined : message || 'Vui lòng nhập thông tin';
    }
  };
}

Validator.minLength = function(selector, min, message){
  return {
    selector: selector,
    test: function(value) {
      return value.length >= 6 ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
    }
  };
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
  return {
    selector: selector,
    test: function(value) {
      return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
    }
  };
}