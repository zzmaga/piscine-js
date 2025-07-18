export async function series(fns) {
  const results = []
  for (const fn of fns) {
    results.push(await fn())
  }
  return results
}
