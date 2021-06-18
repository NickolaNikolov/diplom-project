import React from 'react';
import about from '../img/about.jpg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Lorem ipsum</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Qui, eos! Laboriosam similique autem corporis laudantium.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Nikola Nikolov</p>
                        <p>: 22</p>
                        <p>: Bulgaria</p>
                        <p>: English, Spanish, Bulgarian</p>
                        <p>: Studentski grad 54A, 209,Sofia</p>
                        <p>: Bulgaria, North Macedonia, New Zealand</p>
                    </div>
                </div>
                <button className="btn">Just a button</button>
            </div>
        </div>
    );
}

export default ImageSection;
