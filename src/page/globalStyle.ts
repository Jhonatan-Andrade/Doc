import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
}
body{
    font-family: Arial, Helvetica, sans-serif;

    background-color:${props=>props.theme.colors.bg1};
}
`
