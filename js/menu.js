const menu = document.querySelector('#burgermenu');
const menuList = document.querySelector('#burgermenu-ul');

menu.addEventListener('click', function(){
    menuList.classList.toggle('is-active')
})