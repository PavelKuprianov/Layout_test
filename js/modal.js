const modalButton = document.querySelectorAll('.equipment__list_item-btn')
const modal = document.querySelector('.modal')
const wrap = document.querySelector('.modal-wrapper')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')



modalButton.forEach((link) => {
  link.addEventListener('click', (e) => {

    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';

    wrap.style.backgroundImage = `url(./img/${e.currentTarget.id}.jpg)`
    modal.classList.toggle('hidden')
  })
})


overlay.addEventListener('click', () => {
  modal.classList.toggle('hidden')
  document.body.style.height = '';
  document.body.style.overflowY = '';
})

closeButton.addEventListener('click', () => {
  modal.classList.toggle('hidden')
  document.body.style.height = '';
  document.body.style.overflowY = '';
})