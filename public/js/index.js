const cards = document.querySelectorAll('.card')
const searchIcon = document.querySelector('.search-icon')
const searchBox = document.querySelector('.search-box')

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