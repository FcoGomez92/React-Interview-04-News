import { StyledTitle, StyledSubtitle, StyledUl } from '../styles/ArticleStyle'
import { useHNItems } from '../hooks/useHNItems'
import { ListOfComments } from '../components/ListOfComments'

export default function Article ({ params }) {
  const { data, error } = useHNItems(params.id)

  const commentList = data?.kids ? data.kids.slice(0, 10) : []

  if (error) return <p>Something went wrong!</p>
  return (
    <>
      <StyledTitle>{data?.title}</StyledTitle>
      <StyledSubtitle>Comments:</StyledSubtitle>
      <StyledUl>
        <ListOfComments commentList={commentList} />
      </StyledUl>
    </>
  )
}
