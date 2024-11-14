const btns = document.querySelectorAll('.num');
const submitBtn = document.querySelector('.btn');
const cards = document.querySelectorAll('.card');
const ratingNumber = document.getElementById('rating-num');



btns.forEach( e => {
    e.addEventListener('click', () => {    
        // Array.from(btns).every(element => element.classList.remove('active'))
        btns.forEach(element => element.classList.remove('active'))
        e.classList.toggle('active');
        let localNum = e.innerText;
        // window.num = localNum  // same as below to globalize the variable     
        globalThis.num = localNum
    })
})

submitBtn.addEventListener('click', () => {
    cards.forEach(element => element.classList.toggle('hidden'))
    ratingNumber.innerText = num
})