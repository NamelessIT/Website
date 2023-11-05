// mốt chỉnh đăng nhập thành .dangnhap khi bấm vào icon user sẽ ra 1 hình chữ nhật hiện gồm tài khoản(nếu đã đăng nhập) và đăng xuất
var dangnhap = document.querySelector('.fa-user');
var menu = document.querySelector('.js-nav');
var blockmenu = document.querySelector('.nav-menu');
var outside =document.querySelector('.outside');
var icon=document.getElementById('iconupdown');
var open = false;

// Thêm một sự kiện click cho thẻ `fa-user` để mở trang đăng nhập.
dangnhap.addEventListener('click', function() {
  location.href = "page/signup.html";
});



// Thêm một hàm `closeMenu()` để đóng menu khi người dùng nhấp bên ngoài menu.
function closeMenu() {
  outside.classList.add('invisible');
  icon.classList.remove('fa-chevron-down');
  icon.classList.add('fa-chevron-up');
  open = false;
}

function showMenu() {
  outside.classList.remove('invisible');
  icon.classList.add('fa-chevron-down');
  icon.classList.remove('fa-chevron-up');
  open = true;
}
// Gọi hàm `closeMenu()` khi người dùng nhấp bên ngoài menu.

blockmenu.addEventListener('click',function(){
  if(open===true){
    closeMenu();
    menu.addEventListener('click',function(event){
      event.stopPropagation();
    })
  }
  else{
    showMenu();
  }
});

// Gọi hàm `showMenu()` khi người dùng nhấp vào `nav-menu`.
// blockmenu.addEventListener('click',showMenu);




// BAR
var dots=document.querySelectorAll('.dot-icon');
var image=document.querySelector(".img");
var Welcome=document.querySelector(".display");
var ColorTD=document.querySelectorAll(".TieuDe");
let timeoutId;

BanPHim();
dots.forEach((dot) => {
  // Set up event listener for each dot
  dot.addEventListener('click', function() {
    chuyen();
    menu();
  });

  function menu() {
    // Remove the active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove('active');
      image.classList.remove('img0');
      image.classList.remove('img1');
      image.classList.remove('img2');
    });

    // Add the active class to the clicked dot
    dot.classList.add('active');

    if (dots[0].classList.contains('active')) {
      image.classList.add('img0');
    }
    if (dots[1].classList.contains('active')) {
      image.classList.add('img1');
    }
    if (dots[2].classList.contains('active')) {
      image.classList.add('img2');
    }

    // màu chữ
    ColorTD.forEach((TD) => {
      if (image.classList.contains('img1')) {
        TD.classList.add('black');
        image.classList.add('justify');
        Welcome.classList.add('invisible');
      } else {
        TD.classList.remove('black');
        image.classList.remove('justify');
        Welcome.classList.remove('invisible');
      }
    });
    // kết thúc
  }
});
    
    var current=0;
function chuyen(){
        dots[current].classList.remove('active');
    // img
    // if(image.classList.contains('img0')){ // image.classList.remove('img0'); // image.classList.add('img1'); // ColorTD.classList.add('black'); // } // else if(image.classList.contains('img1')){ // image.classList.remove('img1'); // image.classList.add('img0'); // ColorTD.classList.remove('black'); // }
    
    // ket thuc img
    
    
        current=(current+1)%dots.length;
        dots[current].classList.add('active');
        
    
        if(dots[0].classList.contains('active')){
            image.classList.remove('img0');
            image.classList.remove('img1');
            image.classList.remove('img2');
            image.classList.add('img0');
        }
        if(dots[1].classList.contains('active')){
            image.classList.remove('img0');
            image.classList.remove('img1');
            image.classList.remove('img2');
            image.classList.add('img1');
        }
        if(dots[2].classList.contains('active')){
            image.classList.remove('img0');
            image.classList.remove('img1');
            image.classList.remove('img2');
            image.classList.add('img2');
        }
        // màu chữ 
        ColorTD.forEach((TD)=>{
            if(image.classList.contains('img1')){
                TD.classList.add('black');
                image.classList.add('justify');
                Welcome.classList.add('invisible');
            }
            else{
                TD.classList.remove('black');
                image.classList.remove('justify');
                Welcome.classList.remove('invisible');
            }
            })
        // kết thúc
    
        for(let i=0;i<dots.length;i++){
            if(i!=current && dots[i].classList.contains('active')){
                dots[i].classList.remove('active');
            }
        }
        
    }

