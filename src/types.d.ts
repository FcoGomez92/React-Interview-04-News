export type ItemID = number
export type TopStoriesResponse = ItemID[]

interface BasicItemInfo {
  by: string
  id: ItemID
  kids: ItemID[]
  time: number
  type: 'story' | 'comment'
}

export interface StoryItemResponse extends BasicItemInfo {
  descendants: number
  score: number
  title: string
  url: string
}

export interface CommentItemResponse extends BasicItemInfo {
  parent: number
  text: string
  deleted?: boolean
}
