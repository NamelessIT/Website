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

    const Huy=document.createElement('h5');
    Huy.classList.add('HUY');
    Huy.textContent='Xóa';
  
    this.CHART_BOX.appendChild(this.element);
    this.element.appendChild(chartImage);
    this.element.appendChild(ChartTsp);
    this.element.appendChild(ChartSoLuong);
    this.element.appendChild(ChartDuong);
    this.element.appendChild(ChartDa);
    this.element.appendChild(ChartSize);
    this.element.appendChild(ChartTopping);
    this.element.appendChild(ChartTien);
    this.element.appendChild(Huy);
    }
  }

function getCharts(){
    const charts=JSON.parse(localStorage.getItem('charts')||'[]');
    return charts;
}
function deleteChart(position) {
    const charts = getCharts();

  // Kiểm tra vị trí xóa có hợp lệ hay không
  if (position < 0 || position >= charts.length) {
    return;
  }

  // Xóa sản phẩm khỏi danh sách tại vị trí được truyền vào
  charts.splice(position, 1);

  // Lưu lại danh sách các sản phẩm đã cập nhật vào local storage
  localStorage.setItem('charts', JSON.stringify(charts));
}
function reload() {
    // Tải lại trang
    location.reload();
  }
const CHART_BOX=document.getElementById("CHART_SHOW");

// load lên window
window.addEventListener('load', function() {
const charts=getCharts();
for(const chart of charts){
  const newChart = new Pro_Chart(CHART_BOX, chart.img, chart.tensp, "SL:"+chart.soluong,"Đường:"+chart.duong,"Đá:"+chart.da,"Size:"+chart.size,"Topping:"+chart.topping, "TONG:"+chart.thanhtien);
}
const chartElements=Array.from(document.querySelectorAll('.chart'));

const delButtons=document.querySelectorAll('.HUY');
delButtons.forEach((delButton,index) => {
    delButton.addEventListener('click',function(){
        deleteChart(index);
        reload();
    })
});
});