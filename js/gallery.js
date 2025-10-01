
const gallery = document.querySelector('.gallery-wrapper')
const galleryBtn = document.querySelector('.gallery-btn')
const galleryImages = ['dop1', 'dop2', 'dop3', 'dop4']

const galleryBtnState = {
    isAdded: false
}

function addImage(img, block) {
    const element = `
        <div class="swiper-slide gallery__item none" data-role="more">
            <img src="./assets/img/gallery/${img}.jpg" alt="${img}">
        </div>
    `
    block.insertAdjacentHTML('beforeend', element)
}

function addImagesInGallery () {
    const allImages = [...gallery.querySelectorAll('[data-role="more"]')]
    allImages.forEach(el => el.classList.remove('none'))
    galleryBtnState.isAdded = true
    galleryBtn.textContent = 'CLOSE'
}

function removeImagesFromGallery() {
    const allImages = [...gallery.querySelectorAll('[data-role="more"]')]
    allImages.forEach(el => el.classList.add('none'))
    galleryBtnState.isAdded = false
    galleryBtn.textContent = 'SEE MORE'
}

function initGallery() {
    window.addEventListener('DOMContentLoaded', () => {
        galleryImages.forEach(image => {
            addImage(image, gallery)
        })    
    })

    galleryBtn.addEventListener('click', () => {
        if (!galleryBtnState.isAdded){
            addImagesInGallery ()
        } else {
            removeImagesFromGallery()
        }
    })
}

export { initGallery }
