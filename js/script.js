const BtnToggle = document.querySelector('.card__toggle')
const cardBar = document.getElementById('card--bar')
const cardImg = document.getElementById('card--img')
const cardCircle = document.getElementById('circle')
const cardFill = document.getElementById('card-fill')
//let imgPosition = cardImg.getBoundingClientRect().left - cardBar.getBoundingClientRect().left
let width = getComputedStyle(cardBar).width

BtnToggle.addEventListener('click', () => {
  BtnToggle.classList.toggle('card__toggle--active')
})
const Drag = () => {
  cardBar.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
  })
  cardBar.addEventListener('drag', (e) => {
    e.target.classList.add('circle--active')
  })
  cardBar.addEventListener('dragend', (e) => {
    e.target.classList.remove('circle--active')
  })
  cardBar.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  cardBar.addEventListener('drop', (e) => {
    e.preventDefault()
    let ClientRect =cardBar.getBoundingClientRect()
    let move = Math.round(e.clientX-ClientRect.left)
    cardImg.style.transform = `translateX(${move}px)`
    cardFill.style.width = `${move}px`
  })

}
window.addEventListener('DOMContentLoaded', Drag)