import { StyledNav, StyledLogo, StyledLogoName } from '../styles/NavbarStyle'
import { Link } from 'wouter'

export function Navbar () {
  return (
    <StyledNav>
      <StyledLogo>Y</StyledLogo>
      <Link href='/'>
        <StyledLogoName>
          Hacker News
        </StyledLogoName>
      </Link>
    </StyledNav>
  )
}
