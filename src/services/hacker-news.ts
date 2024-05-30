import { type TopStoriesResponse, type ItemID, type CommentItemResponse, type StoryItemResponse } from '../types'

const MAX_RESULTS = 10
const FAIL_RATE = 0.25

const handleError = (e: unknown) => {
  if (e instanceof Error) {
    return { error: e.message }
  }
  return { error: 'Something went wrong. Please try again' }
}

export const getStoriesIds = async (page = 1) => {
  try {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

    if (!res.ok) {
      throw new Error('Error fetchig stories ids')
    }
    const ids = await res.json() as TopStoriesResponse
    const firstIndex = (page - 1) * MAX_RESULTS
    const lastIndex = firstIndex + MAX_RESULTS
    const topStoriesIds = ids.slice(firstIndex, lastIndex)
    return topStoriesIds
  } catch (e) {
    return handleError(e)
  }
}

export const getItemInfo = async (id: ItemID, isComments?: boolean) => {
  try {
    if (isComments === true && Math.random() < FAIL_RATE) {
      throw new Error('Error fetchig comment info. (FORCED 25% OF TIMES)')
    }
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    if (!res.ok) {
      throw new Error('Error fetchig item info')
    }
    const data = await res.json()
    if (isComments === true) { return data as CommentItemResponse }
    return data as StoryItemResponse
  } catch (e) {
    return handleError(e)
  }
}
