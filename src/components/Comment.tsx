import { StyledHeader, StyledInfo, StyledText, StyledMain, StyledUl, StyledError, StyledReloadButton } from '../styles/CommentStyle'
import { useHNItems } from '../hooks/useHNItems'
import { ListOfComments } from './ListOfComments'
import { CommentSkeleton } from './CommentSkeleton'
import { getRelativeTime } from '../utils/getRelativetime'
import { type CommentItemResponse, type ItemID } from '../types'

export function Comment ({ id }: { id: ItemID }) {
  const { data, isLoading, error, reloadInfo } = useHNItems(id, true)

  const commentList = ((data?.kids) != null) ? data.kids.slice(0, 10) : []
  const relativetime = data !== null ? getRelativeTime(data.time) : ''

  const comment = data as CommentItemResponse

  if (isLoading) return <CommentSkeleton />
  if (error !== '') {
    return (
      <StyledError>
        {error}{' '}
        <StyledReloadButton onClick={reloadInfo}>Reload</StyledReloadButton>
      </StyledError>
    )
  }
  if (data !== null && comment.deleted === true) return <StyledInfo>Comment deleted</StyledInfo>
  return (
    <>
      <StyledHeader>
        <StyledInfo>{comment?.by}</StyledInfo>
        <StyledInfo>{relativetime}</StyledInfo>
      </StyledHeader>
      <StyledMain>
        <StyledText>
          {comment?.text}
        </StyledText>
        {((comment?.kids) != null) && comment.kids.length > 0 && (
          <StyledUl>
            <ListOfComments commentList={commentList} />
          </StyledUl>
        )}
      </StyledMain>
    </>
  )
}
