import { StyledHeader, StyledFooter, StyledTitle, StyledDomain, StyledInfo } from '../styles/StoryStyle'
import { Link } from 'wouter'
import { useHNItems } from '../hooks/useHNItems'
import { getRelativeTime } from '../utils/getRelativetime'
import { StorySkeleton } from './StorySkeleton'
import { type ItemID, type StoryItemResponse } from '../types'

export function Story ({ id }: { id: ItemID }) {
  const { data, isLoading, error } = useHNItems(id)

  if (isLoading) return <StorySkeleton />
  if (error !== '') return <p>Something went wrong!</p>

  const relativetime = data !== null ? getRelativeTime(data.time) : ''

  const story = data as StoryItemResponse
  const domain = data !== null && typeof story.url === 'string' ? new URL(story.url).hostname.replace('www.', '') : ''

  return (
    <>
      <StyledHeader>
        <Link href={'/article/' + id.toString()}>
          <StyledTitle>{story?.title}</StyledTitle>
        </Link>
        {domain !== '' && <StyledDomain>({domain})</StyledDomain>}
      </StyledHeader>
      <StyledFooter>
        <StyledInfo>{story?.score} points</StyledInfo>
        <StyledInfo>by {story?.by}</StyledInfo>
        <StyledInfo>{relativetime}</StyledInfo>
        <StyledInfo>| {story?.kids?.length ?? 0} comments</StyledInfo>
      </StyledFooter>
    </>
  )
}
