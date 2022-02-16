import styled from 'styled-components'


export const Header = styled.header`
width:100%;
height:100px;
display: flex;
align-items: center;
justify-content:space-between;
margin-top: 50px;

`
export const Title = styled.h1`
padding-left: 18vw;
color: ${props =>props.theme.colors.pageTitle};
`
export const A = styled.a`
  text-decoration:none;
`
export const Button = styled.button`

width:50px;
height:50px;
border-radius: 25px 0  25px 25px;
color:#FFF;
font-size :20px;
background-color:${props=>props.theme.colors.menu};
border:none ;
padding-top:5px; 
transition: all 0.2s ease-out;
box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.22);
margin-right:100px;
`
