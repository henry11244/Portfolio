import React from 'react';
import Portfolio from './portfolio/portfolio';
import Resume from './resume/resume';
import Contacts from './contact/contact';
import AboutMe from './aboutMe/aboutMe';
import Nav from './nav/nav';
import Header from './header/header';
import Footer from './footer/footer';


function Main() {
    return (

        < div className="main" class='' >
            <Nav />;
            <Header />;
            <AboutMe />;
            <Portfolio />;
            <Resume />;
            <Contacts />;
            <Footer />;
        </div >
    )


}

export default Main