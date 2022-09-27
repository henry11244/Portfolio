// function Projects() {

// export default Projects;

import React from 'react'
import './portfolio.css'
// import portfolio project images
import JavaScript from './projectImg/JavaScript.png'
import LetsTacoBoutFood from './projectImg/LetsTacoBoutFood.png'
import NoteTaker from './projectImg/NoteTaker.png'
import BootcampAdventures from './projectImg/BootcampAdventures.png'
import BloggingSite from './projectImg/BloggingSite.png'
import WeatherDashBoard from './projectImg/WeatherDashBoard.png'
import WorkDayScheduler from './projectImg/WorkDayScheduler.png'
import Volunteerist from './projectImg/Volunteerist.png'

const data = [
    {
        id: 1,
        image: BootcampAdventures,
        title: 'Bootcamp Adventures',
        description: 'An interactive game inspired by Flappy Bird',
        github: 'https://github.com/henry11244/Bootcamp-Adventures',
        demo: 'https://jeromes-bootcamp-adventure.herokuapp.com/'
    },
    {
        id: 2,
        image: Volunteerist,
        title: 'Volunteerist',
        description: 'Event hosting site with an emphasis on volunteer work',
        github: 'https://github.com/henry11244/Volunteerist',
        demo: 'https://volunteerists.herokuapp.com/'
    },
    {
        id: 3,
        image: BloggingSite,
        title: 'Blogging Site',
        description: 'An intuitive site for creating, reading and commenting on blog posts',
        github: 'https://github.com/henry11244/Blogging-Site',
        demo: 'https://blogging-site-henry.herokuapp.com/'
    },
    {
        id: 4,
        image: LetsTacoBoutFood,
        title: `Let's Taco 'Bout Food`,
        description: 'Tool for discovering new restaurants',
        github: 'https://github.com/henry11244/letsTacoBoutFood',
        demo: 'https://henry11244.github.io/letsTacoBoutFood/'
    },
    {
        id: 5,
        image: WorkDayScheduler,
        title: 'Workday Scheduler',
        description: 'Workday planning application',
        github: 'https://github.com/henry11244/WorkDayScheduler',
        demo: 'https://henry11244.github.io/WorkDayScheduler/'
    },
    {
        id: 6,
        image: WeatherDashBoard,
        title: 'Weather Dashboard',
        description: 'Weather dashboard utilizing the Open Weather API',
        github: 'https://github.com/henry11244/WeatherDashboard',
        demo: 'https://henry11244.github.io/WeatherDashboard/'
    },

    {
        id: 7,
        image: NoteTaker,
        title: 'NotePad',
        description: 'Note taking application',
        github: 'https://github.com/henry11244/Note-Pad',
        demo: 'https://henry-note-pad.herokuapp.com/'
    },
    {
        id: 8,
        image: JavaScript,
        title: 'JavaScript Quiz',
        description: 'JavaScript quiz application',
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
                    data.map(({ id, image, title, description, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <a className='portfolio__item-image' href={demo} className='btn btn-primary demo' target='_blank'>
                                    <img src={image} alt={title} id="portfolioImg" />
                                </a>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn btn-primary github' target='_blank'>Github</a>
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