// mốt chỉnh đăng nhập thành .dangnhap khi bấm vào icon user sẽ ra 1 hình chữ nhật hiện gồm tài khoản(nếu đã đăng nhập) và đăng xuất
var dangnhap = document.querySelector(".fa-user");
var menu = document.querySelector(".js-nav");
var blockmenu = document.querySelector(".nav-menu");
var outside = document.querySelector(".outside");
var icon = document.getElementById("iconupdown");
var open = false;

// Thêm một sự kiện click cho thẻ `fa-user` để mở trang đăng nhập.
dangnhap.addEventListener("click", function () {
  location.href = "page/signup.html";
});

// Thêm một hàm `closeMenu()` để đóng menu khi người dùng nhấp bên ngoài menu.
function closeMenu() {
  outside.classList.add("invisible");
  icon.classList.remove("fa-chevron-down");
  icon.classList.add("fa-chevron-up");
  open = false;
}

function showMenu() {
  outside.classList.remove("invisible");
  icon.classList.add("fa-chevron-down");
  icon.classList.remove("fa-chevron-up");
  open = true;
}
// Gọi hàm `closeMenu()` khi người dùng nhấp bên ngoài menu.

blockmenu.addEventListener("click", function () {
  if (open === true) {
    closeMenu();
    menu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  } else {
    showMenu();
  }
});

// Gọi hàm `showMenu()` khi người dùng nhấp vào `nav-menu`.
// blockmenu.addEventListener('click',showMenu);

// BAR
var dots = document.querySelectorAll(".dot-icon");
var image = document.querySelector(".img");
var Welcome = document.querySelector(".display");
var ColorTD = document.querySelectorAll(".TieuDe");
let timeoutId;

BanPHim();
dots.forEach((dot) => {
  // Set up event listener for each dot
  dot.addEventListener("click", function () {
    chuyen();
    menu();
  });

  function menu() {
    // Remove the active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
      image.classList.remove("img0");
      image.classList.remove("img1");
      image.classList.remove("img2");
    });

    // Add the active class to the clicked dot
    dot.classList.add("active");

    if (dots[0].classList.contains("active")) {
      image.classList.add("img0");
    }
    if (dots[1].classList.contains("active")) {
      image.classList.add("img1");
    }
    if (dots[2].classList.contains("active")) {
      image.classList.add("img2");
    }

    // màu chữ
    ColorTD.forEach((TD) => {
      if (image.classList.contains("img1")) {
        TD.classList.add("black");
        image.classList.add("justify");
        Welcome.classList.add("invisible");
      } else {
        TD.classList.remove("black");
        image.classList.remove("justify");
        Welcome.classList.remove("invisible");
      }
    });
    // kết thúc
  }
});

var current = 0;
function chuyen() {
  dots[current].classList.remove("active");
  // img
  // if(image.classList.contains('img0')){ // image.classList.remove('img0'); // image.classList.add('img1'); // ColorTD.classList.add('black'); // } // else if(image.classList.contains('img1')){ // image.classList.remove('img1'); // image.classList.add('img0'); // ColorTD.classList.remove('black'); // }

  // ket thuc img

  current = (current + 1) % dots.length;
  dots[current].classList.add("active");

  if (dots[0].classList.contains("active")) {
    image.classList.remove("img0");
    image.classList.remove("img1");
    image.classList.remove("img2");
    image.classList.add("img0");
  }
  if (dots[1].classList.contains("active")) {
    image.classList.remove("img0");
    image.classList.remove("img1");
    image.classList.remove("img2");
    image.classList.add("img1");
  }
  if (dots[2].classList.contains("active")) {
    image.classList.remove("img0");
    image.classList.remove("img1");
    image.classList.remove("img2");
    image.classList.add("img2");
  }
  // màu chữ
  ColorTD.forEach((TD) => {
    if (image.classList.contains("img1")) {
      TD.classList.add("black");
      image.classList.add("justify");
      Welcome.classList.add("invisible");
    } else {
      TD.classList.remove("black");
      image.classList.remove("justify");
      Welcome.classList.remove("invisible");
    }
  });
  // kết thúc

  for (let i = 0; i < dots.length; i++) {
    if (i != current && dots[i].classList.contains("active")) {
      dots[i].classList.remove("active");
    }
  }
}

