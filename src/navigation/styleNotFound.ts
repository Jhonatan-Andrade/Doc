import styled from 'styled-components'

export const NotFoundBox = styled.main`
    width :100vw;
    padding-top:30vh;  

`
export const NotFoundErro = styled.a`
    display:flex;
    align-items: center;
    justify-content: center;
`

export const NotFoundButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=> props.theme.colors.menu};
    width: 200px;
    margin : auto;
    border-radius:20px;
    height:50px;

`
export const NotFoundTitle = styled.a`
    color:${props=> props.theme.colors.text1};
    font-size:20pt;
    font-weight: bold;
    
`
export const NotFoundIcon = styled.a`
    font-weight: bold;
`
