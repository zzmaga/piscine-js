function matchCron(cron, date) {
    const [min, hour, day, month, week] = cron.split(' ');

    // В JS Sunday=0, Monday=1 ... Saturday=6, а по cron 1=Monday, 7=Sunday
    const jsWeek = date.getDay() === 0 ? 7 : date.getDay();

    const vals = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        jsWeek
    ];

    return [min, hour, day, month, week].every((pat, i) =>
        pat === '*' || Number(pat) === vals[i]
    );
}
