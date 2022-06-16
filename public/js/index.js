const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    window.location = card.dataset.articleUri
  })
})