'use strict'
import { initGallery } from './gallery.js'
import { isValidName, isValidEmail } from './validation.js';

initGallery()

const menu = document.getElementById('menu')
const burgerCheck = document.getElementById('nav-burger')
const modalMenu = document.querySelector('.modal-menu ')
const aboutBtn = document.querySelectorAll('.about-btn')
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

function addClass (element, newClass) {
    element.classList.add(newClass)
}

function removeClassForElements (selector, className) {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.remove(className);
    });
}

function toggleModal() {
    modalMenu.classList.toggle('none', !burgerCheck.checked);
}

function showMoreText(event) {
    const clickedBtn = event.target
    const parentDiv = clickedBtn.closest('div')
    const paragraph = parentDiv.querySelector('.more-text')

    paragraph.classList.toggle('none')
    let visible = paragraph.classList.contains('none')
    toggleButtonName(visible, clickedBtn, 'MORE DETAILS', 'CLOSE')
}

function toggleButtonName (condition, button, name1, name2) {
    condition ? button.textContent = name1 : button.textContent = name2
}

menu.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('a.menu__link');
    if (!clickedLink) return;
    const dot = clickedLink.querySelector('.dot');

    removeClassForElements ('#menu .dot', 'active')
    addClass(dot, 'active')
})

burgerCheck.addEventListener('change', toggleModal);

aboutBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        showMoreText(event)
    })
})

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = form.name;
    const emailInput = form.email;

    [nameInput, emailInput].forEach(input => {
        input.classList.remove("error", "success");
    });

    let valid = isValidName(nameInput) && isValidEmail(emailInput);
    

    if (!valid) {
        message.style.color = "red";
        message.textContent = "Please check the entered data";
        return;
    }

    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
});