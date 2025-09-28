'use strict'

const menu = document.getElementById('menu')
const burger = document.querySelector('.burger__img')
const burgerCheck = document.getElementById('nav-burger')
const modalMenu = document.querySelector('.modal-menu ')
const aboutBtn = document.querySelectorAll('.about-btn')
const gallery = document.querySelector('.gallery-wrapper')
const galleryBtn = document.querySelector('.gallery-btn')

const galleryImages = ['dop1', 'dop2', 'dop3', 'dop4']

menu.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('a.menu__link');
    if (!clickedLink) return;

    document.querySelectorAll('#menu .dot').forEach(dot => {
        dot.classList.remove('active');
    });

    const dot = clickedLink.querySelector('.dot');
    if(dot) dot.classList.add('active');
})

burgerCheck.addEventListener('change', () => {
  modalMenu.classList.toggle('none', !burgerCheck.checked);
});

aboutBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const clickedBtn = event.target
        const parentDiv = clickedBtn.closest('div')
        const paragraph = parentDiv.querySelector('.more-text')
        
        paragraph.classList.toggle('none')
        paragraph.classList.contains('none') 
            ? clickedBtn.textContent = 'MORE DETAILS'
            : clickedBtn.textContent = 'CLOSE'
    })
})

galleryBtn.addEventListener('click', () => {
    galleryImages.forEach(image => {
        addImage(image, gallery)
    })
})

function addImage (img, block) {
    const element = `
        <div class="swiper-slide gallery__item">
            <img src="./assets/img/gallery/${img}.jpg" alt="${img}">
        </div>
    `
    block.insertAdjacentHTML('beforeend', element)
}