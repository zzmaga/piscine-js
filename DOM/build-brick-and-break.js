let interval;

function ensureTower() {
  if (!document.getElementById('tower')) {
    const tower = document.createElement('div');
    tower.id = 'tower';
    document.body.appendChild(tower);
  }
}

export const build = n => {
  ensureTower();
  const tower = document.getElementById('tower');
  let i = 0;
  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    if (i >= n) {
      clearInterval(interval);
      return;
    }
    const brick = document.createElement('div');
    brick.id = `brick-${i + 1}`;
    // Добавляем в DOM подряд!
    tower.appendChild(brick);
    // Кидаем атрибут для середины
    if ((i % 3) === 1) brick.setAttribute('data-foundation', 'true');
    // Можно добавить кастомный data-col, если надо
    i++;
  }, 100);
};

export const repair = (...ids) => {
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    // По позиции определяем колонку: (brick id - 1) % 3 === 1 → middle
    const num = Number(id.replace('brick-', '')) - 1;
    if (num % 3 === 1) {
      el.setAttribute('data-repaired', 'in progress');
    } else {
      el.setAttribute('data-repaired', 'true');
    }
  }
};

export const destroy = () => {
  const tower = document.getElementById('tower');
  if (tower && tower.lastElementChild) tower.lastElementChild.remove();
};
