// Search
const search = () => {
  const searchbox = document.getElementById("search-box").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".pro");
  const pname = storeitems.querySelectorAll(".product-name");

  for (var i = 0; i < pname.length; i++) {
    let match = pname[i];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

// Filter theo san pham

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".pro");
  elements.forEach((element) => {
    if (value == "All") {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}
window.onload = () => {
  filterProduct("all");
};
