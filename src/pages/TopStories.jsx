import { StyledOl, StyledButton, StyledLi } from '../styles/TopStoriesStyle'
import { useRef } from 'react'
import { useTopStories } from '../hooks/useTopStories'
import { Story } from '../components/Story'

export default function TopStories () {
  const { data, error, loadMore } = useTopStories()
  const buttonRef = useRef(null)

  const handleClick = () => {
    loadMore()
    setTimeout(() => buttonRef.current.scrollIntoView({ behavior: 'smooth' }), 200)
  }

  return (
    <>
      {data?.length > 0 && (
        <>
          <StyledOl>
            {data.map(storyId => (
              <StyledLi key={storyId}>
                <Story id={storyId} />
              </StyledLi>
            ))}
          </StyledOl>
          <StyledButton ref={buttonRef} onClick={handleClick}>Load More</StyledButton>
        </>
      )}
      {error && <p>{error}</p>}
    </>
  )
}
