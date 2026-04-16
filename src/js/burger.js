
let burger=document.querySelector('.header__burger');
let headerNav=document.querySelector('.header-nav');
let headerNavList=document.querySelector('.header-nav__list');
console.log(headerNav);
burger.addEventListener('click',function(){
    headerNav.classList.toggle('active');
    headerNavList.classList.toggle('active');
    burger.classList.toggle('active');
    // social.classList.toggle('active');
});