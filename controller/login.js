const checkLogin = (user, password) => {
    axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        data: {
            email: user,
            password: password
        }
    }).then(function (result) {
        const userLogin = result.data.content
        localStorage.setItem('userLogin', JSON.stringify(userLogin))
        getID('userLogin').innerHTML = userLogin.email
        getID('LoginContent').classList.add('checked')
        window.location.href = "/index.html"
    }).catch(function (error) {
        alert("Please check your email address and password.")
        location.reload()
    });
}

getID('loginEmail').addEventListener('keyup', () => {
    const tenUser = getID('loginEmail').value
    isValid = true;
    isValid &= validation.checkEmail(tenUser, "spanLoginEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>example@gmail.com")
    getID('loginEmail').classList.remove('error')

    if (isValid) {
        getID('loginEmail').classList.remove('error')
    }
})


getID('loginPass').addEventListener('keyup', () => {
    const passUser = getID('loginPass').value
    isValid = true;
    isValid &= validation.checkPassword(passUser, "spanLoginPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Example123")

    if (isValid) {
        getID('loginPass').classList.remove('error')
    }
})

getID('btnSignIn').addEventListener('click', () => {

    const user = getID('loginEmail').value
    const password = getID('loginPass').value
    isValid = true;
    isValid &= validation.checkEmpty(user, "spanLoginEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email again!")
        && validation.checkEmail(user, "spanLoginEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your email again!")
    
    isValid &= validation.checkEmpty(password, "spanLoginPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password again!")
        && validation.checkPassword(password, "spanLoginPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again!")
    if (isValid) {
        checkLogin(user, password)
        getID('btnSignIn').disabled = true
        getID('btnSignIn').style.opacity = "1"
        getID('btnSignIn').style.opacity = "1"
        getID('btnSignIn').style.cursor = "pointer"
    } else {
        if (getID('loginEmail').value == '') {
            getID('loginEmail').classList.add('error')
        } else {
            getID('loginEmail').classList.remove('error')
        }
        getID('loginEmail').classList.add('error')
    }
})


