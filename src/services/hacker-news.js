const MAX_RESULTS = 10
const FAIL_RATE = 0.25

export const getStoriesIds = async (page = 1) => {
  try {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

    if (!res.ok) {
      throw new Error('Error fetchig stories ids')
    }
    const ids = await res.json()
    const firstIndex = (page - 1) * MAX_RESULTS
    const lastIndex = firstIndex + MAX_RESULTS
    const topStoriesIds = ids.slice(firstIndex, lastIndex)
    return topStoriesIds
  } catch (e) {
    console.error(e.message)
    return { error: e.message }
  }
}

export const getItemInfo = async (id, isComments) => {
  try {
    if (isComments && Math.random() < FAIL_RATE) {
      throw new Error('Error fetchig comment info. (FORCED 25% OF TIMES)')
    }
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    if (!res.ok) {
      throw new Error('Error fetchig item info')
    }
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e.message)
    return { error: e.message }
  }
}
