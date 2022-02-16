import styled from 'styled-components'




export const BoxMenu = styled.div`
    width :100vw;    
    height: 60px;
    line-height:60px;
    background-color:${props=>props.theme.colors.menu};
    display:flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    top:0;
    left: 0;
    padding:0 2vw;
`
export const Title = styled.a`
    color:${props=>props.theme.colors.menuText};
    font-size:18pt;
    font-weight: bold;
    background-color:${props=>props.theme.colors.menu};
    width:15vw;
    
`
export const Nav = styled.div`
    width:64vw;
    height:60px;
`
export const List = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const ItemList = styled.a`
    margin:0 7px;
    color : ${props=>props.theme.colors.menuText};
    padding:0 10px;
    display:flex;  
    transition-duration: 0.2s;
    &:hover{
        color:${props=>props.theme.colors.bg3};
    }
`
export const BoxTheme = styled.div`
    width :15vw;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 60px;
`
