
import React from 'react';
import Projects from './components/projects';
import Resume from './components/resume';
import Contacts from './components/contact';
import AboutMe from './components/aboutMe';

const currentPath = window.location.pathname
const pathFunction = () => {
  if (currentPath === '/Resume') { return (<Resume id='resume' />) }
  else if (currentPath === '/Projects') { return <Projects id='project' /> }
  else if (currentPath === '/Contact') { return <Contacts id='Contacts' /> }
  else if (currentPath === '/AboutMe') { return <AboutMe id='aboutMe' /> }
  else { return <AboutMe id='aboutMe' /> }
}

function App() {
  const currentPath = window.location.pathname
  console.log(currentPath)
  return (

    <div className="main" class="d-flex justify-content-center col-12">
      `{pathFunction()}`
    </div>
  );
}

export default App;
