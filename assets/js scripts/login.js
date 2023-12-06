const button = document.getElementById('btn');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const emailInput = document.getElementById('emailinput');
const passwordInput = document.getElementById('passwordinput');
const input1Div =document.getElementById('input1div');
const input2Div =document.getElementById('input2div')


// local storage is left out!!!!!!!!!!!!
button.addEventListener("click", (e) => {
  e.preventDefault();
   if(emailInput.value ==='nastaranhk@gmail.com' && passwordInput.value ==='123456'){
    window.location.replace('../index.html')
   } else if(emailInput.value !=='nastaranhk@gmail.com' || passwordInput.value !=='123456'){
    input1Div.innerText='invalid email'
    input2Div.innerText='invalid password'
   } 
});
