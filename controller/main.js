window.onload = function () {
  layDanhSachSP();
};

function layDanhSachSP() {
  axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product",
  })
    .then(function (result) {
      //thành công
      hienThiSP(result.data.content);
     
    })
    .catch(function (error) {
      //thất bại
      console.log(error);
    });
}

function hienThiSP(mang) {
  var content = "";
  var boxSP = document.getElementById("listShoes");
  mang.map(function (sp, index) {
    content += `<div class="col-4 mt-4 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
    <div class="card" style="width: 22rem;">
      <img src="${sp.image}" class="card-img-top" alt="${sp.alias}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">
          <span>
            ${sp.name}
          </span>
          <i class="fa-sharp fa-regular fa-heart like-icon"></i>
        </h5>
        <p class="card-text">${sp.shortDescription}</p>
        <a href="./view/detail.html?detail=${sp.id}" onclick="xemChiTietSP('${sp.id}')" class="btn btn-warning btn-buy">Buy Now</a>
        <i class="fa-solid fa-tag price-tag"></i>  ${sp.price}$
      </div>
    </div>
  </div>`;
  });
  boxSP.innerHTML = content;
}

