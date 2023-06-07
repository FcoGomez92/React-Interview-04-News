import { useState, useEffect } from 'react'
import { getItemInfo } from '../services/hacker-news'

export const useHNItems = (id, isComments) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadInfo = async () => {
    setIsLoading(true)
    const result = await getItemInfo(id, isComments)

    if (result.error) {
      setError(result.error)
      setIsLoading(false)
      return
    }
    setData(result)
    setIsLoading(false)
  }

  const reloadInfo = async () => {
    setError(false)
    loadInfo()
  }

  useEffect(() => {
    loadInfo()
  }, [])

  return { data, isLoading, error, reloadInfo }
}