// tương tác bàn phím 
function BanPHim(){
    document.addEventListener('keydown', function(event) {
        for (let index = 0; index < dots.length; index++) {
          if (dots[index].classList.contains('active')) {
            // bấm phải
            if (event.code === 'ArrowRight') {
              dots[index].classList.remove('active');
              if (index + 1 === dots.length) {
                index = 0;
              } else {
                index = index + 1;
              }
              dots[index].classList.add('active');
    
              if(dots[0].classList.contains('active')){
                  image.classList.remove('img0');
                  image.classList.remove('img1');
                  image.classList.remove('img2');
                  image.classList.add('img0');
              }
              if(dots[1].classList.contains('active')){
                  image.classList.remove('img0');
                  image.classList.remove('img1');
                  image.classList.remove('img2');
                  image.classList.add('img1');
              }
              if(dots[2].classList.contains('active')){
                  image.classList.remove('img0');
                  image.classList.remove('img1');
                  image.classList.remove('img2');
                  image.classList.add('img2');
              }
              // màu chữ 
              ColorTD.forEach((TD)=>{
                  if(image.classList.contains('img1')){
                      TD.classList.add('black');
                      image.classList.add('justify');
                      Welcome.classList.add('invisible');
                  }
                  else{
                      TD.classList.remove('black');
                      image.classList.remove('justify');
                      Welcome.classList.remove('invisible');
                  }
                  })
                //   kết thúc
              for (let i = 0; i < dots.length; i++) {
                if (i !== index && dots[i].classList.contains('active')) {
                  dots[i].classList.remove('active');
                }
              }
            } 
            // bấm trái
            else if (event.code === 'ArrowLeft') {
              dots[index].classList.remove('active');
              if (index - 1 < 0) {
                index = dots.length - 1;
              } else {
                index = index - 1;
              }
              dots[index].classList.add('active');


              if(dots[0].classList.contains('active')){
                image.classList.remove('img0');
                image.classList.remove('img1');
                image.classList.remove('img2');
                image.classList.add('img0');
            }
            if(dots[1].classList.contains('active')){
                image.classList.remove('img0');
                image.classList.remove('img1');
                image.classList.remove('img2');
                image.classList.add('img1');
            }
            if(dots[2].classList.contains('active')){
                image.classList.remove('img0');
                image.classList.remove('img1');
                image.classList.remove('img2');
                image.classList.add('img2');
            }
            // màu chữ 
            ColorTD.forEach((TD)=>{
                if(image.classList.contains('img1')){
                    TD.classList.add('black');
                    image.classList.add('justify');
                    Welcome.classList.add('invisible');
                }
                else{
                    TD.classList.remove('black');
                    image.classList.remove('justify');
                    Welcome.classList.remove('invisible');
                }
                })
              //   kết thúc
              for (let i = 0; i < dots.length; i++) {
                if (i !== index && dots[i].classList.contains('active')) {
                  dots[i].classList.remove('active');
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


setInterval(chuyen,5000);
timeoutId=setTimeout(chuyen,2000);

// KẾT THÚC BAR







// ADMIN
var openadd=document.querySelector('.pro-admin');
var add=document.querySelector('.modal-admin');
var InPropertie_admin = document.querySelector('.modal-admin .modal-container');
var close_admin = document.querySelector('.modal-admin .close');
var modalImage_admin = document.querySelector('.modal-admin .modal-body img');
var modalImage_adjust=document.querySelector('.modal-ADJUST .modal-body_ADJUST img');
var inputs=document.querySelectorAll('.SoLuong');
var accept=document.querySelector('.Accept');


const input = document.getElementById('MaSanPham');

// Xác định định dạng của giá trị nhập vào
input.pattern = '[0-9]{4}';

 
// KẾT THÚC



const productImage = document.createElement('img');
productImage.alt = 'Product image';

openadd.addEventListener('click',function(){
  add.classList.remove('invisible');
})
function finish() {
  add.classList.add('invisible');
  const MASP=document.getElementById("MaSanPham");
  const TDSP=document.getElementById("TIEUDE");
  const TenSanPham = document.getElementById("TenSanPham");
  const GiaBan = document.getElementById("GiaBan");
  MASP.value=0;
  TDSP.value='';
  TenSanPham.value='';
  GiaBan.value=0;

  modalImage_admin.src="img/add.png";
}
close_admin.addEventListener('click',finish);


// tạo thêm sản phẩm
class Pro {
  constructor(container, img, ma, tieude, name, price, icon) {
    this.container = container;
    this.img = img;
    this.ma = ma;
    this.tieude = tieude;
    this.name = name;
    this.price = price;
    this.icon = icon;

    this.element = document.createElement('div');
    this.element.classList.add('pro');
    this.element.setAttribute('data-img', img);

    const productImage = document.createElement('img');
    productImage.src = img;
    productImage.alt = 'Product image';

    const modal_adjust = document.createElement('div');
    modal_adjust.classList.add('modal-adjust');
    modal_adjust.classList.add('invisible');
    const adjust = document.createElement('div');
    adjust.classList.add('adjust');
    const rewrite = document.createElement('div');
    rewrite.classList.add('rewrite');
    const font_rewrite = document.createElement('h4');
    font_rewrite.textContent = 'Sửa';
    const delPro = document.createElement('div');
    delPro.classList.add('delete');
    const font_del = document.createElement('h4');
    font_del.textContent = 'Xóa';

    this.element.appendChild(modal_adjust);
    modal_adjust.appendChild(adjust);
    adjust.appendChild(rewrite);
    adjust.appendChild(delPro);
    rewrite.appendChild(font_rewrite);
    delPro.appendChild(font_del);



    const description = document.createElement('div');
    description.classList.add('des');

    const Ten = document.createElement('span');
    Ten.textContent = tieude;

    const maSP=document.createElement('h5');
    maSP.classList.add('MaSP');
    maSP.textContent=ma;

    const productName = document.createElement('h5');
    productName.textContent = name;

    const productPrice = document.createElement('h4');
    productPrice.textContent = price;

    const addToCartButton = document.createElement('a');
    addToCartButton.href = '#';
    addToCartButton.innerHTML = '<i class="fa fa-shopping-cart cart"></i>';
    Ten.appendChild(maSP);
    description.appendChild(Ten);
    description.appendChild(productName);
    description.appendChild(productPrice);

    this.element.appendChild(productImage);
    this.element.appendChild(description);
    this.element.appendChild(addToCartButton);

    this.container.appendChild(this.element);
  }
}

// class modal 

class Modal {
  constructor(MODAL,imgSrc, name,price) {
    this.MODAL=MODAL;
    this.imgSrc = imgSrc;
    this.name = name;
    this.price=price;

    this.element=document.createElement('div');
    this.element.classList.add('modal');
    this.element.classList.add('invisible');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.classList.add('animationTransmision');

    const closeButton = document.createElement('i');
    closeButton.classList.add('fa');
    closeButton.classList.add('fa-times');
    closeButton.classList.add('icon');
    closeButton.classList.add('close');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    const img = document.createElement('img');
    img.src = imgSrc;
    imgDiv.appendChild(img);

    const propertiesDiv = document.createElement('div');
    propertiesDiv.classList.add('properties');
    const nameH2 = document.createElement('h2');
    nameH2.style.marginBottom = '15px';
    nameH2.style.color = 'red';
    nameH2.textContent = name;
    const priceH4 = document.createElement('h4');
    priceH4.style.margin = '5px';
    priceH4.textContent = price;
    const quantityH4 = document.createElement('h4');
    quantityH4.style.margin = '8px 5px';
    quantityH4.textContent = 'Số lượng:';
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.pattern = '[1-9]+';
    quantityInput.style.display='inline';
    const buyButton = document.createElement('button');
    buyButton.classList.add('Mua');
    buyButton.innerHTML = '<i class="fa fa-shopping-cart cart"></i>MUA';

    
    propertiesDiv.appendChild(nameH2);
    propertiesDiv.appendChild(priceH4);
    propertiesDiv.appendChild(quantityH4);
    propertiesDiv.appendChild(quantityInput);
    propertiesDiv.appendChild(buyButton);
    quantityH4.appendChild(quantityInput);

    modalBody.appendChild(imgDiv);
    modalBody.appendChild(propertiesDiv);

    modalContainer.appendChild(closeButton);
    modalContainer.appendChild(modalBody);
    this.element.appendChild(modalContainer);

    // this.modalContainer.addEventListener('click', (event) => {
    //   if (event.target === this.modalContainer || event.target === this.closeButton) {
    //     this.hide();
    //   }
    // });
    this.MODAL.appendChild(this.element);
  }

}



// Lấy ảnh từ trong máy.




modalImage_admin.addEventListener('click',LayAnh );
modalImage_adjust.addEventListener('click',LayAnh);
function LayAnh() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.addEventListener('change', function() {
    const file = input.files[0];

    // Lấy URL của ảnh.
    const reader = new FileReader();
    reader.onload = function(e) {
      modalImage_admin.src = e.target.result;
      modalImage_adjust.src=e.target.result;
      productImage.src = e.target.result;   // biến chứa url ảnh
    };

    reader.readAsDataURL(file);
  });

  input.click();
}; 
//


//KẾT THÚC


const proContainer = document.querySelector('.pro-container');
const MODAL=document.getElementById("MODAL")


// Lưu trữ thông tin của sản phẩm vào local storage.
function saveProduct(pro) {
  const ma = document.getElementById('MaSanPham').value;
  if(ma.length!==4){
    return;
  }
  else{
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push(pro);
  localStorage.setItem('products', JSON.stringify(products));
  }
}

function saveModal(modal){
  const ma = document.getElementById('MaSanPham').value;
  if(ma.length!==4){
    return;
  }
  else{
    const modals=JSON.parse(localStorage.getItem('modals') || '[]');
    modals.push(modal);
    localStorage.setItem('modals',JSON.stringify(modals));
  }
}

// Lấy thông tin của sản phẩm từ local storage.
function getProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  return products;
}
function getModals() {
  const modals=JSON.parse(localStorage.getItem('modals') || '[]')
  return modals;
}


// Khi bấm vào nút `Accept`, lưu trữ thông tin của sản phẩm mới vào local storage.
accept.addEventListener('click', chapnhan);
  function chapnhan() {
  const ma = document.getElementById('MaSanPham').value;
  const tieude = document.getElementById('TIEUDE').value;
  const tenSanPham = document.getElementById('TenSanPham').value;
  const giaBan = document.getElementById('GiaBan').value;
  if (ma.length !== 4) {
    // Hiển thị thông báo lỗi
    alert('Vui lòng nhập mã sản phẩm có 4 chữ số!');

    // Đặt lại giá trị của mã sản phẩm
    document.getElementById('MaSanPham').value = '';

    // Không thực hiện các hành động tiếp theo
    return false;
  }
  const newmodal = new Modal(MODAL,productImage.src, tenSanPham,giaBan);
  const newPro = new Pro(proContainer, productImage.src,ma, tieude, tenSanPham, giaBan); 
  

  // Lưu trữ thông tin của sản phẩm mới vào local storage. ở dạng String
  saveProduct(newPro);
  saveModal(newmodal);
  reload();
  // Đóng modal.
  newmodal.classList.add('invisible');

  // Xóa giá trị của các input.
  document.getElementById('MaSanPham').value = 0;
  document.getElementById('TIEUDE').value = '';
  document.getElementById('TenSanPham').value = '';
  document.getElementById('GiaBan').value = 0;

  // Reset hình ảnh của modal.
  modalImage_admin.src = 'img/add.png';
  
};
function reload() {
  // Tải lại trang
  location.reload();
}

// xóa product khỏi local storage

function deleteProduct(position) {
  // Lấy danh sách các sản phẩm từ local storage
  const products = getProducts();

  // Kiểm tra vị trí xóa có hợp lệ hay không
  if (position < 0 || position >= products.length) {
    return;
  }

  // Xóa sản phẩm khỏi danh sách tại vị trí được truyền vào
  products.splice(position, 1);

  // Lưu lại danh sách các sản phẩm đã cập nhật vào local storage
  localStorage.setItem('products', JSON.stringify(products));
}




// xóa modal khỏi local storage
function deleteModal(position) {
  // Lấy danh sách các modal từ local storage
  const modals = getModals();

  // Kiểm tra vị trí xóa có hợp lệ hay không
  if (position < 0 || position >= modals.length) {
    return;
  }

  // Xóa modal khỏi danh sách tại vị trí được truyền vào
  modals.splice(position, 1);

  // Lưu lại danh sách các modal đã cập nhật vào local storage
  localStorage.setItem('modals', JSON.stringify(modals));
}

var modal_adjust=document.querySelector('.modal-ADJUST');

// hàm chỉnh sửa thông tin sản phẩm
function updateProduct(index) {


  // Chuyển đổi chuỗi JSON thành mảng các đối tượng
  const products = getProducts();

  // Kiểm tra vị trí hợp lệ
  if (index >= 0 && index < products.length) {
    // Lấy đối tượng cần chỉnh sửa dựa trên vị trí
    const myObject = products[index];

    const adjust=document.querySelector('.ADJUST');
    adjust.addEventListener('click',function(){
      const newMa = document.getElementById('MaSanPham-SUA').value;
      const newTieude = document.getElementById('TIEUDE-SUA').value;
      const newName = document.getElementById('TenSanPham-SUA').value;
      const newPrice = document.getElementById('GiaBan-SUA').value;
      console.log("co hoạt động");
      myObject.img = productImage.src;
      myObject.ma = newMa;
      myObject.tieude = newTieude;
      myObject.name = newName;
      myObject.price = newPrice;
          // Lưu lại mảng các đối tượng đã được chỉnh sửa vào local storage
      modal_adjust.classList.add('invisible');
      localStorage.setItem('products', JSON.stringify(products));
      reload();
    })
    


  } else {
    console.log('Vị trí không hợp lệ');
  }
}

function updateModal(index) {
  // localStorage.removeItem('modals');

  // Chuyển đổi chuỗi JSON thành mảng các đối tượng
  const modals = getModals();

  // Kiểm tra vị trí hợp lệ
  if (index >= 0 && index < modals.length) {
    // Lấy đối tượng cần chỉnh sửa dựa trên vị trí
    const newModal = modals.slice(index, index + 1)[0];

    const adjust=document.querySelector('.ADJUST');
    adjust.addEventListener('click',function(){
      const newName = document.getElementById('TenSanPham-SUA').value;
      const newPrice = document.getElementById('GiaBan-SUA').value;
      newModal.imgSrc=productImage.src;
      newModal.name=newName;
      newModal.price=newPrice;
          // Lưu lại mảng các đối tượng đã được chỉnh sửa vào local storage
      localStorage.setItem('modals', JSON.stringify(modals));
      reload();
    })
    


  } else {
    console.log('Vị trí không hợp lệ');
  }
}













// Khi trang được tải, lấy thông tin của sản phẩm từ local storage và hiển thị chúng trên trang.
window.addEventListener('load', function() {
    const products = getProducts();
    const modals=getModals();
  // tất cả các products được load lên từ local storage dưới dạng text lên window
    for (const pro of products) {
      const newPro = new Pro(proContainer, pro.img," #" +pro.ma, pro.tieude, pro.name, pro.price+"đ");
    }
    for(const modal of modals){
      const newmodal=new Modal(MODAL,modal.imgSrc,modal.name,"Giá: "+modal.price);
    }
  // tạo 1 list pro và modal dưới dạng js



    const productElements = Array.from(document.querySelectorAll('.pro'));
    const modalElements=Array.from(document.querySelectorAll('.modal'));
//  tạo list dạng nodediv

  // các biến và hàm cho sản phẩm

 
 var modalImage = document.querySelector('.modal img');
 var delPros=document.querySelectorAll('.delete');
 var adjusts=document.querySelectorAll('.rewrite');
 var modal_adjust=document.querySelector('.modal-ADJUST');
 var close_adjust=document.querySelector('.modal-container_ADJUST .icon')

 var delAll=this.document.querySelector('.pro-container .pro-admin-delete');

 close_adjust.addEventListener('click',function(){
  modal_adjust.classList.add('invisible');
 })

 delPros.forEach((del,index) => {
  del.addEventListener('click',function(){
    deleteProduct(index);
    deleteModal(index);
    reload();
  })

    del.addEventListener('click',function(event){
      event.stopPropagation();
    })

 });
 adjusts.forEach((adjust,index) => {
  adjust.addEventListener('click',function(){
    console.log('đã click adjust');
    modal_adjust.classList.remove('invisible');
    updateProduct(index);
    updateModal(index);
  })
  adjust.addEventListener('click',function(event){
    event.stopPropagation();
  })
});
 
//  var input = document.querySelector('.SoLuong');
 
 // Add an event listener to each DOM element
 productElements.forEach((productElement,index) => {
   productElement.addEventListener('click', (e) => {

 
   // Remove the invisible class from the modal
   modalElements[index].classList.remove('invisible');
 
   // Get the image url of the clicked product
   const imageURL = e.target.closest('.pro').getAttribute('data-img');
 
   // Set the image url of the modal image
   modalImage.src = imageURL;
   });
  });
  // modalElements.forEach((modalElement,index) => {
  //     var close=document.querySelector('.close');
  //     var container=document.querySelector('.modal-container');
  //     function closeB(){
  //       modalElement.classList.add('invisible');
  //     }
  //     close.addEventListener('click',closeB);
  //     modalElement.addEventListener('click',closeB);
  //     container.addEventListener('click',function(event){
  //       event.stopPropagation();
  //     })
  // });
  modalElements.forEach((modalElement, index) => {
    var close = modalElement.querySelector('.close');
    var container = modalElement.querySelector('.modal-container');
  
    function closeB() {
      modalElement.classList.add('invisible');
    }
  
    close.addEventListener('click', closeB);
    modalElement.addEventListener('click', closeB);
    container.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });

 // KẾT THÚC MỞ MODAL và ĐÓNG MODAL
//  chỉnh sửa và xóa pro
const modal = document.querySelector(".modal-del");
const co = document.querySelector(".modal-del .co");
const khong = document.querySelector(".modal-del .khong");

function showModal() {
  modal.classList.remove('invisible');
}
delAll.addEventListener('click',showModal);

co.addEventListener("click", function() {
  localStorage.clear();
  reload();
});

khong.addEventListener("click", function() {
  // Hủy lệnh
  modal.classList.add('invisible');
});
});



// KẾT THÚC



