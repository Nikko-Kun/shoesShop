const cartData = [];

function logIn() {
  var email = getID("loginEmail").value;
  var password = getID("loginPass").value;

  var user = {
    email: email,
    password: password,
  };

  axios({
    method: "post",
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    data: user,
  })
    .then(function (result) {
      const logInfo = result.data.content;      
      localStorage.setItem("cartData" + "." + email, JSON.stringify([]));
      localStorage.setItem("logInfo",JSON.stringify(logInfo));

      alert(result.data.message);
      window.location.href = "../index.html";

     
      return cartData.push(logInfo);
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}

getID("btnSignIn").onclick = logIn;

