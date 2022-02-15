import styled from 'styled-components'



export const BoxMenu = styled.div`
    width :96vw;    
    height: 60px;
    line-height:60px;
    background-color:${props=>props.theme.colors.menu};
    display:flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    top:0;
    left: 0;
    padding : 0  2vw;

`
export const BoxTheme = styled.div`
    width :100px;
    height: 60px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.button`
    color:${props=>props.theme.colors.menuText};
    font-size:18pt;
    font-weight: bold;
    text-decoration:none;
    border:none;
    background-color:${props=>props.theme.colors.menu}
`