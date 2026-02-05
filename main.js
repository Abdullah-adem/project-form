// all elements
const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const password = document.querySelector("#password");
const confimpassword = document.querySelector("#confimpassword");
const form = document.querySelector("#form");

const showError = (input,message)=>{
let parentElement= input.parentElement;
parentElement.classList = 'form-control error';
const small = parentElement.querySelector("small")
const successIcon=parentElement.querySelectorAll("i")[0];
const errorIcon=parentElement.querySelectorAll("i")[1];
errorIcon.style.visibility ='visible';
successIcon.style.visibility ='hidden';
small.innerText = message;
}

const showSuccess = (input)=>{
let parentElement= input.parentElement;
parentElement.classList = 'form-control success';
// const small = parentElement.querySelector("small")
const successIcon=parentElement.querySelectorAll("i")[0];
const errorIcon=parentElement.querySelectorAll("i")[1];
errorIcon.style.visibility ='hidden';
successIcon.style.visibility ='visible';
// small.innerText = message;
}
const checkEmpty=(elements)=>{
elements.forEach(element => {
    if(element.value ===''){
        showError(element,'input required')
    }else{
       showSuccess(element);
    } 
});
}

const checkEmail = (Email)=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(Email.value)){
        showSuccess(Email);
    }else {
        showError(Email,'invalid email');
    }
}

const checkPasswordLength =(input,min,max)=>{
    if(input.value.length<min){
        showError(input, `password at last  charcter ${min}`);
    } else if (input.value.length >max){
        showError(input,`password maximum charcter is ${max}`);
    }
}

form.addEventListener('submit',(event)=>{
event.preventDefault();
checkEmpty([username, Email, password,confimpassword]);
checkEmail(Email);
checkPasswordLength(password, 6,10);
checkPasswordLength(confimpassword, 6,10);

});





// if (username.value === ''){
//     username.parentElement.classList = 'form-control error';
// }
// if (Email.value === ''){
//     Email.parentElement.classList = 'form-control error';
// }
// if (password.value === ''){
//     password.parentElement.classList = 'form-control error';
// }
// if (confimpassword.value === ''){
//     confimpassword.parentElement.classList = 'form-control error';
// }



