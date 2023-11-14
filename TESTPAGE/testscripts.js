

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

    const addToCartButton = document.createElement('button');
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
//SẼ CÓ THÊM CHI TIẾT CHO MODAL LÀM XONG SAU KHI LÀM XONG CART
class Modal {
  constructor(MODAL,img, name,price,check,Duong,Da,Size,Topping) {
    this.MODAL=MODAL;
    this.img = img;
    this.name = name;
    this.price=price;
    this.check=Number(check);
    this.Duong=Duong;
    this.Da=Da;
    this.Size=Size;
    this.Topping=Topping;

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
    const modalImage = document.createElement('img');
    modalImage.src = img;
    imgDiv.appendChild(modalImage);

    const propertiesDiv = document.createElement('div');
    propertiesDiv.classList.add('properties');
    const nameH2 = document.createElement('h2');
    nameH2.classList.add('TenSP');
    nameH2.style.marginBottom = '15px';
    nameH2.style.color = 'red';
    nameH2.style.textAlign='center';
    nameH2.textContent = name;
    const priceH4 = document.createElement('h4');
    priceH4.style.margin = '5px';
    priceH4.textContent = price;
    const quantityH4 = document.createElement('h4');
    quantityH4.style.margin = '8px 5px';
    quantityH4.textContent = 'Số lượng:';
    const quantityInput = document.createElement('input');
    quantityInput.id='SoLuongMua';
    quantityInput.type = 'number';
    quantityInput.pattern = '[1-9]+';
    quantityInput.style.display='inline';
    // input checkbox
    // box Đường
    const boxDuong = document.createElement('div');
    boxDuong.classList.add('Duong');
    boxDuong.classList.add('boxDuong');


    const ChuDuong=document.createElement('h4');
    ChuDuong.classList.add('ChuDuong');
    ChuDuong.textContent='Đường: ';

    const checkboxIt = document.createElement('input');
    checkboxIt.type = 'checkbox';
    checkboxIt.name = 'checkbox';
    checkboxIt.value = 'ít';
    checkboxIt.parent = boxDuong;
    checkboxIt.classList.add('Duong');

    const ChuVua=document.createElement('h4');
    ChuVua.classList.add('Chu');
    ChuVua.textContent='Vừa';

    
    const checkboxVua = document.createElement('input');
    checkboxVua.type = 'checkbox';
    checkboxVua.name = 'checkbox';
    checkboxVua.value = 'vừa';
    checkboxVua.parent = boxDuong;
    checkboxVua.classList.add('Duong');

    const ChuIt=document.createElement('h4');
    ChuIt.classList.add('Chu');
    ChuIt.textContent='Ít';
    
    // Sự kiện change
    checkboxIt.addEventListener('change', () => {
      // Kiểm tra xem checkbox nào đang được chọn
      if (checkboxIt.checked) {
        // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
        this.Duong=checkboxIt.value;
        checkboxVua.checked = false;
      
      }
    });
    
    checkboxVua.addEventListener('change', () => {
      // Kiểm tra xem checkbox nào đang được chọn
      if (checkboxVua.checked) {
        // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
        this.Duong=checkboxVua.value;
        checkboxIt.checked = false;
      }
    });

    // box Đá
    const boxDa = document.createElement('div');
    boxDa.classList.add('Duong');
    boxDa.classList.add('boxDa');

    const ChuDa=document.createElement('h4');
    ChuDa.classList.add('ChuDuong');
    ChuDa.textContent='Đá: ';

    const checkboxKhongDa = document.createElement('input');
    checkboxKhongDa.type = 'checkbox';
    checkboxKhongDa.name = 'checkbox';
    checkboxKhongDa.value = 'Không';
    checkboxKhongDa.parent = boxDa;
    checkboxKhongDa.classList.add('Da');

    const ChuKhongDa=document.createElement('h4');
    ChuKhongDa.classList.add('Chu');
    ChuKhongDa.textContent='Không';

    
    const checkboxItDa = document.createElement('input');
    checkboxItDa.type = 'checkbox';
    checkboxItDa.name = 'checkbox';
    checkboxItDa.value = 'Ít';
    checkboxItDa.parent = boxDa;
    checkboxItDa.classList.add('Da');

    const ChuItDa=document.createElement('h4');
    ChuItDa.classList.add('Chu');
    ChuItDa.textContent='Ít';

    const checkboxNhieuDa = document.createElement('input');
    checkboxNhieuDa.type = 'checkbox';
    checkboxNhieuDa.name = 'checkbox';
    checkboxNhieuDa.value = 'Nhiều';
    checkboxNhieuDa.parent = boxDa;
    checkboxNhieuDa.classList.add('Da');

    const ChuNhieuDa=document.createElement('h4');
    ChuNhieuDa.classList.add('Chu');
    ChuNhieuDa.textContent='Nhiều';
    
    // Sự kiện change
    checkboxKhongDa.addEventListener('change', () => {
      // Kiểm tra xem checkbox nào đang được chọn
      if (checkboxKhongDa.checked) {
        // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
        this.Da=checkboxKhongDa.value;
        checkboxItDa.checked = false;
        checkboxNhieuDa.checked=false;

      }
    });
    
    checkboxItDa.addEventListener('change', () => {
      // Kiểm tra xem checkbox nào đang được chọn
      if (checkboxItDa.checked) {
        // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
        this.Da=checkboxItDa.value;
        checkboxKhongDa.checked = false;
        checkboxNhieuDa.checked=false;


      }
    });
    checkboxNhieuDa.addEventListener('change', () => {
      // Kiểm tra xem checkbox nào đang được chọn
      if (checkboxNhieuDa.checked) {
        // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
        this.Da=checkboxNhieuDa.value;
        checkboxKhongDa.checked = false;
        checkboxItDa.checked=false;

      }
    });

// SIZE

const boxSize = document.createElement('div');
boxSize.classList.add('Duong');
boxSize.classList.add('boxSize');

const ChuSize=document.createElement('h4');
ChuSize.classList.add('ChuDuong');
ChuSize.textContent='Size: ';

const checkboxSizeM = document.createElement('input');
checkboxSizeM.type = 'checkbox';
checkboxSizeM.name = 'checkbox';
checkboxSizeM.value = 'Size M';
checkboxSizeM.parent = boxSize;
checkboxSizeM.classList.add('Size');

const ChuM=document.createElement('h4');
ChuM.classList.add('Chu');
ChuM.textContent='M';


const checkboxSizeX= document.createElement('input');
checkboxSizeX.type = 'checkbox';
checkboxSizeX.name = 'checkbox';
checkboxSizeX.value = 'Size X';
checkboxSizeX.parent = boxSize;
checkboxSizeX.classList.add('Size');

const ChuX=document.createElement('h4');
ChuX.classList.add('Chu');
ChuX.textContent='X';

const checkboxSizeXL = document.createElement('input');
checkboxSizeXL.type = 'checkbox';
checkboxSizeXL.name = 'checkbox';
checkboxSizeXL.value = 'Size XL';
checkboxSizeXL.parent = boxSize;
checkboxSizeXL.classList.add('Size');

const ChuXL=document.createElement('h4');
ChuXL.classList.add('Chu');
ChuXL.textContent='XL';

// Sự kiện change
checkboxSizeM.addEventListener('change', () => {
  // Kiểm tra xem checkbox nào đang được chọn
  if (checkboxSizeM.checked) {
    // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
    this.Size=checkboxSizeM.value;
    checkboxSizeX.checked = false;
    checkboxSizeXL.checked=false;

  }
});

checkboxSizeX.addEventListener('change', () => {
  // Kiểm tra xem checkbox nào đang được chọn
  if (checkboxSizeX.checked) {
    // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
    this.Size=checkboxSizeX.value;
    checkboxSizeM.checked = false;
    checkboxSizeXL.checked=false;

  }
});
checkboxSizeXL.addEventListener('change', () => {
  // Kiểm tra xem checkbox nào đang được chọn
  if (checkboxSizeXL.checked) {
    // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
    this.Size=checkboxSizeXL.value;
    checkboxSizeM.checked = false;
    checkboxSizeX.checked=false;

  }
});

// TOPPING
const boxTopping = document.createElement('div');
boxTopping.classList.add('Duong');
boxTopping.classList.add('boxTopping');

const ChuTopping=document.createElement('h4');
ChuTopping.classList.add('ChuDuong');
ChuTopping.textContent='Topping: ';

const checkboxChanTrau = document.createElement('input');
checkboxChanTrau.type = 'checkbox';
checkboxChanTrau.name = 'checkbox';
checkboxChanTrau.value = 'Trân Châu';
checkboxChanTrau.parent = boxTopping;
checkboxChanTrau.classList.add('Topping');

const ChuChanTrau=document.createElement('h5');
ChuChanTrau.classList.add('Chu');
ChuChanTrau.textContent='Chân Trâu';


const checkboxRauCau= document.createElement('input');
checkboxRauCau.type = 'checkbox';
checkboxRauCau.name = 'checkbox';
checkboxRauCau.value = 'Râu Câu';
checkboxRauCau.parent = boxTopping;
checkboxRauCau.classList.add('Topping');

const ChuRauCau=document.createElement('h5');
ChuRauCau.classList.add('Chu');
ChuRauCau.textContent='Râu Câu';

const checkboxPhoMai = document.createElement('input');
checkboxPhoMai.type = 'checkbox';
checkboxPhoMai.name = 'checkbox';
checkboxPhoMai.value = 'Phô Mai';
checkboxPhoMai.parent = boxTopping;
checkboxPhoMai.classList.add('Topping');

const ChuPhoMai=document.createElement('h5');
ChuPhoMai.classList.add('Chu');
ChuPhoMai.textContent='Phô Mai';

// Sự kiện change
checkboxRauCau.addEventListener('change', () => {
  // Kiểm tra xem checkbox nào đang được chọn
  if (checkboxRauCau.checked) {
    // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
    this.Topping=checkboxRauCau.value;
    checkboxChanTrau.checked = false;
    checkboxPhoMai.checked=false;

  }
});

checkboxChanTrau.addEventListener('change', () => {
  // Kiểm tra xem checkbox nào đang được chọn
  if (checkboxChanTrau.checked) {
    // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
    this.Topping=checkboxChanTrau.value;
    checkboxRauCau.checked = false;
    checkboxPhoMai.checked=false;

  }
});
checkboxPhoMai.addEventListener('change', () => {
  // Kiểm tra xem checkbox nào đang được chọn
  if (checkboxPhoMai.checked) {
    // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
    this.Topping=checkboxPhoMai.value;
    checkboxChanTrau.checked = false;
    checkboxRauCau.checked=false;

  }
});



    
// hết input checkbox;
    const buyButton = document.createElement('button');
    buyButton.classList.add('Mua');
    buyButton.innerHTML = '<i class="fa fa-shopping-cart cart"></i>MUA';

    
    propertiesDiv.appendChild(nameH2);
    propertiesDiv.appendChild(priceH4);
    propertiesDiv.appendChild(quantityH4);
    propertiesDiv.appendChild(quantityInput);
    propertiesDiv.appendChild(boxDuong);
    propertiesDiv.appendChild(boxDa);
    propertiesDiv.appendChild(boxSize);
    propertiesDiv.appendChild(boxTopping);
    propertiesDiv.appendChild(buyButton);
    quantityH4.appendChild(quantityInput);

    boxDuong.appendChild(ChuDuong);
    ChuDuong.appendChild(ChuIt);
    ChuIt.appendChild(checkboxIt);
    ChuDuong.appendChild(ChuVua);
    ChuVua.appendChild(checkboxVua);

    boxDa.appendChild(ChuDa);
    ChuDa.appendChild(ChuKhongDa);
    ChuDa.appendChild(ChuItDa);
    ChuDa.appendChild(ChuNhieuDa);
    ChuKhongDa.appendChild(checkboxKhongDa);
    ChuItDa.appendChild(checkboxItDa);
    ChuNhieuDa.appendChild(checkboxNhieuDa);

    boxSize.appendChild(ChuSize);
    ChuSize.appendChild(ChuM);
    ChuSize.appendChild(ChuX);
    ChuSize.appendChild(ChuXL);
    ChuM.appendChild(checkboxSizeM);
    ChuX.appendChild(checkboxSizeX);
    ChuXL.appendChild(checkboxSizeXL);

    boxTopping.appendChild(ChuTopping);
    ChuTopping.appendChild(ChuChanTrau);
    ChuTopping.appendChild(ChuRauCau);
    ChuTopping.appendChild(ChuPhoMai);
    ChuChanTrau.appendChild(checkboxChanTrau);
    ChuPhoMai.appendChild(checkboxPhoMai);
    ChuRauCau.appendChild(checkboxRauCau);

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

// Cart
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
  ChartDuong.classList.add('invisible');
  ChartDuong.textContent=duong;

  const ChartDa=document.createElement('h5');
  ChartDa.classList.add('ChartDa');
  ChartDa.classList.add('invisible');
  ChartDa.textContent=da;

  const ChartSize=document.createElement('h5');
  ChartSize.classList.add('ChartSize');
  ChartSize.classList.add('invisible');
  ChartSize.textContent=size;

  const ChartTopping=document.createElement('h5');
  ChartTopping.classList.add('ChartTopping');
  ChartTopping.classList.add('invisible');
  ChartTopping.textContent=topping;

  const ChartTien=document.createElement('h5');
  ChartTien.classList.add('ChartTien');
  ChartTien.textContent=thanhtien;

  this.CHART_BOX.appendChild(this.element);
  this.element.appendChild(chartImage);
  this.element.appendChild(ChartTsp);
  this.element.appendChild(ChartSoLuong);
  this.element.appendChild(ChartTien);
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
const CHART_BOX=document.getElementById("CHART_SHOW");


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
function saveChart(Pro_Chart){
  const ma = document.getElementById('MaSanPham').value;
    if(ma.length!==4){
    return;
  }
  else{
    const charts=JSON.parse(localStorage.getItem('charts') || '[]');
    charts.push(Pro_Chart);
    localStorage.setItem('charts',JSON.stringify(charts));
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
function getCharts(){
  const charts=JSON.parse(localStorage.getItem('charts')||'[]');
  return charts;
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
  if(productImage.src===''){
    productImage.src='img/white.png';
  }
  // const newmodal = new Modal(MODAL,productImage.src, tenSanPham,giaBan);
  const newPro = new Pro(proContainer, productImage.src,ma, tieude, tenSanPham, giaBan); 
  

  // Lưu trữ thông tin của sản phẩm mới vào local storage. ở dạng String
  saveProduct(newPro);
  // saveModal(newmodal);
  reload();
  // Đóng modal.
  // newmodal.classList.add('invisible');

  // Xóa giá trị của các input.
  document.getElementById('MaSanPham').value = 0;
  document.getElementById('TIEUDE').value = '';
  document.getElementById('TenSanPham').value = '';
  document.getElementById('GiaBan').value = 0;

  // Reset hình ảnh của modal.
  modalImage_admin.src = 'img/add.png';
  
};
// Tải lại trang
function reload() {
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



var modal_adjust=document.querySelector('.modal-ADJUST'); //khai báo biến cho hàm UpdateProducts

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
      if (newMa.length !== 4) {
        // Hiển thị thông báo lỗi
        alert('Vui lòng nhập mã sản phẩm có 4 chữ số!');
    
        // Đặt lại giá trị của mã sản phẩm
        document.getElementById('MaSanPham-SUA').value = '';
    
        // Không thực hiện các hành động tiếp theo
        return false;
      }
      const newTieude = document.getElementById('TIEUDE-SUA').value;
      const newName = document.getElementById('TenSanPham-SUA').value;
      const newPrice = document.getElementById('GiaBan-SUA').value;
      if(productImage.src===''){
        productImage.src='img/white.png';
      }
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

// biến xét load window với modal


function updateModal(index) {
  // localStorage.removeItem('modals');
  const products = getProducts();
  const myObject = products[index];
  const image = myObject.img;
  const tensp = myObject.name;
  const gia = myObject.price;
  // Chuyển đổi chuỗi JSON thành mảng các đối tượng
  const modals = getModals();
  if(modals.length===1){
    const newModal=modals.splice(0,1)[0];
    newModal.img=image;
    newModal.name=tensp;
    newModal.price=gia;
    newModal.check=1;
    modals.push(newModal);
    localStorage.setItem('modals',JSON.stringify(modals));
    reload();
  }
  else{
      newModal= new Modal(MODAL,image,tensp,gia,1);

      modals.push(newModal);
      localStorage.setItem('modals',JSON.stringify(modals));
      reload();
  }
}


function AddChart(index) {
  // Chuyển đổi chuỗi JSON thành mảng các đối tượng
  const products = getProducts();
  const charts = getCharts();

  // Kiểm tra vị trí hợp lệ
  // if (index >= 0 && index < products.length) {
    // Lấy đối tượng cần chỉnh sửa dựa trên vị trí
    const myObject = products[index];
    const image = myObject.img;
    const tensp = myObject.name;
    const soluong = 1;
    const gia = myObject.price;
    const duong="Ít";
    const da="Ít";
    const size="M";
    const topping="không";
    const thanhtien = soluong * gia; // tính thành tiền

    const newChart = new Pro_Chart(CHART_BOX, image, tensp, soluong,duong,da,size,topping,thanhtien); // truyền thành tiền vào
    charts.push(newChart); // Thêm chart mới vào mảng charts

    // Lưu trữ thông tin của sản phẩm mới vào local storage. ở dạng String
    localStorage.setItem('charts', JSON.stringify(charts));
    reload();
  // } else {
  //   console.log('Vị trí không hợp lệ');
  // }
}

// xóa chart
function DeleteChart(img, tensp) {
  // Chuyển đổi chuỗi JSON thành mảng các đối tượng
  const charts = getCharts();

  // Tìm kiếm sản phẩm cần xóa
  const index = charts.findIndex((chart) => chart.img === img && chart.tensp === tensp);

  // Nếu tìm thấy sản phẩm cần xóa
  if (index !== -1) {
    // Xóa sản phẩm khỏi mảng charts
    charts.splice(index, 1);

    // Lưu trữ thông tin của sản phẩm mới vào local storage. ở dạng String
    localStorage.setItem('charts', JSON.stringify(charts));
    reload();
  } else {
    console.log('Không tìm thấy sản phẩm cần xóa');
  }
}







// Khi trang được tải, lấy thông tin của sản phẩm từ local storage và hiển thị chúng trên trang.
window.addEventListener('load', function() {
    const products = getProducts();
    const modals=getModals();
    const charts=getCharts();

  // tất cả các products được load lên từ local storage dưới dạng text lên window
    for (const pro of products) {
      const newPro = new Pro(proContainer, pro.img," #" +pro.ma, pro.tieude, pro.name, pro.price+"đ");
    }
    for(const modal of modals){
      const newmodal=new Modal(MODAL,modal.img,modal.name,"Giá: "+modal.price,modal.check);
    }
    for(const chart of charts){
      const newChart = new Pro_Chart(CHART_BOX, chart.img, chart.tensp, "SL:"+chart.soluong,chart.duong,chart.da,chart.size,chart.topping, "TONG:"+chart.thanhtien);
    }
  // tạo 1 list pro và modal dưới dạng js



    const productElements = Array.from(document.querySelectorAll('.pro'));
    const modalElements=Array.from(document.querySelectorAll('.modal'));
    const chartElements=Array.from(document.querySelectorAll('.chart'));
//  tạo list dạng nodediv

  // các biến và hàm cho sản phẩm
  openModal();
 
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
    DeleteChart(products[index].img,products[index].name);
    reload();
  })

    del.addEventListener('click',function(event){
      event.stopPropagation();
    })

 });
 adjusts.forEach((adjust,index) => {
  adjust.addEventListener('click',function(){
    modal_adjust.classList.remove('invisible');
    updateProduct(index);
  })
  adjust.addEventListener('click',function(event){
    event.stopPropagation();
  })
});
 
 var input = document.querySelector('.SoLuong');
 
//  Add an event listener to each DOM element
//  function openModal(){
//   for (const modalElement of modalElements) {
//     modalElement.classList.remove('invisible');
//   }
//  }
function openModal() {
  const modals = getModals();
  const myObject = modals[0];

  if (myObject && myObject.check === 1) {
    // Xử lý khi modal đã tồn tại và check === 1
    for (const modalElement of modalElements) {
      modalElement.classList.remove('invisible');
    }
    const newModal = modals.splice(0, 1)[0];
    newModal.check = 0;
    modals.push(newModal);
    localStorage.setItem('modals', JSON.stringify(modals));
  } else if(modals.length===0){
    // Xử lý khi không có modal hoặc check !== 1
    const newModal = new Modal(MODAL, '', '', '000000', 0, '', '', '', '');
    modals.push(newModal);
    localStorage.setItem('modals', JSON.stringify(modals));
  }
}

productElements.forEach((productElement, index) => {
  productElement.addEventListener('click', (e) => {
    // const img = document.querySelector('img');
    updateModal(index);
    modals.check=1;
  });
});

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


// giỏ hàng
var carts=document.querySelectorAll('.cart');
carts.forEach((cart,index) => {
  cart.addEventListener('click',function(){
      AddChart(index-1);
  })

    cart.addEventListener('click',function(event){
      event.stopPropagation();
    })

 });


//  var boxDuong=document.querySelector('boxDuong');
//  var boxDa=document.querySelector('boxDa');
//  var boxSize=document.querySelector('boxSize');
//  var boxTopping=document.querySelector('boxTopping')
var selectedDuongValue; // Biến để lưu giá trị checkbox được chọn
var selectedDaValue;
var selectedSizeValue;
var selectedToppingValue;
  function getDuong(){
        var checkboxesDuong = document.querySelectorAll('.Duong');
        checkboxesDuong.forEach(checkboxDuong => {
          if(checkboxDuong.checked){
            selectedDuongValue = checkboxDuong.value;
          }
        });
  }
  function getDa(){
    var checkboxesDa = document.querySelectorAll('.Da');
    checkboxesDa.forEach(checkboxDa => {
      if(checkboxDa.checked){
        selectedDaValue = checkboxDa.value;
      }
    });
  }
  function getSize(){
    var checkboxesSize = document.querySelectorAll('.Size');
    checkboxesSize.forEach(checkboxSize => {
      if(checkboxSize.checked){
        selectedSizeValue = checkboxSize.value;
      }
    });
  }
  function getTopping(){
    var checkboxesTopping = document.querySelectorAll('.Topping');
    checkboxesTopping.forEach(checkboxTopping => {
      if(checkboxTopping.checked){
        selectedToppingValue = checkboxTopping.value;
      }
    });
  }

            // constructor(container, img, ma, tieude, name, price, icon)
      // constructor(MODAL,img, name,price,check,Duong,Da,Size,Topping)
      // constructor(CHART_BOX,img,tensp,soluong,thanhtien)

 var BUY=document.querySelector('.Mua');
 BUY.addEventListener('click',function(){
    getDuong();
    getDa();
    getSize();
    getTopping();
    const soluongmua=document.getElementById('SoLuongMua').value;
    const modals=getModals();
    const modal=modals[0];
    const image=modal.img;
    const tensp=modal.name;
    const gia=modal.price;
    let thanhtien=gia*soluongmua;
    const duong=selectedDuongValue;
    const da=selectedDaValue;
    const size=selectedSizeValue;
    if(size==='Size X'){
      thanhtien=thanhtien+(gia*0.1*soluongmua);
    }
    else if(size==='Size XL'){
      thanhtien=thanhtien+(gia*0.2*soluongmua);
    }
    const topping=selectedToppingValue;
    if(topping!==''){
      thanhtien=thanhtien+(gia*0.1*soluongmua);
    }

    const newChart = new Pro_Chart(CHART_BOX, image, tensp, soluongmua,duong,da,size,topping,thanhtien); // truyền thành tiền vào
    charts.push(newChart); // Thêm chart mới vào mảng charts

    // Lưu trữ thông tin của sản phẩm mới vào local storage. ở dạng String
    localStorage.setItem('charts', JSON.stringify(charts));
    reload();
    
 })

// KẾT THÚC CỦA GIỎ HÀNG

// Bấm vào sản phẩm trên giỏ hàng
chartElements.forEach((chart, index) => {
  chart.addEventListener('click', function() {
    // Lấy giá trị img.src và TenSP của chart
    const imgSrc = chart.querySelector('img').src;
    const tenSP = chart.querySelector('.ChartTsp').textContent;

    // Tìm modal có img.src và TenSP giống với chart
    const modal = modalElements.find((modal) => {
      return modal.querySelector('img').src === imgSrc && modal.querySelector('.TenSP').textContent === tenSP;
    });

    // Xóa invisible khỏi modal
    modal.classList.remove('invisible');
  });
});

// KẾT thúc

// KẾT THÚC CỦA LOAD WINDOW


// CHI TIẾT HÓA ĐƠN
const MoChitiethoadon=document.querySelector('.CHART');
const ChitietHoadon=document.querySelector('.CHITIETHOADON');
MoChitiethoadon.addEventListener('click',function(){
  ChitietHoadon.classList.remove('invisible');
})
chartElements.forEach(cart => {
  cart.addEventListener('click',function(event){
    event.stopPropagation();
  })
});
});

