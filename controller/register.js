const postSignUp = (InfoUser) => {
    axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: InfoUser
    }).then(function (result) {
        getID('successRegister').innerHTML = 'Successfully Registered '
        getID('successRegister').style.display = 'block'

    }).catch(function (error) {
        console.log(error)
        validation.checkID("errorEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>The email address that was used!")
    });
}

const checkValue = (id) => {

    getID(id).addEventListener('keyup', () => {
        let isValid = true
        getID('successRegister').style.display = "none"
        getID(id).classList.remove('error')
        switch (id) {
            case id = "emailSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
                    && validation.checkEmail(getValue(id), "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
                break
            case id = "passwordSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
                    && validation.checkPassword(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                break
            case id = "passwordConfirmSignUp":
                isValid &= validation.checkPasswordConfirm(getValue('passwordSignUp'),getValue(id), "spanPassConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
                if (getValue('passwordSignUp') != getValue(id)) {
                    getID(id).classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                }
                break
            case id = "nameSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
                    && validation.checkName(getValue(id), "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format.")
                break
            case id = "phoneSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
                    && validation.checkPhone(getValue(id), "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")
                break
            default:
                break;
        }
    })
    getID(id).addEventListener('focus', () => {
        getID('successRegister').style.display = "none"
        let isValid = true
        switch (id) {
            case id = "emailSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
                    && validation.checkEmail(getValue(id), "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
                break
            case id = "passwordSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
                    && validation.checkPassword(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                break
            case id = "passwordConfirmSignUp":
                isValid &= validation.checkPasswordConfirm(getValue('passwordSignUp'), getValue(id), "spanPassConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
                if (getValue('passwordSignUp') != getValue(id)) {
                    getID(id).classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                }
                break
            case id = "nameSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
                    && validation.checkName(getValue(id), "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format.")
                break
            case id = "phoneSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
                    && validation.checkPhone(getValue(id), "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")
                break
            default:
                break;
        }
    })
    getID(id).addEventListener('focusout', () => {
        let isValid = true
        getID('successRegister').style.display = "none"
        switch (id) {
            case id = "emailSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
                    && validation.checkEmail(getValue(id), "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
                if (isValid) {
                    getID(id).classList.remove('error')
                } else {
                    getID(id).classList.add('error')
                }
                break
            case id = "passwordSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
                    && validation.checkPassword(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                if (getValue(id) == '') {
                    getID(id).classList.add('error')
                }
                else if (getValue('passwordConfirmSignUp') != getValue(id)) {
                    isValid &= validation.checkPassword(getValue(id), "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
                    if (!isValid) {
                        getID(id).classList.add('error')
                    }
                    getID("passwordConfirmSignUp").classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                    getID("passwordConfirmSignUp").classList.remove('error')
                }

                break
            case id = "passwordConfirmSignUp":
                isValid &= validation.checkPasswordConfirm(getValue('passwordSignUp'), getValue(id), "spanPassConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
                if (getValue('passwordSignUp') != getValue(id)) {
                    getID(id).classList.add('error')
                } else {
                    getID(id).classList.remove('error')
                }
                break
            case id = "nameSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
                    && validation.checkName(getValue(id), "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect name format.")
                if (isValid) {
                    getID(id).classList.remove('error')
                } else {
                    getID(id).classList.add('error')
                }
                break
            case id = "phoneSignUp":
                isValid &= validation.checkEmpty(getValue(id), "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
                    && validation.checkPhone(getValue(id), "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")

                if (isValid) {
                    getID(id).classList.remove('error')
                } else {
                    getID(id).classList.add('error')
                }
                break
            default:
                break;
        }
    })
}
checkValue('emailSignUp')
checkValue('passwordSignUp')
checkValue('passwordConfirmSignUp')
checkValue('nameSignUp')
checkValue('phoneSignUp')

const signUp = () => {
    const emailUser = getValue('emailSignUp')
    const passUser = getValue('passwordSignUp')
    const passwordConfirm = getValue('passwordConfirmSignUp')
    const tenUser = getValue('nameSignUp')
    const phoneUser = getValue('phoneSignUp')
    const genderUser = getID('genderSignUp')

    let isValid = true

    isValid &= validation.checkEmpty(emailUser, "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your email address.")
        && validation.checkEmail(emailUser, "spanEmail", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect email format.")
    isValid &= validation.checkEmpty(passUser, "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your password.")
        && validation.checkPassword(passUser, "spanPass", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect password format.<br>Your password needs to:<br> + Include both lower and upper case character.<br> + Include at least one number.<br> + Be at least 6-10 character long.")
    isValid &= validation.checkPasswordConfirm(passUser, passwordConfirm, "spanPassConfirm", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please check your password again.")
    isValid &= validation.checkEmpty(tenUser, "spanName", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your name.")
        && validation.checkName(tenUser, "spanName", "Incorrect name format.")
    isValid &= validation.checkEmpty(phoneUser, "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please enter your phone.")
        && validation.checkPhone(phoneUser, "spanPhone", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Incorrect phone format.<br> + Be at least 9-10 number long.")
    isValid &= validation.checkEmpty(genderUser, "spanGender", "<i class='fa-solid fa-circle-exclamation pr-1' style='red'></i>Please choose your gender.")

    if (isValid) {
        const InfoUser = new User(emailUser, passUser, tenUser, genderUser, phoneUser)
        postSignUp(InfoUser)
        if (isValid) {
            resetForm()
        }
    }
    else {
        if (emailUser == '' && passUser == '' && tenUser == '' && phoneUser == '') {
            getID('emailSignUp').classList.add('error')
            getID('passwordSignUp').classList.add('error')
            getID('nameSignUp').classList.add('error')
            getID('phoneSignUp').classList.add('error')
        }
    }
}

getID('register').addEventListener('click', () => {
    signUp()
})