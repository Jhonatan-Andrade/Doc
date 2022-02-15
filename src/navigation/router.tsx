
import { Routes, Route, Link } from "react-router-dom";

import Home from "../page/home";
import FireBase from "../page/doc/FireBase";
import TypeScript from "../page/doc/TypeScript";
import ReactNavigation from "../page/doc/ReactNavigation";
import Expo from "../page/doc/Expo";
import Next from "../page/doc/Next";
import ReactNative from "../page/doc/ReactNative";
import Confg from "../page/doc/Confg";
import StyledComponet from "../page/doc/StyledComponet";
import  {NotFound}  from "./notFound";


 const AppRouter = ()=>{

  return (
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/typescript" element={<TypeScript />} />
        <Route path="/firebase" element={<FireBase />} />
        <Route path="/reactnavigation" element={<ReactNavigation />} />
        <Route path="/expo" element={<Expo />} />
        <Route path="/next" element={<Next />} />
        <Route path="/reactnative" element={<ReactNative />} />
        <Route path="/confg" element={<Confg />} />
        <Route path="/styledcomponet" element={<StyledComponet />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  )
}
export default AppRouter