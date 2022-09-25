import React, { useState } from 'react';
import Portfolio from './portfolio';
import Resume from './resume';
import Contacts from './contact';
import AboutMe from './aboutMe';
import Nav from './nav';
import Header from './header';
import Footer from './footer';


function Main() {
    return (

        < div className="main" class='' >
            <Header />;
            <Nav />;
            <AboutMe />;
            <Portfolio />;
            <Resume />;
            <Contacts />;
            <Footer />;


        </div >
    )


}

export default Main