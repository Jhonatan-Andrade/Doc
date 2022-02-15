
import {BoxMenu,Title,BoxTheme} from './style'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import  Switch  from 'react-switch';
import { IoSunny ,IoMoon } from "react-icons/io5";

interface Props {
    toggleTheme():void
}
const Menu:React.FC<Props> = ({toggleTheme})=>{
    const {title,colors} = useContext(ThemeContext)
    return(
        <BoxMenu>
            <Link to={'/'}>
                <Title> My Documetation</Title> 
            </Link>
            <BoxTheme>
                <Switch
                    onChange={toggleTheme}
                    checked={title == 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={35}
                    handleDiameter={15}
                    onColor={'#0b4c81'}
                    offColor={'#0b4c81'}
                    
                />
                {title == 'dark'
                    ?
                <IoMoon  size={25} color={'#0b4c81'}/>
                    :
                <IoSunny size={30} color={'#fefefe  '}/>

                }

            </BoxTheme>
        </BoxMenu>
    )
}
export default Menu