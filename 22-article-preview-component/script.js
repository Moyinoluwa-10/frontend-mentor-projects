// Making Pop-up Functional


// Declaring Variables

const share = document.querySelector('.share')
const pop_up = document.querySelector('.pop-up-container')
const icon = document.querySelector('.iconic')


// Adding Functionality

share.addEventListener('click', () => {

    share.classList.toggle('color')

    if (pop_up.style.display === 'block' ) {
        pop_up.style.display = 'none'
        icon.setAttribute('src', './images/icon-share.svg')
    } else {
        pop_up.style.display = 'block'
        icon.setAttribute('src', './images/icon-share2.svg')
    }
})
