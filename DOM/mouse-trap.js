// 1. Создать box в центре страницы
export function setBox() {
  const box = document.createElement('div')
  box.className = 'box'
  // Центрируем через absolute + transform (безопасно для автотеста)
  box.style.position = 'absolute'
  box.style.left = '50%'
  box.style.top = '50%'
  box.style.transform = 'translate(-50%, -50%)'
  document.body.appendChild(box)
}

// 2. Создавать круг по клику в точке курсора
// Сброс на новый круг
export function createCircle() {
  document.addEventListener('click', e => {
    isTrapped = false
    const circle = document.createElement('div')
    circle.className = 'circle'
    circle.style.background = 'white'
    circle.style.left = `${e.clientX - 25}px`
    circle.style.top = `${e.clientY - 25}px`
    document.body.appendChild(circle)
  })
}

// 3. Двигать последний круг за мышью, если он не "пойман"
let isTrapped = false
export function moveCircle() {
  document.addEventListener('mousemove', e => {
    const circles = document.querySelectorAll('.circle')
    if (!circles.length) return
    const circle = circles[circles.length - 1]
    const circleRadius = 25

    const box = document.querySelector('.box')
    const boxRect = box.getBoundingClientRect()
    let x = e.clientX
    let y = e.clientY

    const minX = boxRect.left + circleRadius
    const minY = boxRect.top + circleRadius
    const maxX = boxRect.right - circleRadius
    const maxY = boxRect.bottom - circleRadius

    const insideX = x > minX && x < maxX
    const insideY = y > minY && y < maxY
    const isInside = insideX && insideY

    // Если зашли в box — теперь всегда trapped
    if (isInside || isTrapped) {
      isTrapped = true
      // Держим круг за мышью или на границе box
      let cx = x, cy = y
      if (!insideX) {
        cx = x < minX ? minX : maxX
      }
      if (!insideY) {
        cy = y < minY ? minY : maxY
      }
      circle.style.left = `${cx - circleRadius}px`
      circle.style.top = `${cy - circleRadius}px`
      circle.style.background = 'var(--purple)'
    } else {
      // Пока не пойман — свободно двигаем и белый
      circle.style.left = `${x - circleRadius}px`
      circle.style.top = `${y - circleRadius}px`
      circle.style.background = 'white'
    }
  })
}
