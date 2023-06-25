const inputs = document.querySelectorAll('input.input-sm')
const validation = new Validation();


const getID = (id) => {
  return document.getElementById(id)
}

const getValue = (id) => {
  return getID(id).value
}
const activeInput = () => {
  inputs.forEach((input) => {
      input.addEventListener('change', () => {
          if (input.value != '') {
              input.classList.add('active')
          } else {
              input.classList.remove('active')
          }
      })
  }
  )
}

activeInput()

function resetForm() {
  document.getElementById("form").reset;
  const btns = document.querySelectorAll('.input-group .input-sm')
  btns.forEach(btn => {
      btn.classList.remove('active')
  });
}

const loggedUser = JSON.parse(localStorage.getItem('userLogin'))
window.addEventListener('load', () => {

    if (loggedUser) {
        getID('userLogin').innerHTML = loggedUser.email
        getID('LoginContent').classList.add('checked')
        getID('btnLogin').disabled = true
        getID('btnLogin').style.opacity = "1"
        getID('btnLogin').style.cursor = "pointer"
    }
})
// getID('txtSearch').addEventListener('keyup', () => {
//   const inputSearch = getValue('txtSearch')
//   getID('aBTN').innerHTML = `<a href="../view/search.html?keyword=${inputSearch}" id="btnSearch" type="button" class="btn search-btn"><i class="fa fa-search"></i></a>`
// })

// getID('cartHeader').addEventListener('click',()=>{
//   if (loggedUser) {
//       window.location.href = "../view/cart.html"
//   }
//   else {
//      alert("Xin mời đăng nhập để dùng tính năng này!")
//      getID('userLogin').click()
//   }
//  })

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

// const getCategory = (idCategory) => {
//   axios({
//       method: 'get',
//       url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${idCategory}`,
//   }).then(function (result) {
//       const arrayCategory = result.data.content
//       getID('categoryText').innerHTML = idCategory.replace('_', ' ').toUpperCase()
//       showFeatureShoes(arrayCategory)
//   }).catch(function (error) {
//       getID('categoryText').innerHTML = idCategory.toUpperCase()

//   });
// }

function hienThiSP(mang) {
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
        <a href="./view/detail.html?detail=${sp.id}" onclick="xemChiTietSP('${sp.id}')" class="btn btn-warning btn-buy">Buy Now</a>
        <i class="fa-solid fa-tag price-tag"></i>  ${sp.price}$
      </div>
    </div>
  </div>`;
  });
  boxSP.innerHTML = content;
}


