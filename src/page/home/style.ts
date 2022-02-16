import styled from 'styled-components'


export const Main = styled.div`
  width:100vw;
  height:calc(100vh - 60px);
  display:flex;
  align-items:center;
  justify-content:center;
  color:'#fff';
`
export const Title = styled.h1`
  color:${props=>props.theme.colors.text1};
  font-size :24pt
`
export const Text = styled.p`
  color:${props=>props.theme.colors.text1};
  font-size :14pt
`