import React from 'react';
import Title from '../Components/Title';
import Algorithm from '../Components/Algorithm';

const SolutionPage = () => {
    return (
        <div className="SolutionPage">
            <Title title={'Решението'} span={'Решението'}/>
            <Algorithm/>
        </div>
    );
}

export default SolutionPage;
