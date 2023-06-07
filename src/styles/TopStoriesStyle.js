import styled from 'styled-components'

export const StyledOl = styled.ol`
display:flex;
flex-direction:column;
gap:10px;
margin-top:0;
`
export const StyledLi = styled.li`
& > * {
  vertical-align: text-top;
}
`
export const StyledButton = styled.button`
cursor:pointer;
margin:20px 0;
border:none;
padding:10px 20px;
font-weight:bold;
background:#f60;
:hover {
  opacity:0.8
}
`
