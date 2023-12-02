let header = document.querySelector('.header'),
    inputSearch = document.querySelector('.search-box input'),
    faArrowLeft = document.querySelector('.fa-arrow-left'),
    files = document.querySelector('#files'),
    chatBox = document.querySelector('#chatBox'),
    msg = document.querySelector('#Msg');

inputSearch.addEventListener('focus', () => {
    header.classList.add('focus');
    files.classList.add('active');
});

faArrowLeft.addEventListener('click', () => {
    header.classList.remove('focus');
    files.classList.remove('active');
});

msg.addEventListener('click', () => {
    chatBox.classList.add('active');
});