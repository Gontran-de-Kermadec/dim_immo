const btn = document.querySelector('.enter');
const bgImg = document.querySelector('.bg_img');
btn.addEventListener('click', () => {
    bgImg.classList.add('fadeout')
    // bgImg.style.display = 'none';
})
