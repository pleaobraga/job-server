const clone = require('clone')

let db = {}

const defaultData = {
  "0": {
    id: '0',
    timestamp: 1467166872634,
    title: '',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  }
}

function getData (token = 'jobs') {
  let data = db[token]
  if (data == null) {
    data = db = clone(defaultData)
  }
  return data
}

function get (id, token = 'jobs') {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token = 'jobs') {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

module.exports = {
  get,
  getAll
}
