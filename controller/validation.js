function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            getID(spanID).innerHTML = message;
            getID(spanID).style.display = "block";
            return false;
        }

        getID(spanID).innerHTML = "";
        getID(spanID).style.display = "none";
        return true;
    }
    this.checkID = function (spanID, message) {
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
    }
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (value.match(pattern)) {

            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";

            return true;
        }

        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";

        return false;
    }
    this.checkPassword = function (value, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/
        if (value.match(pattern)) {

            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";

            return true;
        }

        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";

        return false;
    }
    this.checkPasswordConfirm = function (value1,value2,spanID, message){
        if(value1 != value2) {
           getID(spanID).innerHTML = message
           getID(spanID).style.display = "block";

           return false
        }
        getID(spanID).innerHTML = "";
        getID(spanID).style.display = "none";
        return true
    }   
    this.checkPhone = function (value, spanID, message) {
        var pattern = /^[0-9]+$/;
        if (value.match(pattern) && value.length >= 9 && value.length <= 10) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;
    }
    this.checkName = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            getID(spanID).innerHTML = "";
            getID(spanID).style.display = "none";
            return true;
        }
        getID(spanID).innerHTML = message;
        getID(spanID).style.display = "block";
        return false;

    }
}