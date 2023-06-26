const validation = new Validation();

function register() {
  var name = getID("nameSignUp").value;
  var gender = getID("genderSignUp").value;
  var email = getID("emailSignUp").value;
  var password = getID("passwordSignUp").value;
  var passwordConfirm = getID("passwordConfirmSignUp").value;
  var phone = getID("phoneSignUp").value;

  var isValid = true;

  //! Check Name
  isValid &=
    validation.checkEmpty(
      name,
      "spanName",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name."
    ) && validation.checkName(name, "spanName", "Incorrect name format.");

  //! Check Gender
  isValid &= validation.checkEmpty(
    gender,
    "spanGender",
    "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please choose your gender."
  );

  //! Check Email
  isValid &=
    validation.checkEmpty(
      email,
      "spanEmail",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address."
    ) &&
    validation.checkEmail(
      email,
      "spanEmail",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format."
    );

  //! Check Pass
  isValid &=
    validation.checkEmpty(
      password,
      "spanPass",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password."
    ) &&
    validation.checkPassword(
      password,
      "spanPass",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long."
    );

  //! Check Pass Confirm
  isValid &= validation.checkPasswordConfirm(
    password,
    passwordConfirm,
    "spanPassConfirm",
    "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again."
  );

  //! Check Phone
  isValid &=
    validation.checkEmpty(
      phone,
      "spanPhone",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone."
    ) &&
    validation.checkPhone(
      phone,
      "spanPhone",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long."
    );

  if (isValid) {
    taiKhoan = [];

    var user = {
      name: name,
      gender: gender,
      email: email,
      password: password,
      phone: phone,
    };

    axios({
      method: "post",
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      data: user,
    })
      .then(function (result) {
        var taiKhoanStorage = {
          name: name,
          gender: gender,
          email: email,
          password: password,
          phone: phone,
        };
        taiKhoan.push(taiKhoanStorage);
        localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
        alert(result.data.message);
        resetForm();
        window.location.href = "./login.html";
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

getID("register").addEventListener("click", (e) => {
  e.preventDefault();
  register();
});

function resetForm() {
  getID("nameSignUp").value = "";
  getID("spanName").style.display = "none";
  getID("genderSignUp").value = "true";
  getID("spanGender").style.display = "none";
  getID("emailSignUp").value = "";
  getID("spanEmail").style.display = "none";
  getID("passwordSignUp").value = "";
  getID("spanPass").style.display = "none";
  getID("passwordConfirmSignUp").value = "";
  getID("spanPassConfirm").style.display = "none";
  getID("phoneSignUp").value = "";
  getID("spanPhone").style.display = "none"; 
}
