// show menu
const showMenu=(toggleId,navId)=>{
const toggleMenu=document.getElementById(toggleId);
const nav=document.getElementById(navId);
toggleMenu.addEventListener('click',()=>{
    nav.classList.toggle('show-menu');
    toggleMenu.classList.toggle('show-icon');
})
}
showMenu('nav-toggle','nav-menu')
