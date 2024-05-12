let signUpBtn =document.querySelector('.signupbtn');
let signInBtn =document.querySelector('.signinbtn');
let nameField =document.querySelector('.namefield');
let title =document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');
signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='0';
    title.innerHTML ='sign In';
    text.innerHTML ='Forget possword';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight ='60px';
    title.innerHTML ='sign In';
    text.innerHTML ='password suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';

});
