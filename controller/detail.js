window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("detail");

  xemChiTietSP(myParam);
};

function xemChiTietSP(idSP) {
  axios({
    method: "get",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idSP}`,
  })
    .then(function (result) {
      //thành công
      // console.log(result.data.content);
      var divChiTiet = document.getElementsByClassName("detailPro__content")[0];
      var hinh = divChiTiet.querySelector(".detailPro__left img");
      hinh.src= result.data.content.image;
      var tag = divChiTiet.querySelector(".detailPro__left img");
      tag.alt = result.data.content.alias;
      var h1 = divChiTiet.getElementsByTagName("h1")[0];
      h1.innerHTML = result.data.content.name;
      var sold = divChiTiet.getElementsByTagName("b")[0];
      sold.innerHTML = result.data.content.quantity;
      var h3 = divChiTiet.getElementsByTagName("h3")[0];
      h3.innerHTML = "$" + result.data.content.price;    
      var p = divChiTiet.getElementsByTagName('p')[0];
      p.innerHTML = result.data.content.description;
       
      hienThiRelateSP(result.data.content.relatedProducts);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function hienThiRelateSP(mang) {
  var content = "";
  var boxSP = document.getElementById("listShoes");
  mang.map(function (sp, index) {
    content += `<div class="col-4 mt-4 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
    <div class="card">
      <img src="${sp.image}" class="card-img-top" alt="${sp.alias}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">
          <span>
            ${sp.name}
          </span>
          <i class="fa-sharp fa-regular fa-heart like-icon"></i>
        </h5>
        <p class="card-text">${sp.shortDescription}</p>
        <a href="./detail.html?detail=${sp.id}" onclick="xemChiTietSP('${sp.id}')" class="btn btn-warning btn-buy">Buy Now</a>
        <i class="fa-solid fa-tag price-tag"></i>  ${sp.price}$
      </div>
    </div>
  </div>`;
  });
  boxSP.innerHTML = content;    
}

