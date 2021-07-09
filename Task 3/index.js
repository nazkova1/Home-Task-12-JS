const wrapperEl = document.querySelector('.wrapper');

function promptUrlInput(event) {
   if(event.target.classList.contains('container')) {
        const imgUrl = prompt('Enter adress');
        if(imgUrl) {
            event.target.style.backgroundImage = 'url(' + imgUrl + ')';
        }
    }
}
wrapperEl.addEventListener('click', promptUrlInput);
