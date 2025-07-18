function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function sunnySunday(date) {
    let y = date.getFullYear();
    let m = date.getMonth(); // 0-based
    let d = date.getDate();

    // Количество полных лет до y
    let days = 0;
    for (let i = 1; i < y; i++) days += isLeap(i) ? 366 : 365;

    // Количество полных месяцев в текущем году
    const months = [31, isLeap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < m; i++) days += months[i];

    // И дни в текущем месяце, начиная с 1 января как day=1
    days += d - 1;

    return weekDays[days % 6];
}



// console.log(sunnySunday(new Date('0001-01-01'))); // Monday
// console.log(sunnySunday(new Date('0001-01-07'))); // Monday
// console.log(sunnySunday(new Date('1664-08-09'))); // Saturday
// console.log(sunnySunday(new Date('2020-01-01'))); // Monday
