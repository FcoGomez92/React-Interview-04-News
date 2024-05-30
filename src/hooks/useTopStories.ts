import { useState, useEffect, useRef } from 'react'
import { getStoriesIds } from '../services/hacker-news'
import { type TopStoriesResponse } from '../types'

const MAX_PAGE = 50

export const useTopStories = () => {
  const page = useRef(1)
  const [data, setData] = useState<TopStoriesResponse>([])
  const [error, setError] = useState('')

  const getData = async () => {
    const result = await getStoriesIds()

    if ('error' in result) {
      setError(result.error)
      return
    }
    setData(result)
  }

  const loadMore = async () => {
    const newPage = page.current + 1
    if (newPage > MAX_PAGE) {
      setError('All results loaded')
      return
    }
    const result = await getStoriesIds(newPage)
    if ('error' in result) {
      setError(result.error)
      return
    }
    setData((prev) => {
      const newResults = prev.concat(result)
      page.current = newPage
      return newResults
    })
  }

  useEffect(() => {
    void getData()
  }, [])

  return { data, error, loadMore }
}
