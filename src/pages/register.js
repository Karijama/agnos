import React, { Component } from "react";

class register extends Component {
    render(){
        return(
            <div className="flex mt-12">
                <div className="basis-1/4"></div>
                <div className="font-body text-center basis-1/2">
                    <div className="container basis-1 mt-5">
                        <div className="xl"><h1 className="font-foot text-center text-6xl font-semibold">Зарегистрироваться</h1></div>
                        <div className="xl mt-3"><p className="font-body text-center text-xl font-bold">Заполните поля для создания аккаунта</p></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <form className="flex justify-between">
                            <div>
                                <div className=""><input placeholder="Логин" className="border-b-2 outline-none w-64"/></div>
                                <div className="mt-10"><input placeholder="Пароль" type="password" className="border-b-2 outline-none w-64"/></div>
                            </div>
                            <div className="">
                                <div><input placeholder="Email адрес" className="border-b-2 outline-none w-64"/></div>
                                <div className="mt-8"><a href="/main"><button as='a' className="inline-flex bg-yellow-400 hover:bg-black px-24 py-2 rounded text-black hover:text-white transition-colors duration-150">
                                    Создать
                                </button></a></div>
                            </div>
                        </form>
                    </div>
                    <div className="container basis-1 mt-5">
                        <div><h1 className="font-foot text-center text-6xl font-semibold">Или</h1></div>
                        <div><p className="font-body text-center text-xl mt-3 font-bold">Зарегистрироваться с...</p></div>
                    </div>
                    <div className="flex container basis-1 mt-5 justify-between">
                        <div className="-ps-10"><button className="border rounded px-5 py-3 font-bold">Sign up with Apple</button></div>
                        <div><button className="border rounded px-5 py-3 font-bold">Sign up with Apple</button></div>
                        <div><button className="border rounded px-5 py-3 font-bold">Sign up with Apple</button></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <p className="text-center font-body font-bold">Уже есть аккаунт? <a href="/log" className="text-yellow-400 hover:text-yellow-500 font-bold">Пожалуйста войдите.</a></p>
                    </div>
                </div>
                <div className="basis-1/4"></div>
            </div>
        );
    }
}

export default register;