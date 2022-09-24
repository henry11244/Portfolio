import React, { useState } from 'react';
import Portfolio from './portfolio';
import Resume from './resume';
import Contacts from './contact';
import AboutMe from './aboutMe';
import Nav from './nav';


function Main() {
    const [page, setPage] = useState('');
    // setPage('aboutMe')
    console.log(page)
    const pathFunction = () => {
        if (page === 'resume') {
            return <Resume />;
        }
        if (page === 'projects') {
            return <Portfolio />;
        }
        if (page === 'contacts') {
            return <Contacts />;
        }
        if (page === 'aboutMe') {
            return <AboutMe />;
        }

    }


    return (

        < div className="main" class='' >


            <Nav />;
            <AboutMe />;
            <Portfolio />;
            <Resume />;
            <Contacts />;
            {/* 
            {pathFunction()} */}

        </div >
    )


}

export default Main