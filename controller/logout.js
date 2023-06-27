var token = localStorage.getItem("logInfo");
var text = JSON.parse(token);
var tenUser = text.email.split("@", 1).join("");


if (typeof token === "string") {
  getID("btnLogin").className = "nav-link d-none";
  
  var cUser = getID("changeName");    
  var nEmail = document.createElement('span');
  nEmail.innerHTML = tenUser;
  cUser.parentNode.replaceChild(nEmail, cUser);  
  
  getID("btnSignIn").className = "nav-link d-none";
  getID("btnUser").className = "nav-link d-flex";
  getID("btnLogOut").className = "nav-link d-flex";
}

function logOut() {
  localStorage.removeItem("logInfo");
  getID("btnLogin").className = "nav-link d-flex";
  getID("btnSignIn").className = "nav-link d-flex";
  getID("btnUser").className = "nav-link d-none";
  getID("btnLogOut").className = "nav-link d-none";
  window.location.href = "./login.html";
}

getID("btnLogOut").onclick = logOut;
