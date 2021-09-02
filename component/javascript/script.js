let form = document.getElementById("form");

function Form(element, error_massege, patern, text_span){
    this.element = document.getElementById(element);
    this.error_massege = error_massege;
    this.patern = patern;
    this.text_span = document.getElementById(text_span);
}

const user_name = new Form("form-username"
                            ,"username is not valid"
                            ,/^[a-zA-Z0-9_-]{5,15}$/
                            ,"span-username");

const email = new Form("form-email"
                        ,"email is not valid"
                        , /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                        ,"span-email");

const password = new Form("form-password"
                            ,"password must be at least 6 characters"
                            ,/^[a-zA-Z0-9!@#$%^&*]{6,20}$/
                            ,"span-pass");

const password_repeat = new Form("form-password-repeat"
                                   ,"password2 is required"
                                   ,/^[a-zA-Z0-9!@#$%^&*]{6,20}$/
                                   ,"span-pass-repeat");

function userName_validation(e){
    e.preventDefault();
    if(user_name.element.value === "" 
        || !user_name.patern.test(user_name.element.value)){
        user_name.text_span.innerHTML = user_name.error_massege;
        user_name.element.style.borderColor = "red";
    }
    else{
        user_name.text_span.innerHTML = "";
        user_name.element.style.borderColor = "green";
    }
}

function email_validation(e){
    e.preventDefault();
    if(email.element.value === "" 
        || !email.patern.test(email.element.value)){
        email.text_span.innerHTML = email.error_massege;
        email.element.style.borderColor = "red";
    }
    else{
        email.text_span.innerHTML = "";
        email.element.style.borderColor = "green";
    }
}

function password_validation(e){
    e.preventDefault();
    if(password.element.value === "" 
        || !password.patern.test(password.element.value)){
        password.text_span.innerHTML = password.error_massege;
        password.element.style.borderColor = "red";
    }
    else{
        password.text_span.innerHTML = "";
        password.element.style.borderColor = "green";
    }
}

function passwordRepeat_validation(e){
    e.preventDefault(); 
    if((password.element.value != password_repeat.element.value) 
        || (password_repeat.element.value === "" 
        || !password_repeat.patern.test(password_repeat.element.value))){
        password_repeat.text_span.innerHTML = password_repeat.error_massege;
        password_repeat.element.style.borderColor = "red";
    }
    else{
        password_repeat.text_span.innerHTML = "";
        password_repeat.element.style.borderColor = "green";
    }
}
 
form.addEventListener("submit",userName_validation);
user_name.element.addEventListener("blur",userName_validation);

form.addEventListener("submit",email_validation);
email.element.addEventListener("blur",email_validation);

form.addEventListener("submit",password_validation);
password.element.addEventListener("blur",password_validation);

form.addEventListener("submit",passwordRepeat_validation);
password_repeat.element.addEventListener("blur",passwordRepeat_validation);

