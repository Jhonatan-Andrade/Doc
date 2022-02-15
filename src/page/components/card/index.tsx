import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import {Title,A} from './style'
type Props =
{
title:string,
path:string
}
const Item = ({title,path}:Props,) => {

  
  return (
    <A>
      <Link style={{
        textDecoration:'none',
        fontSize:18,
        color:`#000`
      }} to={path}>
        <Title>{title}</Title>
      </Link>
    </A>

  )
};
export default Item