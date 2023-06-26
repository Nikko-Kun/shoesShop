const validation = new Validation();



const checkValid = () => {
    let email = document.getElementById("emailSignUp").value;
    let name = document.getElementById("nameSignUp").value;
    let phone = document.getElementById("phoneSignUp").value;
    let password = document.getElementById("passwordSignUp").value;
    let confirmPassword = document.getElementById("passwordConfirmSignUp").value;
    let gender = true;
    // let gender = document.getElementById("genderSignUp").value;

  
    let isValid = true;

    isValid &=
    validation.checkEmpty(email, "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.") &&
    validation.checkEmail(
      email,
      "spanEmail",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format."
    );
  isValid &=
    validation.checkEmpty(name, "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.") &&
    validation.checkName(
      name,
      "spanName",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format."
    );
  isValid &=
    validation.checkEmpty(phone, "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.") &&
    validation.checkPhone(
      phone,
      "spanPhone",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long."
    );
  isValid &=
    validation.checkEmpty(password, "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.") &&
    validation.checkPassword(
      password,
      "spanPass",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long."
    );
  isValid &=
    validation.checkEmpty(
      confirmPassword,
      "spanPassConfirm",
      "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again."
    ) &&
    validation.checkConfirmPassword(
      password,
      confirmPassword,
      "spanPassConfirm",
      "Password and confirm password must be the same. Please try again"
    );

    userArray=[];


  // isValid &= validation.checkRadioIsChecked();


if (isValid) {
 
    const account = {
      email: email,
      password: password,
      name: name,
      gender: gender,
      phone: phone,
    };

    axios({
      method: "post",
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      data: account,
    })
      .then(function (result) {
        let storagedAccount={
          email: email,
          name: name
        };
        userArray.push(storagedAccount);
        localStorage.setItem("userArray", JSON.stringify(userArray));
        alert(result.data.message);
        resetForm();
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }
};

document.getElementById("register").addEventListener("click", (event) => {
    event.preventDefault();
    checkValid();
  });
  
  function resetForm() {
    document.getElementById("formRegister").reset();
  }