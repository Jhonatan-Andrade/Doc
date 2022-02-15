import styled from 'styled-components'

import back from '../img/back.jpg'

export const Main = styled.div`
  width:100%;
display:flex;
align-items:center;
justify-content:center;
`
export const List = styled.div`
  display: grid;
  grid-template-columns:  300px 300px 300px ;
  justify-content:center;
  padding-top: 50px ;
`
export const Card = styled.div`
   
    background-color:${props =>props.theme.colors.card};
    border-radius: 5px;
    box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    transition: all 0.3s ease-out;
    border-left: 6px solid ${props =>props.theme.colors.cardBorder};
`
export const A = styled.a`
color:${props =>props.theme.colors.cardText};
text-decoration: none;

&:hover {
  }
`
