import styled from 'styled-components'

export const StyledHeader = styled.header`
display:flex;
gap:5px;
align-items:center;
`
export const StyledFooter = styled(StyledHeader)``

export const StyledTitle = styled.h1`
font-size:13px;
cursor:pointer;
:hover{
  text-decoration:underline
}
`
export const StyledDomain = styled.span`
font-size:12px;
color:#8a8a8a
`
export const StyledInfo = styled(StyledDomain)``
