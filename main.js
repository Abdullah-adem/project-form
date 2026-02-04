// all elements
const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const password = document.querySelector("#password");
const confimpassword = document.querySelector("#confimpassword");
const form = document.querySelector("#form");

form.addEventListener('submit',(event)=>{
event.preventDefault();

if (username.value === ''){
    username.parentElement.classList = 'form-control error';
}


if (Email.value === ''){
    Email.parentElement.classList = 'form-control error';
}


if (password.value === ''){
    password.parentElement.classList = 'form-control error';
}


if (confimpassword.value === ''){
    confimpassword.parentElement.classList = 'form-control error';
}

});




