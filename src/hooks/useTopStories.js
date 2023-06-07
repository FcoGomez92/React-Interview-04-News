import { useState, useEffect, useRef } from 'react'
import { getStoriesIds } from '../services/hacker-news'
const MAX_PAGE = 50

export const useTopStories = () => {
  const page = useRef(1)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  const getData = async () => {
    const result = await getStoriesIds()

    if (result.error) {
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
    const results = await getStoriesIds(newPage)
    setData((prev) => {
      const newResults = prev.concat(results)
      page.current = newPage
      return newResults
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, error, loadMore }
}
