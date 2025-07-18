function addWeek(date) {
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
  ];
  
  const epoch = new Date('0001-01-01');
  const diffTime = date.getTime() - epoch.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const dayIndex = diffDays % 14;
  
  return days[dayIndex < 0 ? dayIndex + 14 : dayIndex];
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date);
  newDate.setHours(hour, minute, second, 0);
  return newDate;
}