import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skils-container">
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'Angular'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'C#'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'ReactJS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'HTML'} progress={'94%'} width={'94%'} />
                <SkillsSection skill={'UI / UX design'} progress={'45%'} width={'45%'} />
            </div>
            <Title title={'Services'} span={'Services'}/>
            <div class="services-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Int.'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Dev.'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
            </div>
        </div>
    );
}

export default AboutPage;
