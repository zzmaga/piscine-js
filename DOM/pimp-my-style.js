import { styles } from './pimp-my-style.data.js'

let state = 0
const max = styles.length

export function pimp() {
  const btn = document.querySelector('.button')

  // 1. Добавляем стили, пока не набрали все
  if (state < max) {
    btn.classList.remove('unpimp')
    btn.classList.add(styles[state])
    state++
    if (state === max) {
      btn.classList.add('unpimp')
    }
  }
  // 2. Удаляем стили в обратном порядке, пока не останется только .button
  else if (state < 2 * max) {
    // удаляем последний из добавленных стилей
    btn.classList.remove(styles[max - (state - max) - 1])
    state++
    // если убрали все стили (только button + unpimp осталось), убираем unpimp и сбрасываем state
    if (state === 2 * max) {
      btn.classList.remove('unpimp')
      state = 0
    }
  }
}
