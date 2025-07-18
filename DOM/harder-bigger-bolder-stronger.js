export const generateLetters = () => {
  // Алфавит
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Количество букв
  const N = 120;
  // Контейнер (по условию, если надо — можно использовать document.body)
  const container = document.body; // или другой div, если он у них есть по id

  // Диапазон размера шрифта
  const fontMin = 11;
  const fontMax = 130;

  // Шаг изменения размера
  const step = (fontMax - fontMin) / (N - 1);

  for (let i = 0; i < N; i++) {
    const div = document.createElement('div');
    // Случайная буква
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    div.textContent = letter;

    // Вычисляем размер шрифта
    const fontSize = fontMin + step * i;
    div.style.fontSize = `${fontSize}px`;

    // Вычисляем font-weight
    if (i < N / 3) div.style.fontWeight = '300';
    else if (i < (2 * N) / 3) div.style.fontWeight = '400';
    else div.style.fontWeight = '600';

    container.appendChild(div);
  }
};
