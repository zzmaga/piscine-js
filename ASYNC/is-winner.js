export async function isWinner(country) {
  try {
    const info = await db.getWinner(country)
    if (info.continent !== 'Europe')
      return `${country} is not what we are looking for because of the continent`
    const res = await db.getResults(info.id)
    if (!res.length)
      return `${country} never was a winner`
    if (res.length < 3)
      return `${country} is not what we are looking for because of the number of times it was champion`
    // Собираем строку с годами и результатами
    const years = res.map(x => x.year).join(', ')
    const results = res.map(x => x.score).join(', ')
    return `${country} won the FIFA World Cup in ${years} winning by ${results}`
  } catch (e) {
    return `${country} never was a winner`
  }
}
