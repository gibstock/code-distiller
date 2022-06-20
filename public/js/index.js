const cards = document.querySelectorAll('.card')
const searchIcon = document.querySelector('.search-icon')
const searchBox = document.querySelector('.search-box')
const socialButtons = document.querySelectorAll('.follow-circle')
const subscibeBtn = document.querySelector('.subscribe')
const subscribeForm = document.getElementById('subscribe-form')
const closeBtn = document.querySelector('.close-button')

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    window.location = card.dataset.articleUri
  })
})

searchIcon.addEventListener('click', ()=>{
  const form = searchBox.querySelector('form')
  searchBox.style.display = 'block'
  form.querySelector('input').focus()

})
searchIcon.addEventListener('touchstart', ()=>{
  const form = searchBox.querySelector('form')
  searchBox.style.display = 'block'
  form.querySelector('input').focus()

})

socialButtons.forEach((button) => {
  button.addEventListener('click', ()=> {
    window.open(button.dataset.uri, '_blank')
  })
})

subscibeBtn.addEventListener('click', () => {
  subscribeForm.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  subscribeForm.style.display = 'none'
})
subscibeBtn.addEventListener('touchstart', () => {
  subscribeForm.style.display = 'flex'
})

closeBtn.addEventListener('touchstart', () => {
  subscribeForm.style.display = 'none'
})