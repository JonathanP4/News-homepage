const hamburguerMenu = document.getElementById('hamburguer-menu');
const offsetMenu = document.getElementById('offset-menu');
const closeOffsetMenu = document.querySelector('.bi-x-lg');
const bgDark = document.getElementById('dark-bg');
let width = window.innerWidth

if (width <= 734) {
  hamburguerMenu.classList.remove('inactive')
}

window.addEventListener('resize', getWindowWidth => {
  width = window.innerWidth
  if (width <= 734) {
    hamburguerMenu.classList.remove('inactive')
  } else {
    hamburguerMenu.classList.add('inactive')
    offsetMenu.classList.add('inactive')
    bgDark.classList.add('inactive')
  }
})

hamburguerMenu.addEventListener('click', showOffsetMenu => {
  offsetMenu.style.animationName = 'offset'
  offsetMenu.classList.remove('inactive')
  bgDark.classList.remove('inactive')
})

closeOffsetMenu.addEventListener('click', hideOffsetMenu => {
  offsetMenu.style.animationName = 'offsetClose'
  bgDark.classList.add('inactive')

  offsetMenu.addEventListener('animationend', closedOffsetMenu => {
    offsetMenu.classList.add('inactive')

    offsetMenu.addEventListener('animationend', closedOffsetMenu => {
      offsetMenu.classList.remove('inactive')
    })
  })
})


