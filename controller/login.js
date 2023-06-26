const signIn = () => {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPass").value;
  
    let account = {
      email: email,
      password: password,
    };
  
    axios({
      method: "post",
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      data: account,
    })
      .then(function (result) {
        alert(result.data.message);
        localStorage.setItem("token", JSON.stringify(result.data.content.accessToken));
        window.location = "/index.html";
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };
  

  document.getElementById("btnSignIn").addEventListener("click", (event) => {
    event.preventDefault();
    signIn();
  });
  
  