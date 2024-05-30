import { useState, useEffect } from 'react'
import { getItemInfo } from '../services/hacker-news'
import { type ItemID, type CommentItemResponse, type StoryItemResponse } from '../types'

export const useHNItems = (id: ItemID, isComments?: boolean) => {
  const [data, setData] = useState<CommentItemResponse | StoryItemResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const loadInfo = async () => {
    setIsLoading(true)
    const result = await getItemInfo(id, isComments)

    if ('error' in result) {
      setError(result.error)
      setIsLoading(false)
      return
    }
    setData(result)
    setIsLoading(false)
  }

  const reloadInfo = () => {
    setError('')
    void loadInfo()
  }

  useEffect(() => {
    void loadInfo()
  }, [])

  return { data, isLoading, error, reloadInfo }
}
