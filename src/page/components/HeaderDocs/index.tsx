
import {  IoAttach  } from 'react-icons/io5' 
import {Header,Title,Button, A,} from './style'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';



type Props = {
  title:string,
  path:string
}
const HeaderDoc = ({title,path}:Props,) => {

  
const {colors} = useContext(ThemeContext)
  return (
    <Header>
      <Title>{title}</Title>
      <A  href={path} target='break' >
        <Button>
          <IoAttach    
            size={28}
            color={colors.bg3} 
          />
        </Button>
      </A>
      
    </Header>

  )
};
export default HeaderDoc