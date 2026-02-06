const loveMessage = document.getElementById('loveMessage')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const result = document.getElementById('result')
const resultGif = document.getElementById('resultGif')

// initial positions inside container
const container = document.querySelector('.container')
const containerRect = container.getBoundingClientRect()

noBtn.style.left = 'calc(50% + 50px)' // offset from center
noBtn.style.top = '200px'

// 💖 YES CLICK
yesBtn.addEventListener('click', () => {
  resultGif.src = 'assets/images/yes.gif'
  result.classList.remove('hidden')

  yesBtn.style.display = 'none'
  noBtn.style.display = 'none'

  startHearts()
})

// 😈 NO BUTTON CLICK SHOW GIF
noBtn.addEventListener('click', () => {
  resultGif.src = 'assets/images/no.gif'
  result.classList.remove('hidden')
})

// 😎 NO BUTTON DODGES CURSOR (inside container)
container.addEventListener('mousemove', (e) => {
  const btnRect = noBtn.getBoundingClientRect()
  const mouseX = e.clientX
  const mouseY = e.clientY

  const dx = mouseX - (btnRect.left + btnRect.width / 2)
  const dy = mouseY - (btnRect.top + btnRect.height / 2)
  const distance = Math.sqrt(dx*dx + dy*dy)

  if(distance < 120){
    let moveX = (dx / distance) * -50
    let moveY = (dy / distance) * -50

    let newLeft = noBtn.offsetLeft + moveX
    let newTop = noBtn.offsetTop + moveY

    // keep inside container
    const maxLeft = container.clientWidth - noBtn.offsetWidth
    const maxTop = container.clientHeight - noBtn.offsetHeight
    newLeft = Math.min(Math.max(newLeft, 0), maxLeft)
    newTop = Math.min(Math.max(newTop, 0), maxTop)

    noBtn.style.left = `${newLeft}px`
    noBtn.style.top = `${newTop}px`
  }
})

// 💕 FLOATING HEARTS
function startHearts() {
  setInterval(() => {
    const heart = document.createElement('div')
    heart.classList.add('heart')

    // random horizontal position
    heart.style.left = Math.random() * (window.innerWidth - 100) + 'px'

    // random scale for cute variation
    const scale = Math.random() * 0.6 + 0.4
    heart.style.transform = `scale(${scale})`

    document.body.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 4000)
  }, 250)
}



yesBtn.addEventListener('click', () => {
  yesBtn.style.display = 'none'
  noBtn.style.display = 'none'

  resultGif.src = 'assets/images/yes.gif'
  result.classList.remove('hidden')

  startHearts()

  // Show love message after a short delay
  setTimeout(() => {
    loveMessage.classList.remove('hidden')
    loveMessage.classList.add('show')
  }, 800)
})