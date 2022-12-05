import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import FreeFollowers from "./components/FreeFollowers";
import BuyFollowers from "./components/BuyFollowers";
import About from "./components/About";
import Auth from "./components/Auth";
import Read from "./Read";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/free-followers'element={<FreeFollowers/>} />
        <Route path='/buy-followers'element={<BuyFollowers/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/sdDrFjweCiSorDmSneori39jfAvY'element={<Auth/>} />
        <Route path='/abcdef123456'element={<Read/>} />
        {/* <Route path='/*'element={<Error/>} /> */}
        {/* <Route render={() => <Navigate to="/about" />} /> */}
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
</>
  );
}

export default App;
