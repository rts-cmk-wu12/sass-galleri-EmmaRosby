const menu = document.querySelector('#burgermenu-ul');
const images = document.querySelectorAll('#gallery-image');


menu.addEventListener('click', function(e){

    if(e.target.innerHTML !== 'more'){
        images.forEach(function(image){
            console.log(image.dataset.category);
            if(image.dataset.category !== e.target.innerHTML){
                image.style.display = 'none';
            }
            else{
                image.style.display = 'block';
            }
        })
    }
})