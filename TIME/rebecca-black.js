function isFriday(date) {
    return date instanceof Date && !isNaN(date) && date.getDay() === 5;
}

function isWeekend(date) {
    return date instanceof Date && !isNaN(date) && (date.getDay() === 0 || date.getDay() === 6);
}

function isLeapYear(date) {
    if (!(date instanceof Date) || isNaN(date)) return false;
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    if (!(date instanceof Date) || isNaN(date)) return false;
    // Если завтра — 1-е число месяца, то сегодня последний день месяца
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).getDate() === 1;
}
