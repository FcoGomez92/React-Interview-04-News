import { StyledHeader, StyledInfo, StyledText, StyledMain, StyledUl, StyledError, StyledReloadButton } from '../styles/CommentStyle'
import { useHNItems } from '../hooks/useHNItems'
import { ListOfComments } from './ListOfComments'
import { CommentSkeleton } from './CommentSkeleton'
import { getRelativeTime } from '../utils/getRelativetime'

export function Comment ({ id }) {
  const { data, isLoading, error, reloadInfo } = useHNItems(id, true)

  const commentList = data?.kids ? data.kids.slice(0, 10) : []
  const relativetime = data?.time ? getRelativeTime(data.time) : ''

  if (isLoading) return <CommentSkeleton />
  if (error) {
    return (
      <StyledError>
        {error}{' '}
        <StyledReloadButton onClick={reloadInfo}>Reload</StyledReloadButton>
      </StyledError>
    )
  }
  if (data?.deleted) return <StyledInfo>Comment deleted</StyledInfo>
  return (
    <>
      <StyledHeader>
        <StyledInfo>{data?.by}</StyledInfo>
        <StyledInfo>{relativetime}</StyledInfo>
      </StyledHeader>
      <StyledMain>
        <StyledText>
          {data?.text}
        </StyledText>
        {data?.kids && data.kids.length > 0 && (
          <StyledUl>
            <ListOfComments commentList={commentList} />
          </StyledUl>
        )}
      </StyledMain>
    </>
  )
}
