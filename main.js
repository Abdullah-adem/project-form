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
parentElement.classList = 'form-control error';
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

form.addEventListener('submit',(event)=>{
event.preventDefault();
checkEmpty([username, Email, password,confimpassword]);

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



