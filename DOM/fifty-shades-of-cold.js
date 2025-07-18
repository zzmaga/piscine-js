import { colors } from './fifty-shades-of-cold.data.js'

// 1. Создать <style> с классами по цветам
export function generateClasses() {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.id = 'cold-shades-style'
  style.textContent = colors.map(color => `.${color}{background:${color};}`).join('\n')
  document.head.appendChild(style)
}

// 2. Создать <div> для холодных цветов
export function generateColdShades() {
  // Подстроки для "cold" цветов
  const substrs = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
  const isCold = color =>
    substrs.some(sub => color.toLowerCase().includes(sub))

  colors.forEach(color => {
    if (isCold(color)) {
      const div = document.createElement('div')
      div.className = color
      div.textContent = color
      document.body.appendChild(div)
    }
  })
}

// 3. Сделать все div одного цвета по клику
export function choseShade(shade) {
  const divs = document.querySelectorAll('div')
  divs.forEach(div => {
    // Меняем все классы на выбранный
    div.className = shade
  })
}
