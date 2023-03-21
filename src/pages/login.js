import React, { Component } from "react";


class login extends Component {
    render(){
        return(
            <div className="flex mt-12">
                <div className="basis-1/4"></div>
                <div className="font-body items-center basis-1/2">
                    <div className="container basis-1 mt-5">
                        <div className="xl"><h1 className="font-foot text-center text-6xl font-semibold">Войти</h1></div>
                        <div className="xl mt-3"><p className="font-body text-center text-xl font-bold">Войти в существующий аккаунт</p></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <form className="">
                            <div className="flex justify-between">
                                <div className=""><input placeholder="Логин" className="border-b-2 outline-none"/></div>
                                <div className=""><input placeholder="Пароль" className="border-b-2 outline-none"/></div>
                            </div>
                            <div className="mt-5 text-center"><a href="/"><button as='a' className="font-bold inline-flex bg-yellow-400 hover:bg-black px-24 py-3 rounded text-black hover:text-white transition-colors duration-150 text-xl">
                                Войти
                            </button></a></div>
                        </form>
                    </div>
                    <div className="container basis-1 mt-5">
                        <div><h1 className="font-foot text-center text-6xl font-semibold">Или</h1></div>
                        <div><p className="font-body text-center text-xl mt-3 font-bold">Войти с...</p></div>
                    </div>
                    <div className="flex container basis-1 mt-5 justify-between">
                        <div className="-ps-10"><button className="border rounded px-5 py-3 font-bold">Sign up with Apple</button></div>
                        <div><button className="border rounded px-5 py-3 font-bold">Sign up with Apple</button></div>
                        <div><button className="border rounded px-5 py-3 font-bold">Sign up with Apple</button></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <p className="text-center font-body font-bold">Уже есть аккаунт? Пожалуйста войдите.</p>
                    </div>
                </div>
                <div className="basis-1/4"></div>
            </div>
        );
    }
}

export default login;