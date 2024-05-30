import styled from 'styled-components'

export const StyledHeader = styled.header`
display:flex;
gap:5px;
`
export const StyledInfo = styled.p`
font-size:11px;
color:#8a8a8a;
`
export const StyledText = styled.p`
font-size:13px;
line-height:18px;
`
export const StyledMain = styled.main`
display:flex;
flex-direction:column;
gap:15px;
`
export const StyledUl = styled.ul`
display:flex;
flex-direction:column;
gap:15px;
padding-left:30px;
list-style:none
`
export const StyledError = styled.small`
font-size:11px;
color:red
`
export const StyledReloadButton = styled.button`
cursor:pointer;
font-size:11px;
color:red;
border:none;
padding:3px 6px;
background:#ffe2e2;
:hover{
  opacity:0.8
}
`
