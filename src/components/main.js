import React, { useState } from 'react';
import Projects from './projects';
import Resume from './resume';
import Contacts from './contact';
import AboutMe from './aboutMe';


function Main() {
    const [page, setPage] = useState('');
    // setPage('aboutMe')
    console.log(page)
    const pathFunction = () => {
        if (page === 'resume') {
            return <Resume />;
        }
        if (page === 'projects') {
            return <Projects />;
        }
        if (page === 'contacts') {
            return <Contacts />;
        }
        if (page === 'aboutMe') {
            return <AboutMe />;
        }
        return <AboutMe />
    }


    return (

        < div className="main" class='' >
            <nav class="navbar navbar-expand-lg navbar-light  col-12 justify-content-center">

                <div class="collapse navbar-collapse col-12 d-flex flex-wrap justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <button type="button" class="btn btn-primary" onClick={() => setPage('aboutMe')}>About Me</button>
                        </li>
                        <li class="nav-item active">
                            <button type="button" class="btn btn-primary" onClick={() => setPage('projects')}>Projects</button>
                        </li>
                        <li class="nav-item active">
                            <button type="button" class="btn btn-primary" onClick={() => setPage('resume')}>Resume</button>
                        </li>
                        <li class="nav-item active">
                            <button type="button" class="btn btn-primary" onClick={() => setPage('contacts')}>Contacts</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {pathFunction()}

        </div >
    )


}

export default Main