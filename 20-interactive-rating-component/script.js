// MAKING THE PAGE INTERACTIVE

// Declaring Variables

const button = document.querySelectorAll('.btn');
const btn_submit = document.querySelector('.btn-submit');
const indexContainer = document.querySelector('.container');
const cardContainer = document.querySelector('.container-2');
// const answer = document.querySelector('.answer');
const answer = document.getElementById('answer');


// Adding Functionality

btn_submit.addEventListener('click', () => {
    indexContainer.style.display = 'none';
    cardContainer.classList.remove('hidden');
})


button.forEach((num) => {
    num.addEventListener('click', () => {
        answer.innerHTML = num.innerHTML;
    })
})
