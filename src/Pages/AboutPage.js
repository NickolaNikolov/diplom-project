import React from 'react';
import Title from '../Components/Title';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'Информация'} span={'Информация'}/>
            <header className="hero">
                <p className="about-p">
                    В днешно време повече бизнеси фалират, отколкото да
                    процъфтяват. Разработил съм приложение, чрез което ще
                    уравновесим, а защо не и да преобърнем тази статистика, 
                    с помощта на метод от динамичното оптимиране.
                </p>
            </header>
        </div>
    );
}

export default AboutPage;
