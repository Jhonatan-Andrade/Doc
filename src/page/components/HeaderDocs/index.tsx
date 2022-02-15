
import {  IoAttach  } from 'react-icons/io5' 
import {Header,Title,Button, A,} from './style'

type Props = {
  title:string,
  path:string
}
const HeaderDoc = ({title,path}:Props,) => {

  
  return (
    <Header>
      <Title>{title}</Title>
      <A  href={path} target='break' >
        <Button>
          <IoAttach    
            size={28}
            color="#fff" 
          />
        </Button>
      </A>
      
    </Header>

  )
};
export default HeaderDoc