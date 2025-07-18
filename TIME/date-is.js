function isValid(date) {
    // валидный Date-объект
    if (date instanceof Date) return !isNaN(date);
    // валидный таймштамп — конечное число
    if (typeof date === "number") return isFinite(date);
    return false;
}

function toTime(date) {
    if (!isValid(date)) return NaN;
    if (date instanceof Date) return date.getTime();
    if (typeof date === "number") return date;
    return NaN;
}

function isAfter(a, b) {
    return isValid(a) && isValid(b) && toTime(a) > toTime(b);
}

function isBefore(a, b) {
    return isValid(a) && isValid(b) && toTime(a) < toTime(b);
}

function isFuture(date) {
    return isValid(date) && toTime(date) > Date.now();
}

function isPast(date) {
    return isValid(date) && toTime(date) < Date.now();
}
