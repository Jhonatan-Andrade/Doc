import Item from '../../components/card';
import {Main,List } from './style'


type Props =
{
title:string,
path:string
}

const Home = () => {
  return (
    <Main>
      <List>
        <Item title={'Fire Base'} path={'/reactjs/firebase'}></Item>
        <Item title={'React Navigation'} path={'/reactjs/reactnavigation'}></Item>
        <Item title={'Config de Ambiente'} path={'/reactjs/confg'}></Item>
        <Item title={'Styled Componet'} path={'/reactjs/styledcomponet'}></Item>
      </List>
    </Main>

  )
};
export default Home
//                  <Item title={''} path={'/'}></Item>   {title,path}

