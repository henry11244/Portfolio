// function Projects() {
//     return (

//         <div class=''>
//             <div class="d-flex justify-content-center col-12">
//                 <h2>Projects</h2>
//             </div>
//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://jeromes-bootcamp-adventure.herokuapp.com/" style={{
//                     backgroundImage: `url('BootcampAdventures.gif')`
//                 }} class="d-flex flex-column justify-content-end projects">Bootcamp Adventures</a>
//             </div>
//             <br></br>
//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://volunteerists.herokuapp.com/" style={{
//                     backgroundImage: `url('Volunteerist.gif')`
//                 }} class="d-flex flex-column justify-content-end projects">Volunteerist</a>
//             </div>
//             <br></br>

//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://henry11244.github.io/letsTacoBoutFood/" style={{
//                     backgroundImage: `url('LetsTacoBoutFood.gif')`
//                 }} class="d-flex flex-column justify-content-end projects">Let's Taco 'Bout Food</a>
//             </div>
//             <br></br>
//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://henry11244.github.io/WeatherDashboard/" style={{
//                     backgroundImage: `url('WeatherDashBoard.gif')`
//                 }} class="d-flex flex-column justify-content-end projects">Weather Dashboard</a>
//             </div>
//             <br></br>
//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://henry11244.github.io/WorkDayScheduler/"
//                     style={{
//                         backgroundImage: `url('WorkDayScheduler.gif')`
//                     }}
//                     class="d-flex flex-column justify-content-end projects">Workday Scheduler</a>
//             </div>
//             <br></br>
//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://henry-note-pad.herokuapp.com/"
//                     style={{
//                         backgroundImage: `url('NoteTaker.gif')`
//                     }}
//                     class="d-flex flex-column justify-content-end projects">Note Taker</a>
//             </div>
//             <br></br>
//             <div class="d-flex justify-content-center project-container">
//                 <a href="https://henry11244.github.io/JavaQuiz/"
//                     style={{
//                         backgroundImage: `url('JavaScript.gif')`
//                     }}
//                     class="d-flex flex-column justify-content-end projects">JavaScript Quiz</a>
//             </div>
//         </div>



//     )
// }

// export default Projects;

import React from 'react'
import './portfolio.css'
// import portfolio project images
import JavaScript from '../assets/JavaScript.png'
import LetsTacoBoutFood from '../assets/LetsTacoBoutFood.png'
import NoteTaker from '../assets/NoteTaker.png'
import BootcampAdventures from '../assets/BootcampAdventures.png'
import BloggingSite from '../assets/BloggingSite.png'
import WeatherDashBoard from '../assets/WeatherDashBoard.png'
import WorkDayScheduler from '../assets/WorkDayScheduler.png'
import Volunteerist from '../assets/Volunteerist.png'

const data = [
    {
        id: 1,
        image: BootcampAdventures,
        title: 'Bootcamp Adventures',
        github: 'https://github.com/henry11244/Bootcamp-Adventures',
        demo: 'https://jeromes-bootcamp-adventure.herokuapp.com/'
    },
    {
        id: 2,
        image: Volunteerist,
        title: 'Volunteerist',
        github: 'https://github.com/henry11244/Volunteerist',
        demo: 'https://volunteerists.herokuapp.com/'
    },
    {
        id: 3,
        image: BloggingSite,
        title: 'Blogging Site',
        github: 'https://github.com/henry11244/Blogging-Site',
        demo: 'https://blogging-site-henry.herokuapp.com/'
    },
    {
        id: 4,
        image: LetsTacoBoutFood,
        title: `Let's Taco 'Bout Food`,
        github: 'https://github.com/henry11244/letsTacoBoutFood',
        demo: 'https://henry11244.github.io/letsTacoBoutFood/'
    },
    {
        id: 5,
        image: WorkDayScheduler,
        title: 'Workday Scheduler',
        github: 'https://github.com/henry11244/WorkDayScheduler',
        demo: 'https://henry11244.github.io/WorkDayScheduler/'
    },
    {
        id: 6,
        image: WeatherDashBoard,
        title: 'Weather Dashboard',
        github: 'https://github.com/henry11244/WeatherDashboard',
        demo: 'https://henry11244.github.io/WeatherDashboard/'
    },

    {
        id: 7,
        image: NoteTaker,
        title: 'Note Pad',
        github: 'https://github.com/henry11244/Note-Pad',
        demo: 'https://henry-note-pad.herokuapp.com/'
    },
    {
        id: 8,
        image: JavaScript,
        title: 'Social Network Backend API',
        github: 'https://github.com/henry11244/JavaQuiz',
        demo: 'https://henry11244.github.io/JavaQuiz/'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>

            <h2 className="d-flex justify-content-center flex-wrap">Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn btn-primary github' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary demo' target='_blank'>Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio