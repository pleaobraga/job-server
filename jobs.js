const clone = require('clone')

let db = {}

const defaultData = {
  "0": {
    id: '0',
    date: 1467166872634,
    title: 'Front-end Developer (m/f) with focus on React JS',
    company: 'HeyJobs',
    location: 'Berlin',
    workSchedule: 'Full-Time',
    description: {
      title: 'Your role',
      type: 'text',
      content: 'As a front-end developer, you are responsible for shaping how our product looks and behaves.'
    },    
    topics: [
      { 
        title: 'profile', 
        type:'list', 
        content: [`A fast-paced work yet highly caring and professional environment`] 
      }, 
      { 
        title: 'What we offer', 
        type:'list', 
        content: [`A fast-paced work yet highly caring and professional environment`] 
      }, 
      { 
        title: 'Interested?', 
        type:'text', 
        content: [`Send us your CV and we will get back to you as soon as possible.`] 
      } 
    ]
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
