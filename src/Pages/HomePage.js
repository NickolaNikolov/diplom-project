import React from 'react';
import Title from '../Components/Title';

const HomePage = () => {
    return (
        <div className="HomePage">
            <Title title={'Начало'} span={'Начало'}/>
            <header className="hero">
                <h2 className="hero-text">
                    <span>Оптимално разпределение на капиталовложения </span>
                    на високотехлогична компания 
                </h2>
                <p className="home-p">
                    В днешно време повече бизнеси фалират, отколкото да
                    процъфтяват. Разработил съм приложение, чрез което ще
                    уравновесим, а защо не и да преобърнем тази статистика, 
                    с помощта на метод от динамичното оптимиране.
                </p>
            </header>
        </div>
    );
}

export default HomePage;
