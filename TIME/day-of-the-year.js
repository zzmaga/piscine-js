function dayOfTheYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // Массив дней в каждом месяце
    const daysInMonth = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28,
                         31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Суммируем все полные месяцы + текущий день
    return daysInMonth.slice(0, month).reduce((a, b) => a + b, 0) + day;
}
