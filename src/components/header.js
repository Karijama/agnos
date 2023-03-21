import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from '../pages/home.js';
import Home2 from '../pages/home2.js';
import Register from '../pages/register.js';
import Login from '../pages/login.js';
import logo from '../static/smile.svg';

function header() {
    return(
        <div className="font-body">
            <div className="container flex py-3">
                <div className="container basis-1/4"><a><img src={logo} className="w-1/4 py-2" alt='logo'/></a></div>
                <div className="container flex justify-between py-3 basis-1/2">
                    <div className="font-bold"><a href="/" className="text-xl">Главная</a></div>
                    <div className="font-bold"><a href="#about" className="text-xl">О проекте</a></div>
                    <div className="font-bold"><a href="#likes" className="text-xl">Отзывы</a></div>
                    <div className="font-bold"><a href="#feed" className="text-xl">Связаться</a></div>
                </div>
                <div className="container basis-1/4 ms-8"><a href="/reg"><button as='a' className="font-bold inline-flex bg-yellow-400 hover:bg-black px-7 py-2 rounded text-black hover:text-white transition-colors duration-150">
                    Войти
                </button></a></div>
            </div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/reg" element={<Register/>} />
                    <Route path="/log" element={<Login/>} />
                    <Route path="/main" element={<Home2/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default header;