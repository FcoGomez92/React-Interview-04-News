import { StyledTitle, StyledSubtitle, StyledUl } from '../styles/ArticleStyle'
import { useHNItems } from '../hooks/useHNItems'
import { ListOfComments } from '../components/ListOfComments'
import { type StoryItemResponse } from '../types'

export default function Article ({ params }: { params: { id: string } }) {
  const { data, error } = useHNItems(Number(params.id))

  const commentList = data !== null && data?.kids?.length > 0 ? data.kids.slice(0, 10) : []

  const story = data as StoryItemResponse

  if (error !== '') return <p>Something went wrong!</p>
  return (
    <>
      <StyledTitle>{story?.title}</StyledTitle>
      <StyledSubtitle>Comments:</StyledSubtitle>
      <StyledUl>
        <ListOfComments commentList={commentList} />
      </StyledUl>
    </>
  )
}
