burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})