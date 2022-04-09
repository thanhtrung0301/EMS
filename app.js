let menu_Items = document.querySelectorAll('.nav__mobile-item-link');

console.log(menu_Items);

menu_Items.forEach(item => {
    let menu_childItems = item.nextElementSibling;
    

    item.addEventListener('click', () => {
        menu_childItems.classList.toggle('hideMenu');

        let icon = item.querySelector('i');
        console.log(icon);
        if(icon.className = 'fas fa-arrow-down') 
            icon.setAttribute('class', 'fas fa-arrow-up');
        else if(icon.className = 'fas fa-arrow-up')
                icon.setAttribute('class', 'fas fa-arrow-down');
    })
})


let menu_secondItems = document.querySelectorAll('.nav__mobile-child-link');
menu_secondItems.forEach(item => {
    let menu_childItems = item.nextElementSibling;
    
    item.addEventListener('click', () => {
        menu_childItems.classList.toggle('hideMenu');

        let icon = item.querySelector('i');
        console.log(icon);
        if(icon.className = 'fas fa-arrow-down') 
            icon.setAttribute('class', 'fas fa-arrow-up');
        else if(icon.className = 'fas fa-arrow-up')
                icon.setAttribute('class', 'fas fa-arrow-down');
    })
})


let navbar_icon = document.querySelector('.bars-icon');
let navbar__mobile = document.querySelector('.nav__mobile');
let overlay = document.querySelector('.overlay');
navbar_icon.onclick = () => {
    navbar__mobile.classList.toggle('hideMenu');
    overlay.classList.toggle('hideMenu');
}


let gallery = document.querySelectorAll('.gallery img');
let slideShowImg = document.querySelector('.slide_show-img img');
let index = 0;

function showImage() {
    slideShowImg.src = gallery[index].src;
}

setInterval(() => {
    setTimeout(() => {
        slideShowImg.classList.toggle('fadeOut');
     }, 2000);

    index++;
    if(index === gallery.length)
        index = 0;
    showImage();
}, 4600);


setInterval(() => {
    slideShowImg.classList.toggle('fadeOut');   
}, 2000);

