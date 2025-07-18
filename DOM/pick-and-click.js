export function pick() {
  // Создаём и размещаем все элементы интерфейса
  // 1. Центральный div для hsl значения
  let hslDiv = document.createElement('div')
  hslDiv.className = 'hsl text'
  hslDiv.style.position = 'fixed'
  hslDiv.style.top = '50%'
  hslDiv.style.left = '50%'
  hslDiv.style.transform = 'translate(-50%, -50%)'
  document.body.appendChild(hslDiv)

  // 2. div для hue в правом верхнем углу
  let hueDiv = document.createElement('div')
  hueDiv.className = 'hue text'
  document.body.appendChild(hueDiv)

  // 3. div для luminosity в левом нижнем углу
  let lumDiv = document.createElement('div')
  lumDiv.className = 'luminosity text'
  document.body.appendChild(lumDiv)

  // 4. SVG-кресты
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', '100vw')
  svg.setAttribute('height', '100vh')
  svg.style.position = 'fixed'
  svg.style.top = '0'
  svg.style.left = '0'
  svg.style.pointerEvents = 'none'
  document.body.appendChild(svg)

  // Горизонтальная ось
  let axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  axisX.id = 'axisX'
  axisX.setAttribute('y1', '0')
  axisX.setAttribute('y2', window.innerHeight)
  axisX.setAttribute('x1', '0')
  axisX.setAttribute('x2', '0')
  svg.appendChild(axisX)

  // Вертикальная ось
  let axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  axisY.id = 'axisY'
  axisY.setAttribute('x1', '0')
  axisY.setAttribute('x2', window.innerWidth)
  axisY.setAttribute('y1', '0')
  axisY.setAttribute('y2', '0')
  svg.appendChild(axisY)

  function update(e) {
    // Получаем ширину и высоту окна
    const w = window.innerWidth
    const h = window.innerHeight

    // Получаем координаты мыши
    const x = e.clientX
    const y = e.clientY

    // Высчитываем значения hue (x), luminosity (y)
    const hue = Math.round((x / w) * 360)
    const lum = Math.round((y / h) * 100)
    const hsl = `hsl(${hue}, 50%, ${lum}%)`

    // Меняем фон body
    document.body.style.background = hsl

    // Меняем значения в div-ах
    hslDiv.textContent = hsl
    hueDiv.textContent = `hue: ${hue}`
    lumDiv.textContent = `luminosity: ${lum}`

    // Двигаем оси SVG
    axisX.setAttribute('x1', x)
    axisX.setAttribute('x2', x)
    axisY.setAttribute('y1', y)
    axisY.setAttribute('y2', y)
  }

  // Обновлять всё при движении мыши
  document.addEventListener('mousemove', update)

  // Клик — скопировать hsl в буфер обмена
  document.addEventListener('click', () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(hslDiv.textContent)
    } else {
      // Для старых браузеров (fallback)
      const temp = document.createElement('textarea')
      temp.value = hslDiv.textContent
      document.body.appendChild(temp)
      temp.select()
      document.execCommand('copy')
      temp.remove()
    }
  })

  // Сразу обновить (центр экрана)
  const fakeEvent = {clientX: window.innerWidth/2, clientY: window.innerHeight/2}
  update(fakeEvent)
}
