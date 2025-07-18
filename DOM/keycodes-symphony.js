export function compose() {
  // Функция для генерации цвета по коду клавиши
  function getColor(key) {
    // Например: используем charCode для HSL-оттенка
    const code = key.charCodeAt(0)
    const hue = ((code - 97) * 13) % 360 // чуть больше разброса
    return `hsl(${hue}, 80%, 50%)`
  }

  document.addEventListener('keydown', e => {
    // Если нажата маленькая буква a-z
    if (/^[a-z]$/.test(e.key)) {
      const note = document.createElement('div')
      note.className = 'note'
      note.textContent = e.key
      note.style.background = getColor(e.key)
      document.body.appendChild(note)
    }
    // Если Backspace — удалить последнюю ноту
    else if (e.key === 'Backspace') {
      const notes = document.querySelectorAll('.note')
      if (notes.length) notes[notes.length - 1].remove()
      // Запретить удаление текста вне нот
      e.preventDefault()
    }
    // Если Escape — удалить все ноты
    else if (e.key === 'Escape') {
      document.querySelectorAll('.note').forEach(el => el.remove())
    }
  })
}
