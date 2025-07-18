export function queryServers(serverName, q) {
  return Promise.any([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`)
  ])
}

export function gougleSearch(q) {
  const servers = ['web', 'image', 'video']
  const tasks = servers.map(s => queryServers(s, q))
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(Error('timeout')), 80)
  )
  // Promise.race будет первым выброшенным либо таймаутом, либо успешным all
  return Promise.race([
    Promise.all(tasks).then(
      ([web, image, video]) => ({ web, image, video })
    ),
    timeout
  ])
}
