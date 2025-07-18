function format(date, fmt) {
    const jsYear = date.getFullYear()
    const absYear = Math.abs(jsYear)
    const G_era = jsYear >= 1 ? 'AD' : 'BC'
    const GGGG_era = jsYear >= 1 ? 'Anno Domini' : 'Before Christ'
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const H = date.getHours()
    const h = H % 12 || 12

    const map = {
        y: String(absYear),
        yyyy: String(absYear).padStart(4, '0'),
        G: G_era,
        GGGG: GGGG_era,
        M: String(date.getMonth() + 1),
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        MMM: monthsShort[date.getMonth()],
        MMMM: monthsLong[date.getMonth()],
        d: String(date.getDate()),
        dd: String(date.getDate()).padStart(2, '0'),
        E: daysShort[date.getDay()],
        EEEE: daysLong[date.getDay()],
        h: String(h),
        hh: String(h).padStart(2, '0'),
        m: String(date.getMinutes()),
        mm: String(date.getMinutes()).padStart(2, '0'),
        s: String(date.getSeconds()),
        ss: String(date.getSeconds()).padStart(2, '0'),
        H: String(H),
        HH: String(H).padStart(2, '0'),
        a: H < 12 ? 'AM' : 'PM',
    }

    // if (fmt === 'y' || fmt === 'yyyy' || fmt.includes('G')) {
    //     console.log('[DEBUG] jsYear:', jsYear, '| absYear:', absYear, '| date:', date)
    // }
    return fmt.replace(/yyyy|GGGG|MMMM|MMM|MM|dd|EEEE|EEE|hh|mm|ss|HH|GG|G|M|d|E|h|m|s|H|a|y/g, match => map[match] || match)
}


// const eclipse = new Date(-585, 4, 28)
// console.log(format(eclipse, 'y'))   // '585'
// console.log(format(eclipse, 'yyyy')) // '0585'
// console.log(format(eclipse, 'yyyy G')) // '0585 BC'
