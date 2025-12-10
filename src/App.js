import React from "react";
import ReactDOM from 'react-dom/client'
import Logo from "./assets/logo.png"

import {Header} from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter , Routes,Route} from "react-router";
import About from "./components/About";
import Restaurant from "./components/Restaurant";

const Main = ()=>{
    return(
        <div className="main-container">
            <BrowserRouter> 
            <Header/>
            
                <Routes>
                    <Route path = "/" element = {<Body/>} /> 
                    <Route path = "/about" element = {<About/>} /> 
                    <Route path = "/restaurants/:id" element = {<Restaurant/>}  />
                </Routes>
            
            <Footer/>
            </BrowserRouter>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
            <Main />
            );