let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let main = document.querySelector('main');

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    main.classList.toggle('dark')
})