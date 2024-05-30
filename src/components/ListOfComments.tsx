import { StyledLi } from '../styles/ListOfCommentsStyle'
import { Comment } from './Comment'
import { type ItemID } from '../types'

export function ListOfComments ({ commentList }: { commentList: ItemID[] }) {
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
