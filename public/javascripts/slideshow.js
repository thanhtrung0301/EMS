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


// Slideshow auto
let count = 2;
setInterval(function() {
    console.log(count)
    document.getElementById('radio' + count).checked = true;
    count++;
    
    if(count > 8)
        count = 1;
}, 10000)