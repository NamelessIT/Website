var sidebarItems = document.querySelectorAll('.sidebar li');

sidebarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var currentItem = this;
        var currentOrder = parseInt(currentItem.style.order);

        // Xóa lớp 'active' khỏi tất cả các li
        sidebarItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Thêm lớp 'active' vào li được click
        currentItem.classList.add('active');

        // Thêm hiệu ứng trượt vào div content
        var contentDiv = document.querySelector('.content');

        // Kiểm tra xem liệu mục được bấm có thứ tự thấp hơn mục hiện tại đang có background màu đen hay không
        var currentActiveItem = document.querySelector('.sidebar li.active');
        if (currentActiveItem && parseInt(currentActiveItem.style.order) > currentOrder) {
            contentDiv.classList.remove('sliding-effect');
            contentDiv.classList.add('sliding-effect', 'slide-up');
        } else {
            contentDiv.classList.remove('sliding-effect', 'slide-up');
            void contentDiv.offsetWidth; // Kích hoạt reflow
            contentDiv.classList.add('sliding-effect');
        }
    });
});

var Quanlydonhang=document.getElementById('QUANLYDONHANG');
var Quanlynguoidung=document.getElementById('QUANLYNGUOIDUNG');
var Thongkedonhang=document.getElementById('THONGKEDONHANG');
Quanlydonhang.classList.remove('invisible');
// Quanlydonhang.classList.remove('invisible');
sidebarItems[0].addEventListener('click',function(){
    Quanlydonhang.classList.remove('invisible');
    Thongkedonhang.classList.add('invisible');
    Quanlynguoidung.classList.add('invisible');
})
sidebarItems[1].addEventListener('click',function(){
    Quanlydonhang.classList.add('invisible');
    Quanlynguoidung.classList.remove('invisible');
    Thongkedonhang.classList.add('invisible');
})
sidebarItems[2].addEventListener('click',function(){
    Quanlydonhang.classList.add('invisible');
    Quanlynguoidung.classList.add('invisible');
    Thongkedonhang.classList.remove('invisible');
})

sidebarItems[3].addEventListener('click',function(){
    window.location.href = 'index.html';
  })


