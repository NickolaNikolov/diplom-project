import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

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
            <div class="services-container">
                
            </div>
        </div>
    );
}

export default AboutPage;
