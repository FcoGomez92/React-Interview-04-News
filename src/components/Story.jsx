import { StyledHeader, StyledFooter, StyledTitle, StyledDomain, StyledInfo } from '../styles/StoryStyle'
import { Link } from 'wouter'
import { useHNItems } from '../hooks/useHNItems'
import { getRelativeTime } from '../utils/getRelativetime'
import { StorySkeleton } from './StorySkeleton'

export function Story ({ id }) {
  const { data, isLoading, error } = useHNItems(id)

  if (isLoading) return <StorySkeleton />
  if (error) return <p>Something went wrong!</p>

  const domain = data?.url ? new URL(data.url).hostname.replace('www.', '') : ''
  const relativetime = data?.time ? getRelativeTime(data.time) : ''
  return (
    <>
      <StyledHeader>
        <Link href={'/article/' + id}>
          <StyledTitle>{data?.title}</StyledTitle>
        </Link>
        {domain && <StyledDomain>({domain})</StyledDomain>}
      </StyledHeader>
      <StyledFooter>
        <StyledInfo>{data?.score} points</StyledInfo>
        <StyledInfo>by {data?.by}</StyledInfo>
        <StyledInfo>{relativetime}</StyledInfo>
        <StyledInfo>| {data?.kids?.length ?? 0} comments</StyledInfo>
      </StyledFooter>
    </>
  )
}