// QUANLYDONHANG
class Pro_Chart{
    constructor(CHART_BOX,img,tensp,soluong,duong,da,size,topping,thanhtien){
      this.CHART_BOX=CHART_BOX;
      this.img=img;
      this.tensp=tensp;
      this.soluong=soluong;
      this.duong=duong;
      this.da=da;
      this.size=size;
      this.topping=topping;
      this.thanhtien=thanhtien;
    
    this.element=document.createElement('div');
    this.element.classList.add('chart');
    this.element.setAttribute('data-img',img);
  
    const chartImage=document.createElement('img');
    chartImage.classList.add('ChartImage');
    chartImage.src=img;
    chartImage.alt=tensp;
  
    const ChartTsp=document.createElement('h5');
    ChartTsp.classList.add('ChartTsp');
    ChartTsp.textContent=tensp;
  
    const ChartSoLuong=document.createElement('h5');
    ChartSoLuong.classList.add('ChartSL');
    ChartSoLuong.textContent=soluong;
  
    const ChartDuong=document.createElement('h5');
    ChartDuong.classList.add('ChartDuong');
    // ChartDuong.classList.add('invisible');
    ChartDuong.textContent=duong;
  
    const ChartDa=document.createElement('h5');
    ChartDa.classList.add('ChartDa');
    // ChartDa.classList.add('invisible');
    ChartDa.textContent=da;
  
    const ChartSize=document.createElement('h5');
    ChartSize.classList.add('ChartSize');
    // ChartSize.classList.add('invisible');
    ChartSize.textContent=size;
  
    const ChartTopping=document.createElement('h5');
    ChartTopping.classList.add('ChartTopping');
    // ChartTopping.classList.add('invisible');
    ChartTopping.textContent=topping;
  
    const ChartTien=document.createElement('h5');
    ChartTien.classList.add('ChartTien');
    ChartTien.textContent=thanhtien;

    // Thêm thời gian vào ChartTien
    const currentTime = new Date();
    const currentDay = currentTime.getDate();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    const timeString = `Ngày:${currentDay} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    
    const ChartTime = document.createElement('span');
    ChartTime.classList.add('ChartTime');
    ChartTime.textContent = timeString;

    const HoanThanh=document.createElement('h5');
    HoanThanh.classList.add('HoanThanh');
    HoanThanh.textContent='Hoàn Thành';

    const Huy=document.createElement('h5');
    Huy.classList.add('HUY');
    Huy.textContent='Hủy';
  
    this.CHART_BOX.appendChild(this.element);
    this.element.appendChild(chartImage);
    this.element.appendChild(ChartTsp);
    this.element.appendChild(ChartSoLuong);
    this.element.appendChild(ChartDuong);
    this.element.appendChild(ChartDa);
    this.element.appendChild(ChartSize);
    this.element.appendChild(ChartTopping);
    this.element.appendChild(ChartTien);
    this.element.appendChild(ChartTime);
    this.element.appendChild(HoanThanh);
    this.element.appendChild(Huy);
    }
  }

// Hàm trả về danh sách tất cả sản phẩm từ mọi tài khoản
function getAllProducts() {
  // Lấy dữ liệu từ Local Storage
  const allData = localStorage.getItem('charts');
  const allProducts = [];

  if (allData) {
    const charts = JSON.parse(allData);
    // Lặp qua mỗi tài khoản
    for (const username in charts) {
      const currentUserProducts = charts[username];
      // Lặp qua mỗi sản phẩm trong tài khoản hiện tại
      for (const product of currentUserProducts) {
        allProducts.push({ username: username, product: product });
      }
    }
  }

  return allProducts;
}

function getUsers() {
  const usersDataJSON = localStorage.getItem('usersDataArray');
  
  if (usersDataJSON) {
    try {
      const usersDataArray = JSON.parse(usersDataJSON);
      return Array.isArray(usersDataArray) ? usersDataArray : [];
    } catch (error) {
      console.error('Error parsing usersDataArray from Local Storage:', error);
    }
  }
  
  return [];
}

function calculateTotalThanhtien() {
  const allProducts = getAllProducts();
  let total = 0;

  for (const productData of allProducts) {
    const product = productData.product;
    const thanhtien = parseFloat(product.thanhtien);
    total += thanhtien;
  }

  return total;
}
// hàm xóa từng sản phẩm
function removeSingleProductFromAllAccounts(username, productName,productSL,productDuong,productDa,productSize,productTopping,productBill) {
  // Lấy dữ liệu từ Local Storage
  const allData = localStorage.getItem('charts');

  if (allData) {
    const charts = JSON.parse(allData);

    // Kiểm tra xem tài khoản có tồn tại trong dữ liệu hay không
    if (charts.hasOwnProperty(username)) {
      const currentUserProducts = charts[username];

      // Tìm chỉ số đầu tiên của sản phẩm trong danh sách sản phẩm của tài khoản
      const index = currentUserProducts.findIndex((product) => {
        return product.tensp === productName && product.thanhtien===productBill && product.soluong===productSL 
        && product.duong===productDuong && product.da===productDa && product.size===productSize && product.topping===productTopping ;
      });
      // console.log('Kết quả tìm kiếm: ' + product.tensp+' '+pro.thanhtien);


      // Xóa sản phẩm khỏi danh sách sản phẩm của tài khoản
      if (index > -1) {
        currentUserProducts.splice(index, 1);
      }

      // Lưu dữ liệu đã cập nhật vào Local Storage
      localStorage.setItem('charts', JSON.stringify(charts));
      reload();
    }
  }
}

function reload() {
  // Tải lại trang
  location.reload();
}

function removeProductFromAllAccounts(username) {
  // Lấy dữ liệu từ Local Storage
  let charts = localStorage.getItem('charts');

  // Kiểm tra nếu không có dữ liệu, không làm gì cả
  if (!charts) {
    return;
  }

  // Giải mã dữ liệu từ chuỗi JSON
  charts = JSON.parse(charts);

  // Kiểm tra xem tài khoản có tồn tại trong danh sách hay không
  if (charts.hasOwnProperty(username)) {
    // Xóa toàn bộ sản phẩm của người dùng khỏi danh sách
    delete charts[username];
  }

  // Lưu dữ liệu đã được cập nhật vào Local Storage
  localStorage.setItem('charts', JSON.stringify(charts));
}

// Xóa tài khoản 

function deleteAccount(email) {
  const usersDataArray = getUsers();

  // Tìm vị trí của tài khoản trong mảng usersDataArray
  const index = usersDataArray.findIndex(user => user.email === email);

  if (index !== -1) {
    // Xóa tài khoản khỏi mảng
    usersDataArray.splice(index, 1);

    // Cập nhật Local Storage với danh sách đã được xóa
    localStorage.setItem('usersDataArray', JSON.stringify(usersDataArray));

    // Xóa tất cả các tài khoản đã hiển thị trên giao diện
    const userElements = document.getElementsByClassName('user');
    for (let i = userElements.length - 1; i >= 0; i--) {
      const emailElement = userElements[i].querySelector('p:first-child');
      if (emailElement.textContent === `Email: ${email}`) {
        userElements[i].remove();
      }
    }

    // Xóa toàn bộ sản phẩm trong chart của người dùng
    removeProductFromAllAccounts(email);
  }
}


const CHART_BOX = document.getElementById("CHART_SHOW");
const users=document.getElementById('USER_SHOW');

// load lên window
window.addEventListener('load', function() {
  const allProducts = getAllProducts();
  for (const { username, product } of allProducts) {
    const newChart = new Pro_Chart(
      CHART_BOX,
      product.img,
      product.tensp,
      "SL:" + product.soluong,
      "Đường:" + product.duong,
      "Đá:" + product.da,
      "Size:" + product.size,
      "Topping:" + product.topping,
      "Tổng:" + product.thanhtien
    );

    const chartUsername = document.createElement('h5');
    chartUsername.classList.add('ChartUsername');
    chartUsername.textContent = `Tài khoản: ${username}`;
    newChart.element.prepend(chartUsername);
  }

const chartElements = Array.from(document.querySelectorAll('.chart'));

  const delButtons = document.querySelectorAll('.HUY');
  delButtons.forEach((delButton) => {
    delButton.addEventListener('click', function () {
 // Lấy tên người dùng và sản phẩm từ các phần tử cha
  const username = delButton.parentNode.querySelector('.ChartUsername').textContent.replace('Tài khoản: ', '');
  const tensp=delButton.parentNode.querySelector('.ChartTsp').textContent;
  const sl=delButton.parentNode.querySelector('.ChartSL').textContent.replace('SL:','');
  const duong=delButton.parentNode.querySelector('.ChartDuong').textContent.replace('Đường:','');
  const da=delButton.parentNode.querySelector('.ChartDa').textContent.replace('Đá:','');
  const size=delButton.parentNode.querySelector('.ChartSize').textContent.replace('Size:','');
  const topping=delButton.parentNode.querySelector('.ChartTopping').textContent.replace('Topping:','');
  const tien=delButton.parentNode.querySelector('.ChartTien').textContent.replace('Tổng:','');
  console.log('chào '+username+' tensp '+tensp+' số lượng: '+sl+' đường: '+duong+' đá: '+da+' size: '+size+' Topping: '+topping+' tiền: '+tien);
 // Gọi hàm xóa sản phẩm với thông tin sản phẩm cần xóa
 removeSingleProductFromAllAccounts(username,tensp,sl,duong,da,size,topping,tien);
    });
  });

  // QUẢN LÝ TÀI KHOẢN
  const usersDataArray = getUsers();

  usersDataArray.forEach(function(userData) {
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.style.display='flex';
    userElement.style.alignItems='baseline';
    userElement.style.justifyContent='space-evenly';
    userElement.style.flexWrap='wrap';

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${userData.email}`;

    const passwordElement = document.createElement('p');
    passwordElement.textContent = `Password: ${userData.password}`;

    const deleteButton = document.createElement('h5');
    deleteButton.textContent = 'Xóa tài khoản';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      deleteAccount(userData.email);
      reload();
    });

    userElement.appendChild(emailElement);
    userElement.appendChild(passwordElement);
    userElement.appendChild(deleteButton);

    users.appendChild(userElement);
  });
  const countAccount=document.querySelector('.user_count');
  countAccount.textContent=usersDataArray.length;
});


// hiệu ứng đếm số 
function countUp(targetElement, targetNumber) {
  let currentNumber = 0;
  const increment = Math.ceil(targetNumber / 30); // Số lượng tăng lên sau mỗi frame

  const interval = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber;
    }

    targetElement.textContent = currentNumber;
  }, 250); // Thời gian chờ giữa các frame (ms)
}
const allProducts = getAllProducts();
const targetElement = document.querySelector('.SoLuongMuaNumber');
const targetNumber = allProducts.length;
const totalThanhtien = calculateTotalThanhtien();
const targetThanhTien=document.querySelector('.DoanhThuNumber');
sidebarItems[2].addEventListener('click',function(){
  countUp(targetElement, targetNumber);
  countUp(targetThanhTien,totalThanhtien);
})
