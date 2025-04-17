const svg = document.querySelector('svg.squiggle')
const path = svg.querySelector('path')

const scroll = () => {
  if (window.innerWidth > 768) { // Vérifie si la largeur de la fenêtre est supérieure à 768px
    const distance = window.scrollY
    const totalDistance = svg.clientHeight - window.innerHeight

    const percentage = distance / totalDistance

    const pathLength = path.getTotalLength()

    path.style.strokeDasharray = `${pathLength}`
    path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`
  }
  else {
    path.style.display = "none"
  }
}

scroll()
window.addEventListener('scroll', scroll)