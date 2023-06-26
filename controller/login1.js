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
      var tk = result.data.content;
      localStorage.setItem("token", JSON.stringify(tk.accessToken));
          
      alert(result.data.message);
      window.location.href = "../index.html";     

    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}

getID("btnSignIn").onclick = logIn;


