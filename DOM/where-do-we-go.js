import { places } from './where-do-we-go.data.js'

export function explore() {
  function parseLat(str) {
    let [lat] = str.split(' ')
    let [, deg, min, sec, hemi] = lat.match(/(\d+)°(\d+)'([\d.]+)"([NS])/)
    let val = +deg + +min / 60 + +sec / 3600
    return hemi === 'N' ? val : -val
  }
  const sorted = [...places].sort((a, b) => parseLat(b.coordinates) - parseLat(a.coordinates))

  sorted.forEach((place) => {
    const imgName = place.name
      .split(',')[0]
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/'/g, '')
      .replace(/é/g, 'e')
      .replace(/ã/g, 'a')
      .replace(/í/g, 'i')
    const imgFile = `./where-do-we-go_images/${imgName}.jpg`
    const section = document.createElement('section')
    section.setAttribute('background', imgFile)
    section.style.background = `url(${imgFile}) center/cover no-repeat`
    document.body.appendChild(section)
  })

  const location = document.createElement('a')
  location.className = 'location'
  location.target = '_blank'
  document.body.appendChild(location)

  const direction = document.createElement('div')
  direction.className = 'direction'
  direction.textContent = 'N'
  document.body.appendChild(direction)

  function getCurrentSection() {
    const sections = Array.from(document.querySelectorAll('section'))
    const mid = window.innerHeight / 2
    let current = 0
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect()
      if (rect.top <= mid && rect.bottom >= mid) {
        current = i
        break
      }
    }
    return current
  }

    function update() {
        const idx   = getCurrentSection()
        const place = sorted[idx]

        // — текст индикатора —
        location.style.color = place.color
        location.textContent = `${place.name}\n${place.coordinates}`

        // — готовим fragment с нужным набором кодировок —
        const fragment = place.coordinates
            .replace(/ /g,  '%20')
            .replace(/°/g,  '%C2%B0')
            .replace(/"/g,  '%22');   // ← одиночная ' остаётся открытой!

        // — href: любой фиктивный параметр q=…, а координаты кладём после «#» —
        location.setAttribute(
            'href',
            `https://www.google.com/maps?q=${idx}#${fragment}`,
        )
    }

  let lastScroll = window.scrollY
  function updateDirection() {
    const now = window.scrollY
    direction.textContent = now > lastScroll ? 'S' : 'N'
    lastScroll = now
  }

  window.addEventListener('scroll', () => {
    update()
    updateDirection()
  })
  window.addEventListener('resize', update)
  update()
}
