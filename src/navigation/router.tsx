
import { Routes, Route} from "react-router-dom";

// Outros
import NotFound  from "./notFound";
import Home from "../page/home";
import Next from "../page/doc/Next";
import TypeScript from "../page/doc/TypeScript";
// ReactJS
import ReactJSHome from "../page/home/ReactJS";
import ReactJSFireBase from "../page/doc/ReactJS/FireBase";
import ReactJSConfg from "../page/doc/ReactJS/Confg";
import ReactJSStyledComponet from "../page/doc/ReactJS/StyledComponet";
import ReactNavigation from "../page/doc/ReactJS/ReactNavigation";

// React Native
import ReactNativeHome from "../page/home/ReactNative";
import ReactNativeFireBase from "../page/doc/ReactNative/FireBase";
import ReactNativeConfg from "../page/doc/ReactNative/Confg";
import ReactNativeStyledComponet from "../page/doc/ReactNative/StyledComponet";
import ReactNative from "../page/doc/ReactNative/ReactNative";
import Expo from "../page/doc/ReactNative/Expo";
import ReactNativeNavigation from "../page/doc/ReactNative/ReactNativeNavigation";



 const AppRouter = ()=>{

  return (
      <Routes >
        
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
        <Route path="/typescript" element={<TypeScript />} />

        <Route path="/reactjs" element={<ReactJSHome />} />
        <Route path="/reactjs/firebase" element={<ReactJSFireBase />} />
        <Route path="/reactjs/reactnavigation" element={<ReactNavigation />} />
        <Route path="/reactjs/confg" element={<ReactJSConfg />} />
        <Route path="/reactjs/styledcomponet" element={<ReactJSStyledComponet />} />

        <Route path="/reactnative" element={<ReactNativeHome />} />
        <Route path="/reactnative/expo" element={<Expo />} />
        <Route path="/reactnative" element={<ReactNative />} />
        <Route path="/reactnative/reactnativenavigation" element={<ReactNativeNavigation />} />
        <Route path="/reactnative/firebase" element={<ReactNativeFireBase />} />
        <Route path="/reactnative/confg" element={<ReactNativeConfg />} />
        <Route path="/reactnative/styledcomponet" element={<ReactNativeStyledComponet />} />  

      </Routes>
  )
}
export default AppRouter
