const phoneInput = document.getElementById('phone');
const dateInput = document.getElementById('date');
const pwInput = document.getElementById('password');
const pwReInput = document.getElementById('pwCheck');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const signupBtn = document.getElementById('btn_signup');
const idCheckBtn = document.getElementById('email_input_check');
const loginInput = document.getElementsByClassName('container')[0];

function emailCheck() {
    var hasAt = emailInput.value.indexOf('@');
    return hasAt !== -1 ? true : false;
}

function pwCheck() {
    var num = pwInput.value.search(/[0-9]/g);
    var eng = pwInput.value.search(/[a-z]/g);
    var bigEng = pwInput.value.search(/[A-Z]/g);
    var spe = pwInput.value.search(/[~!@#$%^&*()_+:";',./<>?|\\]/gi);
    var len = pwInput.value.length
    if (num >= 0 && eng >= 0 && bigEng >= 0 && spe >= 0 && len >= 8 && len <= 16){
        return true
    }
    else {
        return false
    }
}

function pwCheck() {
    return pwInput.value.length >= 5 ? true : false;
}

function pwReCheck() {
    return pwReInput.value == pwInput.value ? true : false;
}

function phoneCheck() {
    return phoneInput.value.length >= 5 ? true : false;
}

function nameCheck() {
    return nameInput.value.length >= 1 ? true : false;
}

function dateCheck() {
    return dateInput.value.length >= 1 ? true : false;
}

loginInput.addEventListener('keyup', function(event) {

    const completedInput = (emailCheck() && pwCheck() && phoneCheck() && nameCheck() && dateCheck() && pwReCheck());
    signupBtn.disabled = completedInput ? false : true;

    if (pwCheck()) {
        document.getElementById("passwordError").innerHTML=""
    }
    else {
        document.getElementById("passwordError").innerHTML="* 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
    }
    if (pwReCheck()) {
        document.getElementById("passwordCheckError").innerHTML=""
    }
    else {
        document.getElementById("passwordCheckError").innerHTML="* 비밀번호가 일치하지 않습니다."
    }
})
