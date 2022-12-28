const openModal = document.querySelector('.login');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

const openModalRegistro = document.querySelector('.modal__btn__registro');
const modalRegistro = document.querySelector('.modal__registro');
const closeModalRegistro = document.querySelector('.modal__close_Registro');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

openModalRegistro.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRegistro.classList.add('modal__registro--show');
})

closeModalRegistro.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRegistro.classList.remove('modal__registro--show');
});