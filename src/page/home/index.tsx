import Item from '../components/card';
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
        <Item title={'TypeScript'} path={'/typescript'}></Item>
        <Item title={'Fire Base'} path={'/firebase'}></Item>
        <Item title={'React Navigation'} path={'/reactnavigation'}></Item>
        <Item title={'Expo'} path={'/expo'}></Item>
        <Item title={'Next'} path={'/next'}></Item>
        <Item title={'React Native'} path={'/reactnative'}></Item>
        <Item title={'Config de Ambiente'} path={'/confg'}></Item>
        <Item title={'Styled Componet'} path={'/styledcomponet'}></Item>
      </List>
    </Main>

  )
};
export default Home
//                  <Item title={''} path={'/'}></Item>   {title,path}

