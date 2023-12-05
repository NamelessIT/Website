// Đăng nhập
const button = document.querySelector(".login");
button.addEventListener("click", function(event) {
  login();
});

function login() {
  // Ngăn chặn trình duyệt gửi form đi
  event.preventDefault();

  // Lấy dữ liệu từ Local Storage
  const userDataStored = JSON.parse(localStorage.getItem("usersDataArray"));
  //console.log(userDataStored);
  // Lấy thông tin tài khoản và mật khẩu
  const username = document.getElementById("USERNAME");
  const password = document.getElementById("PASSWORD");
  
  // console.log(userDataStored.email);
  // console.log(userDataStored.password);
  if(userDataStored){
    for (var i = 0; i < userDataStored.length; i++) {
      //console.log(userDataStored.length)
      const userData = userDataStored[i];
      console.log(userData);
      // Kiểm tra xem thông tin tài khoản và mật khẩu có hợp lệ hay không
      // if (username.value === "Admin" && password.value === "123") {
      //   // Đăng nhập thành công
      //   currentUser = 'Admin';
      //   localStorage.setItem('loggedInUser', 'Admin');
      //   location.href = "../index.html";
      // }
        if(username.value === userData.email && password.value === userData.password){
        currentUser = userData.email;
        localStorage.setItem('loggedInUser', userData.email);
        location.href = "../index.html";
      }
    }
      // Đăng nhập thất bại
      showErrorToast();
  }
  // else{
  //   let usersDataArray = JSON.parse(localStorage.getItem("usersDataArray")) || [];
  //   currentUser = 'Admin';
  //   localStorage.setItem('loggedInUser', 'Admin');
  //   location.href = "../index.html";
  // }
  }


// Mở trang đăng ký 
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
  modal.classList.add('Bungra');

  // Khi người dùng click vào nút đóng modal
  closeBtn.onclick = function() {
  modal.style.display = "none";
  modal.classList.remove('Bungra');
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

// // Khi click vào mắt ở phần password của đăng ký sẽ thấy nội dung của Signup
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

  var selectorRules = {};

  // Hàm thực hiện validate
  function Validate(inputElement, rule){
    
    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
    var errorMessage;

    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];

    // lặp qua từng rule và kiểm tra
    // Nếu có lỗi dừng việc kiểm tra
    for( var i = 0; i < rules.length; ++i){
      errorMessage = rules [i] (inputElement.value);
      if(errorMessage) break;
    }

    if(errorMessage){
      errorElement.innerText = errorMessage; 
      inputElement.parentElement.classList.add('invalid');
    }else{
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }

    return !errorMessage;
  }

  // lấy element của form cần validate
  var formElement = document.querySelector(options.form);

  if(formElement){

    // khi form submit
    formElement.onsubmit = function(e) {
      e.preventDefault();

      var isFormValid = true;

      // Lặp qua từng rule và validate
      options.rules.forEach(function(rule){
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = Validate(inputElement, rule);
        if(!isValid){
          isFormValid = false;
        }
      });

      if(isFormValid){
        // submit theo hàm onSubmit
        if(typeof options.onSubmit === 'function'){
          const email = document.getElementById("Email-Sign").value;
          const password = document.getElementById("PASSWORD-Sign").value;
          const userData = {email, password};
          options.onSubmit(userData);
        }
        // submit theo mặc định của form
        else{
          formElement.onsubmit(); 
        }
      }
    }


    // Lặp qua mỗi sự kiện và xử lý
    options.rules.forEach(function(rule) {

      // Lưu lại các rule cho mỗi input 
      if(Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
  
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

// Lưu tài khoản người dùng vào Local Storage sau khi bấm Đăng Ký

document.addEventListener("DOMContentLoaded", function() {
  let usersDataArray = JSON.parse(localStorage.getItem("usersDataArray")) || [];

  // Kiểm tra xem mảng có tài khoản nào không
  if (usersDataArray.length === 0) {
    // Nếu không, thêm một tài khoản Admin mặc định vào mảng
    const adminUser = {
      email: "Admin",
      password: "123",
    };
    usersDataArray.push(adminUser);
    localStorage.setItem("usersDataArray", JSON.stringify(usersDataArray));
  }

  const signupForm = document.getElementById("form-signup1");

  // Validator cho form đăng ký
  Validator({
    form: '#form-signup1',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#Email-Sign', 'Vui lòng nhập Email'),
        Validator.isEmail('#Email-Sign', 'Không phải định dạng của Email'),
        Validator.isRequired('#PASSWORD-Sign', 'Vui lòng nhập mật khẩu'),
        Validator.minLength('#PASSWORD-Sign', 6),
        Validator.isRequired('#PASSWORD-CFT', 'Vui lòng nhập lại mật khẩu'),
        Validator.isConfirmed('#PASSWORD-CFT', function() {
            return document.querySelector('#form-signup1 #PASSWORD-Sign').value;
        }, 'Mật khẩu không trùng khớp'),
    ],
    onSubmit: function(data) {
      // Xử lý đăng ký khi hợp lệ
      const { email, password } = data;
      //console.log(data);
      if(email && password){
        const userData = { 'email': email, 'password': password };
        //console.log(userData);
        usersDataArray.push(userData);
        localStorage.setItem("usersDataArray", JSON.stringify(usersDataArray));
        
        // Thông báo thành công
        showSuccessToastSignUp();
        // Reload trang sau 1 giây
        setTimeout(function () {
          location.reload();
        }, 1000);
      } else {
          showErrorToastSignUp();
        }
    }
  });
});

function showSuccessToastSignUp() {
  toast({
    title: "Thành công!",
    message: "Bạn đã đăng ký thành công tài khoản tại SGU Coffee.",
    type: "success",
    duration: 5000
  });
}

function showErrorToastSignUp() {
  toast({
    title: "Thất bại!",
    message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
    type: "error",
    duration: 5000
  });
}

