// 1. Cities Only
function citiesOnly(arr) {
  return arr.map(obj => obj.city);
}

// 2. Upper Casing States
function upperCasingStates(arr) {
  return arr.map(str =>
    str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}

// 3. Fahrenheit to Celsius
function fahrenheitToCelsius(arr) {
  return arr.map(tempStr => {
    const fahrenheit = parseInt(tempStr, 10);
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
    return celsius + '°C';
  });
}

// 4. Trim Temp
function trimTemp(arr) {
  return arr.map(obj => ({
    ...obj,
    temperature: obj.temperature.replace(/\s+/g, '').replace(/°F/i, '°F')
  }));
}

// 5. Temp Forecasts
function tempForecasts(arr) {
  return arr.map(obj => {
    // Убираем все пробелы из температуры и парсим число
    const fahrenheit = parseInt(obj.temperature.replace(/\s+/g, ''), 10);
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);

    // Капитализация всех слов в штате
    const state = obj.state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return `${celsius}°Celsius in ${obj.city}, ${state}`;
  });
}

// const states = [
//   { city: 'Los Angeles', temperature: '101 °F', state: 'california', region: 'West' },
//   { city: 'San Francisco', temperature: '84 °F', state: 'california', region: 'West' },
//   { city: 'Miami', temperature: ' 112 °F', state: 'Florida', region: 'South' },
//   { city: 'New York City', temperature: ' 0 °F', state: 'new york', region: 'North East' },
//   { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
//   { city: 'Boston', temperature: '45 °F', state: 'massachussetts', region: 'North East' },
//   { city: 'Jackson', temperature: ' 70°F  ', state: 'mississippi', region: 'South' },
//   { city: 'Utqiagvik', temperature: ' -1 °F', state: 'Alaska', region: 'West' },
//   { city: 'Albuquerque', temperature: ' 95 °F', state: 'new mexico', region: 'West' },
// ];

// function tempForecasts(arr) {
//   return arr.map(obj => {
//     const fahrenheit = parseInt(obj.temperature.replace(/\s+/g, ''), 10);
//     const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
//     const state = obj.state
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//     return `${celsius}°Celsius in ${obj.city}, ${state}`;
//   });
// }

// console.log(tempForecasts(states));
