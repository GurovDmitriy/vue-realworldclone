/* eslint-disable no-console */
const casual = require("casual")
const FEED_COUNT = 30
const USERS_COUNT = 10

// global state

const stateDataBase = {
  // static
  users: [],
  feeds: [],
  // getters
  userList: [],
  feedList: [],
  tags: [],
  tagsPopular: [],
  feedCountTotal: {},
  feedCountByTag: {},
  feedCountByUser: {},
  feedCountByLike: {},
}

// core

const pipe =
  (a, b) =>
  (...args) =>
    b(a(...args))

function pipeRunner(...fns) {
  return fns.reduce(pipe)
}

// helper

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// functions

function createDefaultUser(state) {
  const defaultUser = {
    id: 1,
    role: "admin",
    userName: "Admin",
    firstName: casual.first_name,
    lastName: casual.last_name,
    image: "https://i.pravatar.cc/100?img=1",
    email: "admin@admin.com",
    password: "$2a$12$JNh1yuTk1nIWukvZZMoPPOMEG1BL2ggA8VXjB9h3uUs1zXgGgofO.",
  }

  state.users.push(defaultUser)

  return state
}

function createUsers(state) {
  for (let i = 2; i <= USERS_COUNT; i++) {
    let image = ""

    if (i % 2) {
      image = `https://i.pravatar.cc/100?img=${i}`
    }

    state.users.push({
      id: i,
      role: "user",
      userName: casual.username,
      firstName: casual.first_name,
      lastName: casual.last_name,
      image,
      email: casual.email,
      password: casual.password,
    })
  }

  return state
}

function createUserList(state) {
  Object.defineProperty(state, "userList", {
    get() {
      const data = state.users.map((item) => {
        const user = { ...item }
        delete user.password

        return user
      })

      return data
    },
  })

  return state
}

function createFeeds(state) {
  const tags = ["welcome", "introduction", "nuxt", "learn", "javascript"]

  for (let i = 1; i <= FEED_COUNT; i++) {
    const userIdRandom = randomInteger(1, USERS_COUNT)
    const tagsRandom = []
    const tagsRandomCount = randomInteger(1, tags.length)

    for (let i = 0; i < tagsRandomCount; i++) {
      const randomTag = tags[randomInteger(0, tags.length - 1)]
      if (tagsRandom.findIndex((item) => item === randomTag) !== -1) continue
      tagsRandom.push(randomTag)
    }

    const userRandom = []
    const userRandomCount = randomInteger(0, state.users.length)

    for (let i = 0; i < userRandomCount; i++) {
      const randomUser = state.users[randomInteger(0, state.users.length - 1)]
      if (userRandom.findIndex((item) => item === randomUser.id) === -1) {
        userRandom.push(randomUser.id)
      }
    }

    state.feeds.push({
      id: i,
      userId: userIdRandom,
      title: casual.title,
      preview: casual.short_description,
      content: casual.text,
      time: casual.unix_time,
      tags: tagsRandom,
      like: userRandom,
    })
  }

  return state
}

function createFeedList(state) {
  Object.defineProperty(state, "feedList", {
    get() {
      const data = this.feeds.map((item) => {
        const user = state.users.find((elem) => elem.id === item.userId)

        const id = item.id
        const like = item.like
        const time = item.time
        const title = item.title
        const tags = item.tags
        const preview = item.preview
        const image = user.image
        const userName = user.userName

        return {
          id,
          like,
          tags,
          image,
          userName,
          time,
          title,
          preview,
        }
      })

      return data
    },
  })

  return state
}

function createFeedCountTotal(state) {
  Object.defineProperty(state, "feedCountTotal", {
    get() {
      const data = {
        total: state.feeds.length,
      }

      return data
    },
  })

  return state
}

function createFeedCountByTag(state) {
  Object.defineProperty(state, "feedCountByTag", {
    get() {
      const data = {}

      state.tags.forEach((item) => {
        data[item] = getFeedListCountByTag(item)
      })

      function getFeedListCountByTag(tag) {
        let count = 0

        state.feeds.forEach((item) => {
          if (item.tags.findIndex((elem) => elem === tag) !== -1) {
            count += 1
          }
        })

        return count
      }

      return data
    },
  })

  return state
}

function createFeedCountByUser(state) {
  Object.defineProperty(state, "feedCountByUser", {
    get() {
      const data = {}

      state.users.forEach((item) => {
        const id = item.id
        const userName = item.userName

        data[userName] = getCountFeedByUser(id)
      })

      function getCountFeedByUser(id) {
        const data = state.feeds.filter((item) => item.userId === id)
        return data.length
      }

      return data
    },
  })

  return state
}

function createFeedCountByLike(state) {
  Object.defineProperty(state, "feedCountByLike", {
    get() {
      const data = {}

      state.users.forEach((item) => {
        const userId = item.id
        const userName = item.userName

        data[userName] = getCountFeedByLike(userId)
      })

      function getCountFeedByLike(id) {
        const data = state.feeds.filter((item) => {
          if (item.like.find((item) => item === id)) {
            return item
          }
          return false
        })

        return data.length
      }

      return data
    },
  })

  return state
}

function createTags(state) {
  Object.defineProperty(state, "tags", {
    get() {
      const data = []

      state.feeds.forEach((item) => {
        createTag(item.tags)
      })

      function createTag(tags) {
        tags.forEach((item) => {
          if (data.findIndex((el) => el === item) === -1) {
            data.push(item)
          }
        })
      }

      return data
    },
  })

  return state
}

function createTagsPopular(state) {
  Object.defineProperty(state, "tagsPopular", {
    get() {
      const data = []
      const countTags = {}

      state.feeds.forEach((item) => {
        createCountTags(item.tags)
      })

      function createCountTags(tags) {
        tags.forEach((item) => {
          if (!countTags[item]) {
            countTags[item] = 1
          }
          countTags[item] += 1
        })
      }

      for (const key in countTags) {
        if (countTags[key] > 10) {
          data.push(key)
        }
      }

      return data
    },
  })

  return state
}

function setResult(state) {
  return state
}

// run

function generateDataBase() {
  pipeRunner(
    createDefaultUser,
    createUsers,
    createFeeds,
    createUserList,
    createFeedList,
    createTags,
    createTagsPopular,
    createFeedCountTotal,
    createFeedCountByTag,
    createFeedCountByUser,
    createFeedCountByLike,
    setResult
  )(stateDataBase)
}

generateDataBase()

// export data

module.exports = () => {
  return stateDataBase
}

// log successful

console.log(
  `DB successfully created!
    ---
    default userName: admin
            email: admin@admin.com
            password: 123456`
)
