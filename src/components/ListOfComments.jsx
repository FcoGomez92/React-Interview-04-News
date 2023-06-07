import { StyledLi } from '../styles/ListOfCommentsStyle'
import { Comment } from './Comment'

export function ListOfComments ({ commentList }) {
  return (
    <>
      {commentList?.length > 0 && commentList.map(comment => (
        <StyledLi key={comment}>
          <Comment id={comment} />
        </StyledLi>
      ))}
    </>
  )
}
