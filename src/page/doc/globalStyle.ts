import styled from 'styled-components'

export const GStyle = styled.div`
`
export const Main = styled.main`
  width:60vw;
  background-color:${props=>props.theme.colors.bg2};
  margin:auto;
  border-radius: 10px;
  padding: 10px;
  color:${props=>props.theme.colors.text1};
`
export const P = styled.p`
  text-indent:20px;
  text-align: justify;
  font-size:14pt
  
`

