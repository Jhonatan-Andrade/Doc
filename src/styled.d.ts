// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    title:string,

    colors:{

        bg1:string,
        bg2:string,
        menu:string,
        menuText:string,
        card:string,
        cardText:string,
        cardBorder:string,
        pageTitle:string,
        text1:string,

    }
  }
}