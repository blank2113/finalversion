

window.addEventListener('load', ()=>{
  preloader.classList.add('hide')
  if(preloader.classList.contains('hide')){
    document.body.style.overflow = 'auto';
  }
})

const headerWrapper = document.querySelector('.burger__wrapper');
const headerBurger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

headerWrapper.addEventListener('click',()=>{
    headerWrapper.classList.toggle('active')
    headerBurger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('lock')
    console.log(1);
})

const link = document.querySelectorAll('.nav-list');

link.forEach(menulink =>{
    menulink.addEventListener('click',(e)=>{
        headerWrapper.classList.remove('active')
        headerBurger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('lock')
    })
})

