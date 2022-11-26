const shareBtn = document.querySelector(".footer__share-block")
const popup = document.querySelector(".popup")

shareBtn.addEventListener('click', (e) => {
   e.preventDefault()
   popup.classList.toggle("popup__active")
})