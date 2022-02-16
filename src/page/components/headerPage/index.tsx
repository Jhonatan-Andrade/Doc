
import {BoxMenu,Title,BoxTheme,Nav,List,ItemList} from './style'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import  Switch  from 'react-switch';
import { IoSunny ,IoMoon } from "react-icons/io5";


export default function Menu({toggleTheme}:any) {

    const {title,colors} = useContext(ThemeContext)

    return(
        <BoxMenu>
            <Link style={{textDecoration:'none'}} to={'/'}>
                <Title> My Documetation</Title>
            </Link>
            <Nav>
                <List>
                    <Link style={{textDecoration:'none'}}  to={'/typescript'}><ItemList>TypeScript</ItemList></Link>
                    <Link style={{textDecoration:'none'}}  to={'/reactnative'}><ItemList>React Native</ItemList></Link>
                    <Link style={{textDecoration:'none'}}  to={'/reactjs'}><ItemList>ReactJS</ItemList></Link>
                    <Link style={{textDecoration:'none'}}  to={'/next'}><ItemList>Next</ItemList></Link>
                </List>
            </Nav>
            <BoxTheme>
                <Switch
                    onChange={toggleTheme}
                    checked={title == 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={35}
                    handleDiameter={15}
                    onColor={`${colors.bg3}`}
                    offColor={`${colors.bg3}`}
                    
                />
                {title == 'dark'
                    ?
                <IoMoon  size={25} color={`${colors.bg3}`}/>
                    :
                <IoSunny size={30} color={`${colors.menuText}`}/>
                }
            </BoxTheme>
        </BoxMenu>
    )
}