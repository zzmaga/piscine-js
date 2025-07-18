function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Дней в каждом месяце (индекс 0 — январь)
function getMonths(year) {
    return [31, isLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

// Количество дней с 01-01-0001 по 01-01-year
function daysSinceEpoch(year) {
    let days = 0;
    for (let y = 1; y < year; y++) {
        days += isLeap(y) ? 366 : 365;
    }
    return days;
}

// Перевод номера дня года в (день, месяц)
function dayOfYearToDate(year, dayOfYear) {
    let months = getMonths(year);
    let month = 0;
    while (dayOfYear > months[month]) {
        dayOfYear -= months[month];
        month++;
    }
    // month+1, потому что индексация с 0
    return [dayOfYear, month + 1];
}

// Главная функция
function firstDayWeek(week, yearStr) {
    let year = Number(yearStr);
    week = Number(week);

    // Дни с 01-01-0001 до 01-01-year
    let daysToJan1 = daysSinceEpoch(year);
    // День недели для 1 января этого года (0=Пн,...,6=Вс)
    let jan1WeekDay = daysToJan1 % 7;

    // Смещение к предыдущему (или этому) понедельнику — начало 1-й недели
    let firstMondayShift = (jan1WeekDay === 0) ? 0 : -jan1WeekDay;
    let firstMondayDayOfYear = 1 + firstMondayShift;

    // Первый день нужной недели (может быть < 1, если неделя начинается в прошлом году)
    let dayOfYear = firstMondayDayOfYear + 7 * (week - 1);

    // Если день < 1 — вернуть 01-01-года (по условию)
    if (dayOfYear < 1) dayOfYear = 1;

    // Перевести день года в (день, месяц)
    let [day, month] = dayOfYearToDate(year, dayOfYear);

    // Форматировать ответ
    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${String(year).padStart(4, '0')}`;
}

// console.log(firstDayWeek(1, '1000')) // '01-01-1000'
// console.log(firstDayWeek(52, '1000'))  // '22-12-1000'
// console.log(firstDayWeek(2, '0001'))  // '08-01-0001'
// console.log(firstDayWeek(43, '1983'))  // '17-10-1983'
// console.log(firstDayWeek(23, '0091'))  // '04-06-0091'
// console.log(firstDayWeek(2, '2017'))  // '02-01-2017'
