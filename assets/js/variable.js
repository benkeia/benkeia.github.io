

if (window.innerWidth > 768 && !('ontouchstart' in window || navigator.maxTouchPoints > 0)) {

const headings = document.querySelectorAll('.variable')

const easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1))
  return Math.sin((clampX * Math.PI) / 2)
}

headings.forEach((heading) => {
  heading.innerHTML = heading.innerHTML
    .split('')
    .map((letter) => {
      return `<span>${letter}</span>`
    })
    .join('')

  const spans = heading.querySelectorAll('span')

  document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX
    const mouseY = event.clientY

    spans.forEach((span) => {
      const bounds = span.getBoundingClientRect()
      const spanX = bounds.left + bounds.width / 2
      const spanY = bounds.top + bounds.height / 2

      const diffX = mouseX - spanX
      const diffY = mouseY - spanY

      const distance = Math.sqrt(diffX * diffX + diffY * diffY)

      const normalizedDistance = distance / 200

      const weight = 900 - 800 * easing(normalizedDistance)

      span.style.fontVariationSettings = `'wght' ${weight}`
      
    })
  })
})


}