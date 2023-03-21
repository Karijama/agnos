import React, {Component} from "react";
import kids from '../static/kids.svg';
import left from '../static/left.svg';
import right from '../static/right.svg';
import kidsbl from '../static/kidsbl.svg';
class home extends Component {
    render() {
        return (
            <div className="">
                <div className="flex justify-between">
                    <div><img src={left} alt='left'/></div>
                    <div className="mt-32">
                        <div className=""><img src={kids} alt='kids' className="mx-auto" /></div>
                        <p className="text-center font-bold">Помогаем провести время с пользой для <br/> молодого человека!</p>
                        <div className="mt-5 text-center"><a href="/reg"><button as='a' className="font-bold inline-flex bg-yellow-400 hover:bg-black px-20 py-2 rounded text-black hover:text-white transition-colors duration-150">
                            Стартануть!
                        </button></a></div>
                    </div>
                    <div className=""><img src={right} alt='right'/></div>
                </div>
                <div className="mt-32" id="about">
                    <div><p className="text-center font-foot text-6xl font-semibold">О проекте</p></div>
                    <div><p className="text-center font-body text-xl mt-5 font-bold">Веб-сервис агрегатор KidsGo, который <br/> совмещает в себе список мероприятий и <br/> дальнейшую регистрацию на них, <br/> 
                        доступные вакансии на подработку, а <br/> также систему геймификации, которая <br/> сохранит мотивацию.</p></div>
                </div>
                <div className="mt-32" id="likes">
                    <div><p className="text-center text-6xl font-semibold font-foot">Отзывы</p></div>
                    <div><p className="text-center text-xl mt-5 font-bold">“Если сомневаетесь то можете обратиться в к отзывам чтобы удостовериться.”</p></div>
                </div>
                <div>
                    
                </div>
                <div className="mt-32" id='feed'>
                    <div><p className="text-center text-3xl font-bold">Уже посмотрели? Так давайте <br/> зарегистрируемся!</p></div>
                    <form className="text-center mt-10">
                        <div><input placeholder="Email адрес" className="border-b-2 outline-none w-96"/></div>
                        <div className="mt-5"><input placeholder="Пароль" className="border-b-2 outline-none w-96"/></div>
                        <div className="mt-5"><a href="/reg"><button as='a' className="font-bold inline-flex bg-yellow-400 hover:bg-black px-32 py-2 rounded text-black hover:text-white transition-colors duration-150">
                            Стартуем!
                        </button></a></div>
                    </form>
                </div>
                <div className="bg-black mt-10 py-32">
                    <div className="flex justify-between">
                        <div className="basis-1/6"></div>
                        <div className="flex justify-center">
                            <div className="me-10"><img src={kidsbl} alt='kidsbl'/></div>
                            <div className="text-white ms-10">
                                <div className=""><p>Готовы взять готовность?</p></div>
                                <div className=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation<br/> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
                            </div>
                            <div>Product</div>
                        </div>
                        <div className="basis-1/6"></div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }

}
export default home;