// tương tác bàn phím
function BanPHim() {
  document.addEventListener("keydown", function (event) {
    for (let index = 0; index < dots.length; index++) {
      if (dots[index].classList.contains("active")) {
        // bấm phải
        if (event.code === "ArrowRight") {
          dots[index].classList.remove("active");
          if (index + 1 === dots.length) {
            index = 0;
          } else {
            index = index + 1;
          }
          dots[index].classList.add("active");

          if (dots[0].classList.contains("active")) {
            image.classList.remove("img0");
            image.classList.remove("img1");
            image.classList.remove("img2");
            image.classList.add("img0");
          }
          if (dots[1].classList.contains("active")) {
            image.classList.remove("img0");
            image.classList.remove("img1");
            image.classList.remove("img2");
            image.classList.add("img1");
          }
          if (dots[2].classList.contains("active")) {
            image.classList.remove("img0");
            image.classList.remove("img1");
            image.classList.remove("img2");
            image.classList.add("img2");
          }
          // màu chữ
          ColorTD.forEach((TD) => {
            if (image.classList.contains("img1")) {
              TD.classList.add("black");
              image.classList.add("justify");
              Welcome.classList.add("invisible");
            } else {
              TD.classList.remove("black");
              image.classList.remove("justify");
              Welcome.classList.remove("invisible");
            }
          });
          //   kết thúc
          for (let i = 0; i < dots.length; i++) {
            if (i !== index && dots[i].classList.contains("active")) {
              dots[i].classList.remove("active");
            }
          }
        }
        // bấm trái
        else if (event.code === "ArrowLeft") {
          dots[index].classList.remove("active");
          if (index - 1 < 0) {
            index = dots.length - 1;
          } else {
            index = index - 1;
          }
          dots[index].classList.add("active");

          if (dots[0].classList.contains("active")) {
            image.classList.remove("img0");
            image.classList.remove("img1");
            image.classList.remove("img2");
            image.classList.add("img0");
          }
          if (dots[1].classList.contains("active")) {
            image.classList.remove("img0");
            image.classList.remove("img1");
            image.classList.remove("img2");
            image.classList.add("img1");
          }
          if (dots[2].classList.contains("active")) {
            image.classList.remove("img0");
            image.classList.remove("img1");
            image.classList.remove("img2");
            image.classList.add("img2");
          }
          // màu chữ
          ColorTD.forEach((TD) => {
            if (image.classList.contains("img1")) {
              TD.classList.add("black");
              image.classList.add("justify");
              Welcome.classList.add("invisible");
            } else {
              TD.classList.remove("black");
              image.classList.remove("justify");
              Welcome.classList.remove("invisible");
            }
          });
          //   kết thúc
          for (let i = 0; i < dots.length; i++) {
            if (i !== index && dots[i].classList.contains("active")) {
              dots[i].classList.remove("active");
            }
          }
        }
      }
    }
    // thêm dòng này
    // chuyen(index);
  });
}

// kết thúc

setInterval(chuyen, 5000);
timeoutId = setTimeout(chuyen, 2000);

// KẾT THÚC BAR

// SẢN PHẨM
var products = document.querySelectorAll(".pro");
var Propertie = document.querySelector(".modal");
var InPropertie = document.querySelector(".modal-container");
var close = document.querySelector(".close");
var modalImage = document.querySelector(".modal img");
var input = document.querySelector(".SoLuong");

function showProperties(e) {
  Propertie.classList.remove("invisible");

  // Get the image url of the clicked image
  var imageURL = e.target.src;

  // Set the image url of the modal image
  modalImage.src = imageURL;
}

function closeProperties() {
  Propertie.classList.add("invisible");
  input.value = 0;
}

products.forEach((pro) => {
  pro.addEventListener("click", showProperties);
});

close.addEventListener("click", closeProperties);

Propertie.addEventListener("click", closeProperties);
InPropertie.addEventListener("click", function (event) {
  event.stopPropagation();
});

// KẾT THÚC SẢN PHẨM

// ADMIN
