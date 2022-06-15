const li = document.querySelectorAll('li')

console.log(li)

li.forEach((article) => {
  article.addEventListener('click', (e) => {
    console.log(e.target)
    // window.location = e.target.dataset.article-uri
  })
})