import styled from 'styled-components'


export const A = styled.a`
  color:${props =>props.theme.colors.cardText};
  text-decoration: none;
`
export const Title = styled.div`
  background-color:${props =>props.theme.colors.card};
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  transition: all 0.2s ease-out;
  border-left: 6px solid ${props =>props.theme.colors.cardBorder};
  color:${props =>props.theme.colors.cardText};
`

