import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={'Contact Info'} span={'Contact Info'}/>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.6919666459047!2d23.338004029183363!3d42.645080885166976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8410a46b6533%3A0x292afed10818b5d7!2z0LYu0LouINCh0YLRg9C00LXQvdGC0YHQutC4INCz0YDQsNC0IDU00JAsIDE3MzQg0KHRgtGD0LTQtdC90YLRgdC60Lgg0JrQvtC80L_Qu9C10LrRgSwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1624184873767!5m2!1sbg!2sbg" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text={'+359 885437521'} title={'Phone'}/>
                    <ContactItem icon={email} text={'nikolov.k.nikola@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text={'Sofia, Studentski grad 54A, 209'} title={'Location'}/>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
