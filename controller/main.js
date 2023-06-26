
const getID = (id) => {
  return document.getElementById(id)
}

const getValue = (id) => {
  return getID(id).value
}

function getAllProduct() {
  axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product",
  })
    .then(function (result) {
      renderListProduct(result.data.content);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getAllProduct();

const renderListProduct = (listProduct) => {
  const productBox = document.getElementById("cybershoes-product-content");
  const content = listProduct.map((product) => {
    const { image, name, price, id ,description} = product;
    return `<div class="col-4 mt-4 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
    <div class="card">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between">
          <span>
            ${name}
          </span>
          <i class="fa-sharp fa-regular fa-heart like-icon"></i>
        </h5>
        <div class="card-rate mb-3">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p class="card-text">${description}</p>
        <a href="./view/detail.html?productid=${id}" onclick="xemChiTietSP('${id}')" class="btn btn-warning btn-buy">Buy Now</a>
        <i class="fa-solid fa-tag price-tag"></i>  ${price}$
      </div>
    </div>
  </div>`;
  });
  productBox.innerHTML = content.join(""); 
}


