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
        <Item title={'Expo'} path={'/reactnative/expo'}></Item>
        <Item title={'React Native'} path={'/reactnative'}></Item>
        <Item title={'React Native Navigation'} path={'/reactnative/reactnativenavigation'}></Item>
        <Item title={'Config de Ambiente'} path={'/reactnative/confg'}></Item>
        <Item title={'Styled Componet'} path={'/reactnative/styledcomponet'}></Item>
      </List>
    </Main>

  )
};
export default Home
//                  <Item title={''} path={'/'}></Item>   {title,path}

